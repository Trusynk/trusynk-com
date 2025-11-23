import type { CollectionConfig } from 'payload'

export const ContentFeedback: CollectionConfig = {
  slug: 'content-feedback',
  admin: {
    useAsTitle: 'id',
    defaultColumns: ['feedback_type', 'content_type', 'content_id', 'createdAt'],
    group: 'Feedback & Analytics',
    description: 'User feedback collected from various parts of the website',
  },
  access: {
    create: () => true,
    read: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },
  fields: [
    {
      name: 'feedback_type',
      type: 'select',
      required: true,
      options: [
        {
          label: '👍 Positive',
          value: 'positive',
        },
        {
          label: '👎 Negative',
          value: 'negative',
        },
      ],
      admin: {
        description: 'Type of feedback received',
        position: 'sidebar',
      },
    },
    {
      name: 'content_type',
      type: 'text',
      required: true,
      admin: {
        description: 'The type of content being rated (e.g., faq, blog, feature, page)',
        position: 'sidebar',
      },
    },
    {
      name: 'content_id',
      type: 'text',
      admin: {
        description: 'Optional identifier for specific content (e.g., article slug, page ID)',
        position: 'sidebar',
      },
    },
    {
      name: 'message',
      type: 'textarea',
      admin: {
        description: 'Optional user message providing detailed feedback',
        rows: 5,
      },
    },
    {
      name: 'page_url',
      type: 'text',
      admin: {
        description: 'URL where feedback was submitted',
      },
    },
    {
      name: 'metadata',
      type: 'json',
      admin: {
        description: 'Additional contextual information stored as JSON',
      },
    },
    {
      name: 'user_agent',
      type: 'text',
      admin: {
        description: 'Browser/device information',
        readOnly: true,
      },
    },
    {
      name: 'ip_address',
      type: 'text',
      admin: {
        description: 'IP address of the user (if available)',
        readOnly: true,
      },
    },
  ],
  timestamps: true,
}
