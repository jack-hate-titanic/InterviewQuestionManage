// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportPriority = require('../../../app/service/priority');

declare module 'egg' {
  interface IService {
    priority: ExportPriority;
  }
}
