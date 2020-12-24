const BaseService = require("./base");

class HotService extends BaseService {
  async hot() {
    const { ctx, app } = this;
    return this.run(async () => {
      return await ctx.model.House.findAll({
        limit: 4,
        attributes: {
          exclude: ["startTime", "endTime", "publishTime"],
        },
        order: [["showCount", "DESC"]],
        include: [
          {
            model: app.model.Imgs,
            limit: 1,
            attributes: ['url']
          }
        ]
      });
    });
  }
}

module.exports = HotService;
