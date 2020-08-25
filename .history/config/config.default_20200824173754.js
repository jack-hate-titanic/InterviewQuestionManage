/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {
    security: {
      csrf: {
        enable: false,
      },
    },
  });

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1566102726316_4105";

  // add your middleware config here
  // config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // config.middleware = ['jwt', 'errorHandler']

  config.jwt = {
    enable: true,
    ignore: ["/regist", "/login"], // 哪些请求不需要认证
  };

  config.mongoose = {
    url: "mongodb://127.0.0.1:27017/interview",
    //链接到本地的MongoDB，mongoTest是我本地数据库的名字，根据自己数据库名字进行填写即可
    options: {},
  };

  config.multipart = {
    fileSize: "50mb",
    mode: "stream",
    fileExtensions: [".xls", ".txt"],
  };

  return {
    ...config,
    ...userConfig,
  };
};
