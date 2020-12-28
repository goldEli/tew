module.exports = app => {
  // const store = {}
  // app.sessionStore = {
  //   async get(key){
  //     console.log("--store--", store)
  //     return store[key]
  //   },
  //   async set(key, value, maxAge) {
  //     store[key] = value
  //   },
  //   async destory(key) {
  //     store[key] = null
  //   }
  // }
  const middlewares = [
    "allowHosts",
    "notFound",
    "auth",
  ]
  app.config.coreMiddleware.push(...middlewares)
}