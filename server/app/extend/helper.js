const dayjs = require("dayjs")
const md5 = require("md5")

module.exports = {
  base64Encode(str = ""){
    return new Buffer(str).toString('base64')
  },
  time() {
    return dayjs().format("YYYY-MM-DD HH:mm:ss")
  },
  timestamp(date) {
    return new Date(date).getTime()
  },
  unpick(source, arr) {
    const obj = {}
    for (let key in source) {
      if (!arr.includes(key)) {
        obj[key] = source[key]
      }
    }
    return obj
  },
  md5(password) {
    return md5(password + "my")
  }
}