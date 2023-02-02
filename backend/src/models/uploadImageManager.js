const AbstractManager = require("./AbstractManager");

class newProjectManager extends AbstractManager {
  constructor() {
    super({ table: "project" });
  }

  findAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }

  insert(project) {
    return this.connection.query(
      `insert into ${this.table} (image) values (?)`,
      [project.image]
    );
  }

  update(project) {
    return this.connection.query(
      `update ${this.table} set image = ? where id = ?`,
      [project.image]
    );
  }
}

module.exports = newProjectManager;
