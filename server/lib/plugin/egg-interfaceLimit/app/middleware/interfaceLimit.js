module.exports = (options) => {
  let firstTime = new Date().getTime();
  let count = 0;
  return async (ctx, next) => {
    const endTime = new Date().getTime();
    if (endTime - firstTime < options.maxIntervalTime) {
      if (count > options.maxCount) {
        ctx.body={
          status: 500,
          errMsg: "Too frequent requests"
        }
      } else {
        count++;
        await next();
      }
    } else {
      firstTime = new Date().getTime()
      count = 0
      await next();
    }
  };
};
