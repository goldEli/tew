module.exports = (options) => {
  return async (ctx, next) => {
    const url = ctx.request.url.split("?")[0]
    const user = ctx.session[ctx.username]
    console.log("url", user, options.exclude.includes(url)) 
    if (!user && !options.exclude.includes(url)) {
      ctx.body = {
        status: 1001,
        errMsg: "User not log in"
      }
    } else {
      await next()
    }
  };
};
