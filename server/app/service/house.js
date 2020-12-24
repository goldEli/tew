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
    const {lte, gte} = app.Sequelize.Op
    const where = {
      cityCode: params.code,
      startTime: {
        [lte]: params.startTime
      },
      endTime: {
        [gte]: params.endTime
      }
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
