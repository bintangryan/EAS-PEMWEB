import { CollectionConfig } from 'payload/types';

const Message: CollectionConfig = {
  slug: 'messages',

  fields: [
    {
      name: 'content',
      label: 'Content',
      type: 'text',
      required: true,
    },
    {
      name: 'user',
      label: 'User',
      type: 'relationship',
      relationTo: 'accounts', // Relasi ke koleksi Account
      required: true,
    },
    {
      name: 'channel',
      label: 'Channel',
      type: 'relationship',
      relationTo: 'channels', // Relasi ke koleksi Channel
      required: true,
    },
    // Field lainnya seperti timestamp, attachment, dll.
  ],

  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
};

export default Message;


