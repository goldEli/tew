'use strict';

const Service = require('egg').Service

class UserService extends Service {
  async getUser(username, password) {
    try {
      const {ctx, app} = this
      const _where = password ? {username, password: ctx.helper.md5(password)} : {username}
      const result = await ctx.model.User.findOne({
        where: _where
      })
      return result 
    } catch (error) {
      console.log(error)
      return null
    }
  }
  async add(params) {
    try {
      const {ctx} = this
      const result = await ctx.model.User.create(params)
      return result 
    } catch (error) {
      console.log(error)
      return null
    }
  }
}

module.exports = UserService