import { FAQProps } from '@/types/faq'

export const FAQ_ITEMS: FAQProps[] = [
  {
    question: 'What is Trusynk?',
    answer:
      'Trusynk automates what happens after networking. Instead of focusing on the handshake, it captures interactions, enriches contact data, and routes qualified leads straight into your pipeline—automatically—so you don’t waste time manually transferring or chasing contacts.',
  },
  {
    question: 'Do I need a physical NFC card to use Trusynk?',
    answer:
      'No. The physical NFC card is optional. It speeds up sharing during events, but Trusynk’s core value is post-networking automation: any shared link, QR scan, or manual import will be captured, enriched, and sent into your workflow the same way.',
  },
  {
    question: 'How does Trusynk capture interactions after an event?',
    answer:
      'Every tap, QR scan, or profile share is recorded as an interaction. Trusynk automatically enriches that contact (email, company, role, social handles where available), tags the interaction by source/event, and triggers configured follow-up workflows or pushes the contact to your CRM.',
  },
  {
    question: 'What automation happens by default after a contact is captured?',
    answer:
      'By default Trusynk logs the interaction, enriches the contact, creates a contact record, and queues it for follow-up. You can enable automated email nudges, assign leads to team members, add event tags, or push contacts into your CRM via webhook or native integrations.',
  },
  {
    question: 'How does Trusynk improve lead follow-up and conversion?',
    answer:
      'It removes manual friction: contacts arrive clean, enriched, and categorized. Automated follow-ups and assignment rules mean you engage while interest is hot—improving response rates and converting more conversations into opportunities.',
  },
  {
    question: 'Can Trusynk send captured leads directly to our CRM or marketing tools?',
    answer:
      'Yes. Trusynk supports CSV export, webhooks, and native or partner integrations for major CRMs and automation tools. For enterprise customers we offer deeper connectors, API access, and custom integration work.',
  },
  {
    question: 'What analytics will I see for post-networking performance?',
    answer:
      'You get engagement metrics like contacts captured per event, conversion rates, time-to-first-follow-up, source attribution, top performing events, and team response times. Premium tiers include cohort analysis, funnel reports, and exportable dashboards.',
  },
  {
    question: 'How accurate is the contact enrichment?',
    answer:
      'Enrichment is probabilistic and sourced from public signals; accuracy improves with more data (email, company website). We surface confidence scores and let you review or override enriched fields before they sync to downstream systems.',
  },
  {
    question: 'Who can view a shared Trusynk profile?',
    answer:
      'Anyone can view public profile fields via link, tap, or QR without creating an account. Private fields, gated content, or actions (like claiming resources) can require sign-up or verification based on your privacy settings.',
  },
  {
    question: 'Can teams use Trusynk to manage event leads at scale?',
    answer:
      'Yes. Teams can provision multiple cards, centralize captured leads, apply shared tags and automations, and distribute leads to reps with assignment rules. Bulk ordering, branded templates, and team admin controls are available for organizational rollout.',
  },
  {
    question: 'What happens if I lose my card or need to deactivate it?',
    answer:
      'Losing a card does not affect your account or past captures. You can remotely deactivate a card from the dashboard, provision a replacement, and instantly reassign profiles to a new card so the post-networking pipeline stays intact.',
  },
  {
    question: 'How long before I see captured leads appear in my workflow?',
    answer:
      'Captures and basic enrichment appear within seconds to minutes. Deeper enrichment or third-party lookups may take slightly longer. All captures are timestamped so you can measure time-to-first-follow-up precisely.',
  },
  {
    question: 'Is my data secure and compliant?',
    answer:
      'Yes. Trusynk uses HTTPS/TLS for data in transit, encryption at rest, role-based access controls, and regular security reviews. We allow you to control which fields are public and provide enterprise options like SSO, SCIM, and stricter data retention policies on request.',
  },
  {
    question: 'Which devices and fallback options are supported?',
    answer:
      'Most modern iOS and Android devices with NFC will open a profile on tap. For devices without NFC or older phones, recipients can scan a QR code or open a shared link—Trusynk captures those interactions identically so your pipeline remains consistent.',
  },
  {
    question: 'How do I get started and what support is available?',
    answer:
      'Sign up for an account, create your digital profile, and choose your sharing method (card, link, or QR). We provide onboarding docs, templates for event setups, and email support. Enterprise customers receive priority onboarding and optional implementation assistance.',
  },
  {
    question: 'How can I order cards in bulk or request enterprise features?',
    answer:
      'For bulk orders, custom branding, SSO, API access, or enterprise SLAs, contact our sales team via “Request a Demo” or “Talk to Sales.” We handle volume pricing, provisioning, and custom integration work for enterprise deployments.',
  },
]
