const Controller = require('egg').Controller;
const BaseController = require("./base")

class CommentController extends BaseController {
  async add() {
    const { ctx, app } = this;
    const user = await ctx.service.user.getUser(ctx.username)
    const res = await ctx.service.comment.add({
      userId: user.id,
      houseId: ctx.params('houseId'),
      msg: ctx.params('comment'),
      createTime: ctx.helper.time()
    })

    this.success(res)

  }
  async list() {
    const {ctx} = this
    const res = await ctx.service.comment.list(ctx.params())
    this.success(res)
  }
}

module.exports = CommentController;