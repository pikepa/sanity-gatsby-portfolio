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
                  buildHookId: '5ea36f7b4c181eb8752d54fd',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-vfdtieag',
                  apiId: '17d50fc4-def5-4432-ab99-077b8177a528'
                },
                {
                  buildHookId: '5ea36f7b2e556c9752a8ee1b',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ggv4gfmv',
                  apiId: 'b0539dae-37de-473c-965c-80907bf02065'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pikepa/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ggv4gfmv.netlify.app',
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
