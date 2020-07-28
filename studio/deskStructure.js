import S from '@sanity/desk-tool/structure-builder'
import MdSettings from 'react-icons/lib/md/settings'
import MdPerson from 'react-icons/lib/md/person'
import MdWidgets from 'react-icons/lib/md/widgets';
import MdStore from 'react-icons/lib/md/store';
import MdEvent from 'react-icons/lib/md/event';

const hiddenDocTypes = listItem =>
  !['category', 'author', 'post', 'siteSettings', 'section', 'locations', 'events'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.listItem()
        .title('Section Content')
        .schemaType('section')
        .icon(MdWidgets)
        // .items([
        //   S.listItem(
        //     .title('Author')
        //     .schemaType('section')
        //   )
        // ])
        .child(S.documentTypeList('section').title('Section Content')),
      // S.documentListItem()
      //   .title('Main')
      //   .schemaType('section')
      //   .icon(MdWidgets)
      //   .child(
      //     S.document()
      //       .schemaType('section')
      //       .documentId('main')
      //   ),
      S.listItem()
        .title('Store Locations')
        .schemaType('locations')
        .icon(MdStore)
        .child(S.documentTypeList('locations').title('Store Locations')),
      S.listItem()
        .title('Events')
        .schemaType('events')
        .icon(MdEvent)
        .child(S.documentTypeList('events').title('Events')),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
