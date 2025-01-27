import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: 'isAdmin',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'isSuperAdmin',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'fullName',
      type: 'text',
      required: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'roles',
      type: 'select',
      options: ['admin', 'superAdmin', 'user', 'editor'],
      hasMany: true,
      required: false,
      admin: {
        position: 'sidebar',
      },
    },
  ],
  access: {
    create: ({ req: { user } }) => {
      console.log('user:create ==> ', user)
      return true
    },
    read: ({ req: { user } }) => {
      console.log('user:read ==> ', user)
      return true
    },
    update: ({ req: { user } }) => {
      console.log('user:update ==> ', user)
      return true
    },
    delete: ({ req: { user } }) => {
      console.log('user:delete ==> ', user)
      return true
    },
  },
}
