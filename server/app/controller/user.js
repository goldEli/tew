"use strict";

const BaseController = require("./base");
class UserController extends BaseController {
  async getToken() {
    const { ctx, app } = this;
    const { username } = ctx.params();
    const token = await app.jwt.sign(
      {
        username,
      },
      app.config.jwt.secret
    );
    // ctx.session[username] = 1;
    await app.redis.set(username, token, "EX", app.config.redisExpire);
    return token;
  }
  parseResult(ctx, res) {
    // console.log(res, res.dataValues)
    return {
      ...ctx.helper.unpick(res.dataValues, ["password"]),
      createTime: ctx.helper.timestamp(res.dataValues.createTime),
    };
  }
  async register() {
    const { ctx, app } = this;
    const params = ctx.params();
    const user = await ctx.service.user.getUser(params.username);
    if (user) {
      this.error("User already exists");
      return;
    }

    const res = await ctx.service.user.add({
      ...params,
      password: ctx.helper.md5(params.password),
      createTime: ctx.helper.time(),
    });
    if (res) {
      const token = await this.getToken();

      this.success({
        ...this.parseResult(ctx, res),
        token,
      });
    } else {
      this.error("Register user failed");
    }
  }

  async login() {
    const { ctx, app } = this;
    const { username, password } = ctx.params();
    const user = await ctx.service.user.getUser(username, password);
    if (!user) {
      this.error("This user dose not exsit");
      return;
    }
    const token = await this.getToken();
    this.success({
      ...this.parseResult(ctx, user),
      token,
    });
  }

  async detail() {
    const { ctx } = this;
    const user = await this.ctx.service.user.getUser(ctx.username || "");
    if (!user) {
      this.error("This user dose not exsit");
      return;
    }
    this.success({
      ...this.parseResult(ctx, user)
    });
  }
  async logout() {
    const { ctx, app } = this;
    try {
      // ctx.session[ctx.username] = null
      await app.redis.del(ctx.username);
      app;
      this.success();
    } catch (error) {
      this.error("Logout error");
    }
  }
  async edit() {
    const {ctx} = this;
    const res = await this.service.user.edit(ctx.params())
    if (res) {
      this.success(res)
    } else {
      this.error("edit fail!")
    }
  }
}

module.exports = UserController;
