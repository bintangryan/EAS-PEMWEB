import { CollectionConfig } from 'payload/types';

const Channel: CollectionConfig = {
  slug: 'channels',

  fields: [
    {
      name: 'name',
      label: 'Channel Name',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'text',
    },
    {
      name: 'creator',
      label: 'Creator',
      type: 'relationship',
      relationTo: 'accounts',
      required: true,
    },
    // Other fields like creation time, etc.
  ],

  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
};

export default Channel;


