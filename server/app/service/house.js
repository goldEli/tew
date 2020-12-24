const BaseService = require("./base");

class HotService extends BaseService {
  commonAttrs(app) {
    return {
      limit: 4,
      attributes: {
        exclude: ["startTime", "endTime", "publishTime"],
      },
      order: [["showCount", "DESC"]],
      include: [
        {
          model: app.model.Imgs,
          limit: 1,
          attributes: ["url"],
        },
      ],
    };
  }
  async hot() {
    const { ctx, app } = this;
    return this.run(async () => {
      return await ctx.model.House.findAll({
        ...this.commonAttrs(app),
      });
    });
  }
  async search(params) {
    const { ctx, app } = this;
    const {lte, gte, like} = app.Sequelize.Op
    const where = {
      cityCode: Array.isArray(params.code) ? params.code[0] : params.code,
      startTime: {
        [lte]: params.startTime
      },
      endTime: {
        [gte]: params.endTime
      },
      name: {
        [like]: `%${params.houseName}%`
      }
    }
    if (!params.houseName) {
      delete where.name
    }
    return this.run(async () => {
      return await ctx.model.House.findAll({
        ...this.commonAttrs(app),
        limit: params.pageSize,
        offset: (params.current - 1) * params.pageSize,
        where
      });
    });
  }
}

module.exports = HotService;
