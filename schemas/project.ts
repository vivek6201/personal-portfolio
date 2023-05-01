import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'projectImage',
      title: 'ProjectImage',
      type: 'image',
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: "reference", to: {type: "skills"} }]
    }),
    defineField({
      name: "points",
      title:"Points",
      type:"array",
      of:[{ type: "string" }]
    }),
    defineField({
      name:"completionDate",
      title:"CompletionDate",
      type:"string"
    }),
    defineField({
      name:"githubLink",
      title:"GithubLink",
      type:"url"
    }),
    defineField({
      name:"deployedLink",
      title:"DeployedLink",
      type:"url"
    })
  ],
})
