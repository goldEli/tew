"use strict";

const Controller = require("egg").Controller;

class UserController extends Controller {
  async getToken() {
    const { ctx, app } = this;
    const { username } = ctx.request.body.username;
    const token = await app.jwt.sign(
      {
        username,
      },
      app.config.jwt.secret
    );
    ctx.session[username] = 1;
    return token;
  }
  async register() {
    const { ctx, app } = this;
    const params = ctx.request.body;
    const user = await ctx.service.user.getUser(params.username);
    if (user) {
      ctx.body = {
        status: 500,
        errMsg: "User already exists",
      };
      return;
    }

    const res = await ctx.service.user.add({
      ...params,
      password: ctx.helper.md5(params.password),
      createTime: ctx.helper.time(),
    });
    if (res) {
      const token = await this.getToken();
      ctx.body = {
        status: 200,
        data: {
          ...ctx.helper.unpick(res.dataValues, ["password"]),
          createTime: ctx.helper.timestamp(res.dataValues.createTime),
          token,
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
    const { ctx, app } = this;
    const { username, password } = ctx.request.body;
    const user = await ctx.service.user.getUser(username, password);
    if (!user) {
      ctx.body = {
        status: 500,
        errMsg: "This user dose not exsit",
      };
      return;
    }
    const token = await this.getToken();

    ctx.body = {
      status: 200,
      data: {
        ...ctx.helper.unpick(user.dataValues, ["password"]),
        createTime: ctx.helper.timestamp(user.dataValues.createTime),
        token,
      },
    };
  }
}

module.exports = UserController;
