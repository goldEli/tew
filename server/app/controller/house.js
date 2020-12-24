const BaseController = require("./base")

class HouseController extends BaseController {
  async hot() {
    const { ctx, app } = this;
    const result = await ctx.service.house.hot()
    console.log(result)
    this.success(result)
  }
  async search() {
    const {ctx} = this;
    const result = await ctx.service.house.search(ctx.params())
    this.success(result)
  }
}

module.exports = HouseController;