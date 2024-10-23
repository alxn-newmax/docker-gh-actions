import { exec } from 'child_process';
class Todos {
  async addTask(req, res) {
    await res.send({ status: 200, message: "Task added successfully" });
  }
  async updateTask(req, res) {
    await res.send({ status: 200, message: "Task added successfully" });
  }
  async deleteTask(req, res) {
    await res.send({ status: 200 });
  }
  async findTask(req, res) {
    console.log('first')
    exec('docker-compose up -d');
    await res.send({ status: 200 });
  }
}

export default new Todos();
