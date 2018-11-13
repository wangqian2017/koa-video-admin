const router = require('koa-router')()

// 登录
router.get('/login', async (ctx, next) => {
  // ctx.router available
  await ctx.render('login')
})

// 列表
router.get('/list', async (ctx, next) => {
  // ctx.router available
  await ctx.render('videoList', {
    session: {
      user: '王小白'
    },
    dataLength: 5,
    nowPage: 1,
    type: 'list',
    videos: [{
      name: '战狼',
      country: '中国',
      classify: '电影',
      release_time: '2018-11-12',
      image: '',
      star: '8',
      duration: '350',
      type: '1',
      actors: '武警',
      detail: '巴拉芭芭拉'
    }, {
      name: '战狼',
      country: '中国',
      classify: '电影',
      release_time: '2018-11-12',
      image: '',
      star: '8',
      duration: '350',
      type: '1',
      actors: '武警',
      detail: '巴拉芭芭拉'
    }]
  })
})

module.exports = router