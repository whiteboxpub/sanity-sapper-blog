export default {
  title: 'Section Content',
  name: 'sectionContent',
  type: 'object',
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
  ]
}