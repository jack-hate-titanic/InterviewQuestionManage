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
    secret: "123456",
    ignore: ["/api/regist", "/api/login"], // 哪些请求不需要认证
  };

  config.sequelize = {
    dialect: "mysql",
    dialectOptions: {
      charset: "utf8mb4",
    },
    host: "127.0.0.1",
    port: 3306,
    database: "interview",
    username: "root", // 数据库用户名
    password: "123456", // 数据库密码
    define: {
      // model的全局配置
      timestamps: false, // 添加create,update,delete时间戳
      paranoid: true, // 添加软删除
      freezeTableName: true, // 防止修改表名为复数
      underscored: false, // 防止驼峰式字段被默认转为下划线
    },
    timezone: "+8:00", // 由于orm用的UTC时间，这里必须加上东八区，否则取出来的时间相差8小时
    dialectOptions: {
      // 让读取date类型数据时返回字符串而不是UTC时间
      dateStrings: true,
      typeCast(field, next) {
        if (field.type === "DATETIME") {
          return field.string();
        }
        return next();
      },
    },
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
