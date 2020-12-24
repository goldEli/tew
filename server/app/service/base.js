const Service = require('egg').Service;

class BaseService extends Service {
  async run(callback) {
    const {ctx} = this
    try {
      return callback && callback(ctx)
    } catch (error) {
      console.log(error)
      return null
    }
  }
}
module.exports = BaseService;