// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportJs = require('../../../app/model/js');
import ExportPriority = require('../../../app/model/priority');
import ExportUser = require('../../../app/model/user');

declare module 'egg' {
  interface IModel {
    Js: ReturnType<typeof ExportJs>;
    Priority: ReturnType<typeof ExportPriority>;
    User: ReturnType<typeof ExportUser>;
  }
}
