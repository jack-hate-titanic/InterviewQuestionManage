egg.'use strict';

const Controller = require('egg').Controller;

class FileController extends Controller {
  async create() {
     // 获取文件流
  const stream = await this.ctx.getFileStream();
  // 定义文件名
  const filename = Date.now() + path.extname(stream.filename).toLocaleLowerCase();
  // 目标文件
  const target = path.join('app/public/uploads', filename);
  //
  const writeStream = fs.createWriteStream(target);
  console.log('-----------获取表单中其它数据 start--------------');
  console.log(stream.fields);
  console.log('-----------获取表单中其它数据 end--------------');
  try {
    //异步把文件流 写入
    await awaitWriteStream(stream.pipe(writeStream));
  } catch (err) {
    //如果出现错误，关闭管道
    await sendToWormhole(stream);
    // 自定义方法
    this.error(err);
  }
  // 自定义方法
  this.success({ url: '/public/uploads/' + filename });
  }
}

module.exports = FileController;
