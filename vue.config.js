module.exports = {
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {//配置目录的别名
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',

      }
    }
  } ,
  publicPath: process.env.NODE_ENV === 'production' ? '/demo' : './'
}
