// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCategory = require('../../../app/model/category');
import ExportQuestion = require('../../../app/model/question');
import ExportUser = require('../../../app/model/user');

declare module 'egg' {
  interface IModel {
    Category: ReturnType<typeof ExportCategory>;
    Question: ReturnType<typeof ExportQuestion>;
    User: ReturnType<typeof ExportUser>;
  }
}
