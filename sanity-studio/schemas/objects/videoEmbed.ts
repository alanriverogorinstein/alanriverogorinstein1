import {defineType} from 'sanity'

export default defineType({
  name: 'videoEmbed',
  title: 'Video Embed',
  type: 'object',
  fields: [
    {
      name: 'url',
      title: 'Video URL (YouTube or Vimeo)',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    },
  ],
})
