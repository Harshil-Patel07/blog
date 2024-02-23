import { type SchemaTypeDefinition } from 'sanity'
import { sectionsTypes } from './schemas/sections'
import page from './schemas/page'
import { documentsTypes } from './schemas/document'
import globalTypes from './schemas/Global'
import blogs from './schemas/document/blogs'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    page,
    blogs,
    ...documentsTypes,
    ...sectionsTypes,
    ...globalTypes
  ],
}
