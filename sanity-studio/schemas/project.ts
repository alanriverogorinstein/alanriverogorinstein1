import {defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: ['corporate', 'personal'],
        layout: 'radio', // or 'dropdown'
      },
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      title: 'Short Description',
      type: 'text',
    },
    {
      name: 'whatIDid',
      title: 'What I Did',
      type: 'text',
      rows: 4, // Optional: sets height in Studio UI
    },
    {
      name: 'impact',
      title: 'The Impact',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'platform',
      title: 'Platform',
      type: 'string',
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },
    {
      name: 'yearShipped',
      title: 'Year Shipped',
      type: 'string',
    },
    {
      name: 'teamSetup',
      title: 'Team Setup',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'body',
      title: 'Case Study Body',
      type: 'array',
      of: [{type: 'block'}, {type: 'image', options: {hotspot: true}}, {type: 'videoEmbed'}],
    },
  ],
})
