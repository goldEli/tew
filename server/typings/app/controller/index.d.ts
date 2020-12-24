// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBase = require('../../../app/controller/base');
import ExportComment = require('../../../app/controller/comment');
import ExportCommons = require('../../../app/controller/commons');
import ExportHome = require('../../../app/controller/home');
import ExportHouse = require('../../../app/controller/house');
import ExportUser = require('../../../app/controller/user');

declare module 'egg' {
  interface IController {
    base: ExportBase;
    comment: ExportComment;
    commons: ExportCommons;
    home: ExportHome;
    house: ExportHouse;
    user: ExportUser;
  }
}
