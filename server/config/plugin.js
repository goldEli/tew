"use strict";
const path = require("path");

/** @type Egg.EggPlugin */

exports.mysql = {
  enable: true,
  package: "egg-mysql",
};

exports.sequelize = {
  enable: true,
  package: "egg-sequelize",
};

exports.jwt = {
  enable: true,
  package: "egg-jwt",
};

exports.redis = {
  enable: true,
  package: "egg-redis",
};

exports.auth = {
  enable: true,
  package: "../lib/plugin/egg-auth",
  // package: path.join(__dirname, "../lib/plugin/egg-auth"),
};

exports.notFound = {
  enable: true,
  package: "../lib/plugin/egg-notFound",
};

exports.allowHosts = {
  enable: true,
  package: "../lib/plugin/egg-allowHosts",
};

exports.interfaceLimit = {
  enable: true,
  package: "../lib/plugin/egg-interfaceLimit",
};

exports.interfaceCache = {
  enable: true,
  package: "../lib/plugin/egg-interfaceCache",
};
