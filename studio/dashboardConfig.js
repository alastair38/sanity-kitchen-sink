export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61372f43c8426e2a08ae29a9',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-xxd1h38q',
                  apiId: '2f351c24-e2a6-458d-b051-7dedaeb8d1ec'
                },
                {
                  buildHookId: '61372f440807dd7637c64cee',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-3cu617pz',
                  apiId: '079d6559-db88-4232-af0a-208c6d34e7a4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alastair38/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-3cu617pz.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
