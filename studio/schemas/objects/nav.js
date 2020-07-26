export default {
  title: 'Nav Item',
  name: 'nav',
  type: 'object',
  fieldsets: [
    {
      title: 'Link',
      name: 'link',
      description: 'Only the first value of these will be used'
    }
  ],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'External link or Section',
      name: 'link',
      type: 'string',
      description: 'Example: https://mrsjeanne.com or /author',
      fieldset: 'link'
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'link'
    },
    prepare ({title, subtitle}) {
      return {
        title,
        subtitle: ['#', subtitle].join(''),
      }
    }
  }
}
