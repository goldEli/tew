const Controller = require("egg").Controller;

class BaseController extends Controller {
  async success(data) {
    const { ctx } = this;
    ctx.body = {
      status: 200,
      data,
    };
  }
  async error(errMsg) {
    const { ctx } = this;
    ctx.body = {
      status: 500,
      errMsg,
    };
  }
}

module.exports = BaseController;
