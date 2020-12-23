"use strict";

const BaseController = require("./base");

class UserService extends BaseController {
  async getUser(username, password) {
    return this.run(async () => {
      const { ctx } = this;
      const _where = password
        ? { username, password: ctx.helper.md5(password) }
        : { username };
      const result = await ctx.model.User.findOne({
        where: _where,
      });
      return result;
    });
  }
  async add(params) {
    return this.run(async () => {
      const { ctx } = this;
      const result = await ctx.model.User.create(params);
      return result;
    });
  }
}

module.exports = UserService;
