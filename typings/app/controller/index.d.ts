// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportJs = require('../../../app/controller/js');
import ExportLogin = require('../../../app/controller/login');
import ExportPriority = require('../../../app/controller/priority');
import ExportUser = require('../../../app/controller/user');

declare module 'egg' {
  interface IController {
    js: ExportJs;
    login: ExportLogin;
    priority: ExportPriority;
    user: ExportUser;
  }
}
