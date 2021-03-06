/**
 * @description webpack通用配置
 */

const path = require('path');

module.exports = {
    // 多页配置
    isMultiplePage: true,
    //多页面打包入口
    multiplePage:[
        'index',
    ],
    //想要打包的页面
    entryPage: 'admin',
    // 是否启用异步加载功能
    isOpenSyncImport: true,
    //开启CDN资源引用
    cdnUrl: 'http://j1.58cdn.com.cn',
    // 最小chunk的大小
    minChunkSize: 10000,
    // dev模式下是否自动打开页面
    autoOpenBrowser: true,
    // 文件目录
    assetsRoot: path.resolve(__dirname, '../src'),
    // 静态资源目录
    assetsStatic: path.resolve(__dirname, '../static'),
    // 生成目录
    buildRoot: path.resolve(__dirname, '../dist'),
    // 静态资源根目录
    staticAssets: 'static',
    // 生成路径
    publicPath: '/',

    // html页面中需要插入的全局js、css静态资源(放在项目目录的static目录中)
    injectStatic: [
        // 'codemirror/theme/monokai.css',
		// 'codemirror/lib/codemirror.js',  
    ],

    //配合 injectStatic选项。需要指定 哪些html文件需要引入static中的全局资源(填写入口目录即可),为空则则所有页面都注入
    injectHtml: [
        // 'index',
        // 'admin'
    ],

    // 公用别名
    commonAlias: {
        Static: 'static',
        '@': './',
        'mis@': './index',
        'mis@comp': './index/js/components'
    },
    // 外部扩展
    externals: {

    },
    // 公众模块(默认情况下common／js文件下的文件作为`commons chunk`打包)
    commons: {
        // 'axios': 'axios'
    },
    // 要打包的外部资源库
    library: [
        'axios',
        'vue',
        'vue-router'
    ],
    // 要引进外部资源库的页面(为空则全部引入)
    libraryEntry: [],
    // 本地开发端口
    port:4001,
    //是否参看源码  参看'#source-map' 不参看：false
    sourceMap: false,
    // 本地开发代理,默认转发本地的1111
    proxy: {
        '/api': {
            target: 'http://localhost:1111',
            changeOrigin: true,
            pathRewrite: {
                // '^/api': ''
            }
        }
    }
};
