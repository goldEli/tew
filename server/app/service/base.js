const Service = require('egg').Service;

class BaseService extends Service {
  async run(callback) {
    try {
      return callback && callback()
    } catch (error) {
      console.log(error)
      return null
    }
  }
}
module.exports = BaseService;