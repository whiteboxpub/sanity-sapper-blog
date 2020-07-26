import {format} from 'date-fns'

export default {
  name: 'section',
  type: 'document',
  title: 'Section Content',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Titles should be catchy, descriptive, and not too long'
    },
    {
      name: 'hash',
      type: 'string',
      title: 'Hash ID',
      description: 'Some frontends will require a #hash_ID to be set to be able to navigation to this section',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      description: 'This can be used to schedule post for publishing'
    },
    {
      name: 'body',
      type: 'simpleBlockContent',
      title: 'Content'
    },
  ],
  orderings: [
    {
      name: 'publishingDateAsc',
      title: 'Publishing date new–>old',
      by: [
        {
          field: 'publishedAt',
          direction: 'asc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    },
    {
      name: 'publishingDateDesc',
      title: 'Publishing date old->new',
      by: [
        {
          field: 'publishedAt',
          direction: 'desc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      slug: 'hash',
    },
    prepare ({title = 'No title', publishedAt, slug, }) {
      const dateSegment = format(publishedAt, 'YYYY/MM')
      const path = `/#${slug.current}/`
      return {
        title,
        release: publishedAt ? dateSegment: 'Missing publishing date',
        subtitle: publishedAt ? path : 'Missing publishing date'
      }
    }
  }
}
