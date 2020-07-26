import {format} from 'date-fns'

export default {
  name: 'locations',
  type: 'document',
  title: 'Store Locations',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Store Name',
    },
    {
      name: 'address',
      type: 'string',
      title: 'Street Address',
    },
    {
      name: 'city',
      type: 'string',
      title: 'City',
    },
    {
      name: 'state',
      type: 'string',
      title: 'State Abbr.',
      description: 'WI',
    },
    {
      name: 'zip',
      type: 'string',
      title: 'Zipcode',
      options: {
        maxLength: 6
      }
    },
  ],
  preview: {
    select: {
      title: 'name',
      address: 'address',
      city: 'city',
      state: 'state',
      zip: 'zip'
    },
    prepare ({title = 'No name', address = "", city = "", state = "", zip = "" }) {
      return {
        title,
        subtitle:`${address}, ${city}, ${state} ${zip}`,
      }
    }
  }
}
