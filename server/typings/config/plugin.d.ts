// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import 'egg-onerror';
import 'egg-session';
import 'egg-i18n';
import 'egg-watcher';
import 'egg-multipart';
import 'egg-security';
import 'egg-development';
import 'egg-logrotator';
import 'egg-schedule';
import 'egg-static';
import 'egg-jsonp';
import 'egg-view';
import 'egg-mysql';
import 'egg-sequelize';
import 'egg-jwt';
import 'egg-redis';
import '../lib/plugin/egg-auth';
import '../lib/plugin/egg-notFound';
import '../lib/plugin/egg-allowHosts';
import '../lib/plugin/egg-interfaceLimit';
import { EggPluginItem } from 'egg';
declare module 'egg' {
  interface EggPlugin {
    onerror?: EggPluginItem;
    session?: EggPluginItem;
    i18n?: EggPluginItem;
    watcher?: EggPluginItem;
    multipart?: EggPluginItem;
    security?: EggPluginItem;
    development?: EggPluginItem;
    logrotator?: EggPluginItem;
    schedule?: EggPluginItem;
    static?: EggPluginItem;
    jsonp?: EggPluginItem;
    view?: EggPluginItem;
    mysql?: EggPluginItem;
    sequelize?: EggPluginItem;
    jwt?: EggPluginItem;
    redis?: EggPluginItem;
    auth?: EggPluginItem;
    notFound?: EggPluginItem;
    allowHosts?: EggPluginItem;
    interfaceLimit?: EggPluginItem;
  }
}