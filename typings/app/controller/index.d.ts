// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportFile = require('../../../app/controller/file');
import ExportJs = require('../../../app/controller/js');
import ExportLogin = require('../../../app/controller/login');
import ExportMarx = require('../../../app/controller/marx');
import ExportUser = require('../../../app/controller/user');

declare module 'egg' {
  interface IController {
    file: ExportFile;
    js: ExportJs;
    login: ExportLogin;
    marx: ExportMarx;
    user: ExportUser;
  }
}
