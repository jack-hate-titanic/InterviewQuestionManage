// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportJs = require('../../../app/model/js');
import ExportUser = require('../../../app/model/user');

declare module 'egg' {
  interface IModel {
    Js: ReturnType<typeof ExportJs>;
    User: ReturnType<typeof ExportUser>;
  }
}
