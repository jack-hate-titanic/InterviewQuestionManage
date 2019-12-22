const Service = require('egg').Service;

class PriorityService extends Service {
    async list() {
        const ctx = this.ctx;
        return ctx.model.Priority.find();
    }
}

module.exports = PriorityService;
