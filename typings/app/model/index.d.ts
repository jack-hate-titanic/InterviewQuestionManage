// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportClass = require('../../../app/model/class');
import ExportJs = require('../../../app/model/js');
import ExportMarx = require('../../../app/model/marx');
import ExportUser = require('../../../app/model/user');

declare module 'egg' {
  interface IModel {
    Class: ReturnType<typeof ExportClass>;
    Js: ReturnType<typeof ExportJs>;
    Marx: ReturnType<typeof ExportMarx>;
    User: ReturnType<typeof ExportUser>;
  }
}
