// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import author from './documents/author'
// import category from './documents/category'
// import post from './documents/post'
import siteSettings from './documents/siteSettings'
import section from './documents/section'
import locations from './documents/locations'
import events from './documents/events'
import simpleBlockContent from './objects/simpleBlockContent'

// import * as plugs from './plugs'
// import plugDefaultFields from './plugs/_plugDefaultFields'

// Object types
import bodyPortableText from './objects/bodyPortableText'
import bioPortableText from './objects/bioPortableText'
import excerptPortableText from './objects/excerptPortableText'
import link from './objects/link'
import nav from './objects/nav'
import openGraph from './objects/openGraph'
import mainImage from './objects/mainImage'
import authorReference from './objects/authorReference'
import sectionContent from './objects/sectionContent'

// const allPlugs = Object.values(plugs).map((plug) => {
//   return { ...plug, fields: plugDefaultFields.concat(plug.fields) }
// })

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'blog',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    siteSettings,
    openGraph,
    // post,
    // category,
    section,
    locations,
    events,
    author,
    mainImage,
    nav,
    link,
    authorReference,
    bodyPortableText,
    bioPortableText,
    excerptPortableText,
    simpleBlockContent,
    sectionContent

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
  // .concat(allPlugs)
})
