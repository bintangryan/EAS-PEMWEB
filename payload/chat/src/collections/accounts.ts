import { CollectionConfig } from 'payload/types';

const Account: CollectionConfig = {
  slug: 'accounts',

  fields: [
    {
      name: 'username',
      label: 'Username',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'password',
      label: 'Password',
      type: 'text',
      required: true,
      hidden: true,
    },
    {
      name: 'createdChannels',
      label: 'Created Channels',
      type: 'relationship',
      relationTo: 'channels',
      hasMany: true,
    },
    {
      name: 'joinedChannels',
      label: 'Joined Channels',
      type: 'relationship',
      relationTo: 'channels',
      hasMany: true,
    },
    // Other fields like email, full name, etc.
  ],

  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
};

export default Account;



