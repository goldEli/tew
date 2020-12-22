"use strict";

const Controller = require("egg").Controller;

class UserController extends Controller {
  async register() {
    const { ctx, app } = this;
    const params = ctx.request.body;
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
      password: ctx.helper.md5(params.password),
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

  async login() {
    const {ctx, app} = this
    const {username, password} = ctx.request.body;
    const user = await ctx.service.user.getUser(username, password)
    if (!user) {
      ctx.body = {
        status: 500,
        errMsg: "This user dose not exsit",
      };
      return
    }
    ctx.session.userId = user.id
    ctx.body = {
      status: 200,
      data: {
        ...ctx.helper.unpick(user.dataValues, ["password"]),
        createTime: ctx.helper.timestamp(user.dataValues.createTime)
      }
    }
  }
}

module.exports = UserController;
