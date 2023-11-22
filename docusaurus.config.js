const { themes } = require('prism-react-renderer');

const path = require('path')
const beian = '苏ICP备17016749号'

const announcementBarContent = ''

export default async function createConfigAsync() {
  /** @type {import('@docusaurus/types').Config} */
  return {
    title: 'think4code的小站',
    url: 'https://think4code.com',
    baseUrl: '/',
    favicon: 'img/favicon.ico',
    organizationName: 'think4code',
    projectName: 'blog',
    tagline: '随便玩玩',
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    themeConfig: {
      // announcementBar: {
      //   id: 'announcementBar-3',
      //   content: announcementBarContent,
      // },
      metadata: [
        {
          name: 'keywords',
          content: 'think4code',
        },
        {
          name: 'keywords',
          content: 'blog, web',
        },
      ],
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      headTags: [
        {
          tagName: 'meta',
          attributes: {
            name: 'description',
            content: 'think4code的个人博客',
          },
        },
      ],
      navbar: {
        logo: {
          alt: 'think4code',
          src: 'img/logo.webp',
          srcDark: 'img/logo.webp',
        },
        hideOnScroll: true,
        items: [
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '社交媒体',
            items: [
              { label: '关于我', to: '/about' },
              { label: 'GitHub', href: 'https://github.com/think4code' },
            ],
          },
          {
            title: '更多',
            items: [
              { label: '友链', position: 'right', to: 'friends' },
              { label: '导航', position: 'right', to: 'resource' },
              // { label: '我的站点', position: 'right', to: 'website' },
              {
                html: `<a href="https://kuizuo.cn" target="_blank"><img style="height:50px;margin-top:0.5rem" src="/img/kuizuo.webp" /><a/>`,
              },
            ],
          },
        ],
        copyright: `<p><a href="http://beian.miit.gov.cn/" >${beian}</a></p><p>Copyright © 2020 - PRESENT think4code Built with Docusaurus.</p>`,
      },
      socials: {
        github: 'https://github.com/think4code',
//        twitter: 'https://twitter.com/kuizuo',
//        juejin: 'https://juejin.cn/user/1565318510545901',
//        csdn: 'https://blog.csdn.net/kuizuo12',
        qq: 'https://wpa.qq.com/msgrd?v=3&amp;uin=1915384707&amp;site=qq',
//        zhihu: 'https://www.zhihu.com/people/kuizuo',
//        cloudmusic: 'https://music.163.com/#/user/home?id=1333010742',
        email: 'think4code@qq.com',
      },
      prism: {
        theme: themes.oneLight,
        darkTheme: themes.oneDark,
        additionalLanguages: ['bash', 'json', 'java', 'php', 'rust', 'toml'],
        defaultLanguage: 'javascript',
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: { start: 'highlight-start', end: 'highlight-end' },
          },
          {
            className: 'code-block-error-line',
            line: 'This will error',
          },
        ],
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      liveCodeBlock: {
        playgroundPosition: 'top',
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)',
        },
      },
    },
    presets: [
      [
        '@docusaurus/preset-classic',
        {
          docs: {
            path: 'docs',
            sidebarPath: 'sidebars.js',
          },
          blog: false,
          theme: {
            customCss: ['./src/css/custom.scss'],
          },
          sitemap: {
            changefreq: 'daily',
            priority: 0.5,
          },
          gtag: {
            trackingID: 'G-S4SD5NXWXF',
            anonymizeIP: true,
          },
          // debug: true,
        },
      ],
    ],
    plugins: [
      'docusaurus-plugin-image-zoom',
      'docusaurus-plugin-sass',
      path.resolve(__dirname, './src/plugin/plugin-baidu-tongji'),
      path.resolve(__dirname, './src/plugin/plugin-baidu-push'),
      [
        path.resolve(__dirname, './src/plugin/plugin-content-blog'), // 为了实现全局 blog 数据，必须改写 plugin-content-blog 插件
        {
          path: 'blog',
          editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
            `https://github.com/kuizuo/blog/edit/main/${blogDirPath}/${blogPath}`,
          editLocalizedFiles: false,
          blogDescription: '代码人生：编织技术与生活的博客之旅',
          blogSidebarCount: 10,
          blogSidebarTitle: 'Blogs',
          postsPerPage: 10,
          showReadingTime: true,
          readingTime: ({ content, frontMatter, defaultReadingTime }) =>
            defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
          feedOptions: {
            type: 'all',
            title: 'think4code',
            copyright: `Copyright © ${new Date().getFullYear()} think4code Built with Docusaurus.<p><a href="http://beian.miit.gov.cn/" class="footer_lin">${beian}</a></p>`,
          },
        },
      ],
      [
        '@docusaurus/plugin-ideal-image',
        { disableInDev: false },
      ],
      [
        '@docusaurus/plugin-pwa',
        {
          debug: true,
          offlineModeActivationStrategies: [
            'appInstalled',
            'standalone',
            'queryString',
          ],
          pwaHead: [
            { tagName: 'link', rel: 'icon', href: '/img/logo.png' },
            { tagName: 'link', rel: 'manifest', href: '/manifest.json' },
            { tagName: 'meta', name: 'theme-color', content: '#12affa' },
          ],
        },
      ],
    ],
    stylesheets: [],
    i18n: {
      defaultLocale: 'zh-CN',
      locales: ['en', 'zh-CN'],
      localeConfigs: {
        en: {
          htmlLang: 'en-GB',
        },
      },
    },
  }
}
