export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Heads up! This will override the page title.',
      validation: Rule => Rule.max(60).warning('Should be under 60 characters')
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe your site for search engines and social media.',
      validation: Rule => Rule.max(155).warning('Should be under 155 characters')
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Add keywords that describes your site.',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    {
      title: 'Image',
      description: 'Recommend 1200x630 (will be auto resized)',
      name: 'image',
      type: 'mainImage'
    },
    {
      name: 'navigation',
      type: 'object',
      fields: [
        {
          type: 'array',
          name: 'items',
          of: [{ type: 'nav' }]
        }
      ]
    },
    {
      name: 'author',
      type: 'reference',
      description: 'Publish an author and set a reference to them here.',
      title: 'Author',
      to: [{type: 'author'}]
    },
  ]
}
