import { CATEGORY_RULES } from '@/data/category-rules'
import type { CategorizedFAQItem, FAQCategory, FAQProps } from '@/types/faq'
import { randomUUID } from 'node:crypto'

/**
 * Create a URL-friendly slug from text
 */
function createSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .substring(0, 60) // Limit length
}

/**
 * Generate a hybrid ID: slug + short UUID
 */
function makeHybridId(question: string): string {
  const slug = createSlug(question)
  const shortUuid = randomUUID().split('-')[0] // Take first segment (8 chars)
  return `${slug}-${shortUuid}`
}

export function categorizeFAQItem(faq: FAQProps): CategorizedFAQItem {
  const q = `${faq.question} ${faq.answer || ''}`.toLowerCase()

  const rule = CATEGORY_RULES.find((r) => r.keywords.some((k) => q.includes(k)))

  const category = rule?.name ?? 'General'

  return {
    ...faq,
    category,
    id: makeHybridId(faq.question),
  }
}

export function categorizeFAQs(faqs: FAQProps[]): FAQCategory[] {
  const mapped = faqs.map(categorizeFAQItem)

  const groups = new Map<string, CategorizedFAQItem[]>()

  // Build groups
  for (const item of mapped) {
    const existing = groups.get(item.category)
    if (existing) {
      existing.push(item)
    } else {
      groups.set(item.category, [item])
    }
  }

  // Get ordered category names
  const orderedNames = CATEGORY_RULES.map((r) => r.name).concat(
    [...groups.keys()].filter((k) => !CATEGORY_RULES.some((r) => r.name === k)),
  )

  const categories: FAQCategory[] = []
  const seen = new Set<string>()

  // Add categories in order
  for (const name of orderedNames) {
    const items = groups.get(name)
    if (items && items.length > 0) {
      categories.push({ name, items })
      seen.add(name)
    }
  }

  // Add any remaining categories not in rules
  for (const [name, items] of groups.entries()) {
    if (!seen.has(name) && items.length > 0) {
      categories.push({ name, items })
    }
  }

  return categories
}

export function topFAQs(faqs: FAQProps[], n = 7): FAQProps[] {
  return faqs.slice(0, n)
}
