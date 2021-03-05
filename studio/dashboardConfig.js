export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '60425f739f4c97381a85896e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-9yg456f7',
                  apiId: '3496f73f-3dcc-45a2-99d5-7304f9c2b8c0'
                },
                {
                  buildHookId: '60425f73f4075c21a327a473',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-jm6tzp9m',
                  apiId: '062ad8dc-ea4e-485b-8d14-00b58d723a2a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pcsandford/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-jm6tzp9m.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
