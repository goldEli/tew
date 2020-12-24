const BaseService = require("./base");

class CommentService extends BaseService {
  async add(params) {
    const { ctx } = this;
    return this.run(() => {
      return ctx.model.Comment.create(params);
    });
  }
  async list(params) {
    const { ctx } = this;
    return this.run(() => {
      return ctx.model.Comment.findAll({
        where: {
          houseId: params.id,
        },
        limit: params.pageSize,
        offset: (params.current - 1) * params.pageSize,
        include: [
          {
            model: ctx.model.User,
            attributes: ["avatar"]
          }
        ]
      });
    });
  }
}

module.exports = CommentService;
