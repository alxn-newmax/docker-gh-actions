import Service from "../services/todos.service.js";

class Todos {
  async addTask(req, res) {
    await Service.addTask(req, res);
  }
  async updateTask(req, res) {
    await Service.updateTask(req, res);
  }
  async deleteTask(req, res) {
    await Service.deleteTask(req, res);
  }
  async findTask(req, res) {
    await Service.findTask(req, res);
  }
}

export default new Todos();
