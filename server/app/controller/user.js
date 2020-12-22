"use strict";

const Controller = require("egg").Controller;
const md5 = require('md5')
const dayjs = require("dayjs")

class UserController extends Controller {
  async register() {
    const { ctx, app } = this;
    const params = ctx.request.body;
    console.log("params", params);
    const user = await ctx.service.user.getUser(params.username);
    if (user) {
      ctx.body = {
        status: 500,
        errMsg: "User already exists",
      };
      return
    }

    const res = await ctx.service.user.add({
      ...params,
      password: md5(params.password + app.config.salt),
      createTime: ctx.helper.time(),
    });
    if (res) {
      ctx.body = {
        status: 200,
        data: {
          ...ctx.helper.unpick(res.dataValues, ['password']),
          createTime: ctx.header.timestamp(res.dataValues.createTime)
        },
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: "Register user failed",
      };
    }
  }
}

module.exports = UserController;
