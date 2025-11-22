import { CollectionConfig } from 'payload'

export const EarlyAccessForm: CollectionConfig = {
  slug: 'early-access-forms',
  fields: [
    { name: 'name', type: 'text', required: true, maxLength: 255, label: 'Name' },
    { name: 'email', type: 'email', required: true, unique: true, label: 'Email' },
    { name: 'isChecked', type: 'checkbox', required: true, label: 'Accept Privacy Policy' },
  ],
}
