'use strict';

/** @type Egg.EggPlugin */

exports.mysql = {
  enable: true,
  package: 'egg-mysql'
};

exports.sequelize = {
  enable: true,
  package: 'egg-sequelize'
};

exports.jwt = {
  enable: true,
  package: 'egg-jwt'
};

exports.auth = {
  enable: true,
  package: "../lib/plugin/egg-auth"
}
