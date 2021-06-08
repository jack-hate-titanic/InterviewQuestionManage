module.exports = (app) => {
  // model(参数1，参数2，参数3）参数3是你数据表中需要操作的表的名字，
  // 比如我现在要操作的是名字叫mongoTest里面的叫userInfo的表
  const { STRING, INTEGER } = app.Sequelize;
  const User = app.model.define("user", {
    usrId: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: STRING,
      allowNull: false,
    },
    password: {
      type: STRING,
      allowNull: false,
    },
  });
  // 加上这句话，就是这边操作数据库会同步执行
  User.sync({ alter: true });
  return User;
};
