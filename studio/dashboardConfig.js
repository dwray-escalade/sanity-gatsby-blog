export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5da0cc43ecafacceb61dd429',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-iqh6ngh2',
                  apiId: '89db1957-c40d-4c71-b2b6-6ec3231704b5'
                },
                {
                  buildHookId: '5da0cc43a66a3ce8be17f84c',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-oomt4sch',
                  apiId: 'fd95bc8d-739d-4593-aac6-bfebd8557285'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dwray-escalade/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-oomt4sch.netlify.com', category: 'apps'}
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
