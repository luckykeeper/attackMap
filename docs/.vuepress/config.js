module.exports = {
    title: 'attackMap Documentation',
    description: 'attackMap Documentation',
    theme: 'reco',
    base: '/attackMap/',
    markdown: {
      lineNumbers:true
    },
    
    head: [
    ['link', { rel: 'icon', href: '/images/attackmap_logo_small.png' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['meta', { name: 'author', content: 'Luckykeeper' }],
    ['meta', { name: 'keywords', content: 'attackMap,网络攻击,地图,Network attack,map,文档,Documentation'}],
    ['meta', { name: 'description', content: '网络攻击地图的文档网站,带你快速部署属于自己的炫酷网络攻击地图'}],
    ['meta', { name: 'theme-color', content: '#42b983' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/images/attackmap_logo_small.png' }],
    // ['link', { rel: 'manifest', href: '/manifest.json' }],
    ],
    plugins: [
      [
        '@vuepress/google-analytics',
        {
          'ga': 'UA-221056269-3' // UA-00000000-0
        }
      ],
      ['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: {
            message: "发现新内容可用",
            buttonText: "刷新"
        }
    }],
    // 代码复制弹窗插件
    ["vuepress-plugin-nuggets-style-copy", {
      copyText: "复制代码",
      tip: {
          content: "复制成功!"
      }
    }]],
    locales: {
        '/': {
          lang: 'zh-CN'
        }
      },
      
      themeConfig: {
        noFoundPageByTencent: false,
        subSidebar: 'auto',
        sidebar: {
          '/intro/': [
            '',
          ],'/deployment/': [
              '',
              '数据源准备',
              '使用源码部署',
            ],
          },
        vssueConfig: {
            platform: 'github',
            owner: 'Luckykeeper',
            repo: 'attackMap',
            clientId: 'fdfbf78b29cf309478a8',
            clientSecret: '66fa7ceaf6ccabaa461cc35d00d2a1b564580748',
            autoCreateIssue: true,
            admins: 'luckykeeper'
          },
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'luckykeeper/attackMap',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: 'GitHub',icon:'reco-github',

        // 以下为可选的编辑链接选项

        // 假如你的文档仓库和项目本身不在一个仓库：
        // docsRepo: 'LOVE69-Renpy-Remaster-Project/Doc',
        // // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // // 假如文档放在一个特定的分支下：
        docsBranch: 'document',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '在 GitHub 上编辑' ,
        // logo: '/images/项目组logo_smallsize.png',
        startYear: '2022',
        author: 'Luckykeeper',
        authorAvatar: '/images/header-tou.jpg',
        lastUpdated: '最后更新时间',
        // algolia: {
        //     apiKey: 'd03dff9e4b29ca7c8c240f1d78b9b14b',
        //     indexName: 'Love69_Doc_Website',
        //     // 如果 Algolia 没有为你提供 `appId` ，使用 `BH4D9OD16A` 或者移除该配置项
        //     appId: 'MO2AUWDNT8'
        // },
        nav: [
            {
              text: '文档' , icon:'reco-document',
              ariaLabel: 'Document Menu',
              items: [
                { text: '文档首页', link: '/docs/' , icon:'reco-home'},
                { text: '介绍', link: '/intro/' , icon:'reco-document'},
                { text: '部署', link: '/deployment/' , icon:'reco-document'},
                { text: '二次开发', link: '/dev/' , icon:'reco-document'},
              ],
              
            },
            {text: '作者博客', link: 'https://luckykeeper.site', target:'_blank' ,icon:'reco-home'},
          ],  
      }
}
