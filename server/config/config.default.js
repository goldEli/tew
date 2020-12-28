/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1608620426910_8213";

  // add your middleware config here
  config.middleware = ["httpLog"];

  config.session = {
    key: "session",
    httpOnly: true,
    maxAge: 1000 * 50,
    renew: true
  }

  config.mysql = {
    app: true,
    agent: false,
    client: {
      host: "127.0.0.1",
      port: "3306",
      user: "root",
      password: "123456",
      database: "egg_house",
    },
  };

  config.sequelize = {
    dialect: "mysql",
    host: "127.0.0.1",
    port: "3306",
    user: "root",
    password: "123456",
    database: "egg_house",
    define: {
      timestamps: false,
      freezeTableName: true,
    },
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };
  config.jwt = {
    secret: "my",
  };
  config.redis = {
    client: {
      port: 6379,
      host: "127.0.0.1",
      password: "123456",
      db: 0
    }
  }

  config.auth = {
    exclude: ["/api/user/login", "/api/user/register"],
  };

  config.allowHosts = {
    hosts: [
      "localhost:8000", 
      "127.0.0.1:8000"
    ]
  }
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    salt: "my",
    dayFormat: "YYYY-MM-DD HH:mm:ss",
    redisExpire: 60*60*24
  };


  return {
    ...config,
    ...userConfig,
  };
};
