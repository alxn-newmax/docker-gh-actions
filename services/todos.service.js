import TodosSchema from "../models/todos.model.js";

class Todos {
  async addTask(req, res) {
    await res.send({ status: 200 });
  }
  async updateTask(req, res) {
    await res.send({ status: 200 });
  }
  async deleteTask(req, res) {
    await res.send({ status: 200 });
  }
  async findTask(req, res) {
    await res.send({ status: 200 });
  }
}

export default new Todos();
