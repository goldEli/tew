module.exports = (options) => {
  return async (ctx, next) => {
    const { referer } = ctx.request.header;
    
    if (referer) {
      const url = new URL(referer)
      const {host} = url
      if (options.hosts.includes(host)) {
        await next()
      } else {
        ctx.body = {
          status: 403,
          errMsg: `${host} is banned`
        }
      }
    } else {
      await next();
    }
  };
};
