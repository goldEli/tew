module.exports = (options) => {
  return async (ctx, next) => {
    const url = ctx.request.url.split("?")[0];
    // const user = ctx.session[ctx.username]
    const token = ctx.request.token
    const username = await ctx.app.redis.get(ctx.username);
    const isUser = token === username 
    if (!isUser && !options.exclude.includes(url)) {
      ctx.body = {
        status: 1001,
        errMsg: "User not log in",
      };
    } else {
      await next();
    }
  };
};
