// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCategory = require('../../../app/controller/category');
import ExportFile = require('../../../app/controller/file');
import ExportLogin = require('../../../app/controller/login');
import ExportQuestion = require('../../../app/controller/question');
import ExportUser = require('../../../app/controller/user');

declare module 'egg' {
  interface IController {
    category: ExportCategory;
    file: ExportFile;
    login: ExportLogin;
    question: ExportQuestion;
    user: ExportUser;
  }
}
