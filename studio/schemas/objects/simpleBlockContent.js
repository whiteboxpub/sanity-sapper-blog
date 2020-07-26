import React from 'react'
const subtitleRender = props => (
  <p style={{fontSize: "26px",
    fontFamily: "Sweet Pea",
    textAlign: "center",
    margin: "1em auto 1em"}}>{props.children}</p>
)
export default {
  title: 'Simple Block Content',
  name: 'simpleBlockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Seciton Title', value: 'sectionTitle',
          blockEditor: {
            render: subtitleRender,
          }
        },
      ],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'Italic', value: 'italic'},
          {title: 'Code', value: 'code'}
        ],
        annotations: [
          {
            title: 'URL',
            type: 'link'
          },
          {
            name: 'internalLink',
            type: 'object',
            title: 'Internal link',
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Reference',
                to: [
                  { type: 'section' },
                  // other types you may want to link to
                ]
              }
            ]
          }
        ]
      }
    },
    {
      type: 'mainImage',
      options: {hotspot: true}
    },
  ]
}
