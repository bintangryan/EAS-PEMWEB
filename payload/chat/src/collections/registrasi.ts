// File registrations.js pada folder collections di payload CMS
import { CollectionConfig } from 'payload/types';

const Registration: CollectionConfig = {
  slug: 'registrations', 
  fields: [
    {
      name: 'name',
      label: 'Nama',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      required: true,
      unique: true,
    },
    {
      name: 'school',
      label: 'Asal Sekolah',
      type: 'text',
      required: true,
    },
    {
      name: 'status',
      label: 'Status',
      type: 'select',
      options: [
        { label: 'Waiting', value: 'waiting' },
        { label: 'Rejected', value: 'rejected' },
        { label: 'Accepted', value: 'accepted' },
      ],
      defaultValue: 'waiting', // Nilai default untuk field status
      required: true,
    },
    {
      name: 'registrationDate',
      label: 'Tanggal Pendaftaran',
      type: 'date',
      required: true,
    },
  ],
};

export default Registration;




