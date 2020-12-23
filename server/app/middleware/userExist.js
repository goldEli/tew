module.exports = (options) => {
  return async (ctx, next) => {
    const user = await ctx.service.user.getUser(ctx.username || "");
    if (!user) {
      ctx.body = {
        status: 500,
        errMsg: "This user dose not exsit"
      }
      return;
    }
    await next()
  };
};
