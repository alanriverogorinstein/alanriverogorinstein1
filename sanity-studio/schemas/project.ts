import { defineField, defineType } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: rule => rule.required()
    }),
    defineField({
      name: 'category',
      type: 'string',
      options: {
        list: ['corporate', 'personal'],
        layout: 'radio'
      },
      validation: rule => rule.required()
    }),
    defineField({
      name: 'description',
      type: 'text'
    }),
    defineField({
      name: 'image',
      title: 'Cover image',
      type: 'image'
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime'
    }),
  ]
})
