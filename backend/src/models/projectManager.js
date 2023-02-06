const AbstractManager = require("./AbstractManager");

class newProjectManager extends AbstractManager {
  constructor() {
    super({ table: "project" });
  }

  findAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }

  // eslint-disable-next-line camelcase
  insert({ title, description, link_project, link_github, image, status }) {
    return this.connection.query(
      `insert into ${this.table} (title, description, link_project, link_github, image, status) values (?, ?, ?, ?, ?, ?)`,
      // eslint-disable-next-line camelcase
      [title, description, link_project, link_github, image, status]
    );
  }

  update(project) {
    return this.connection.query(
      `update ${this.table} set title = ?, description= ?, link_project= ?, link_github= ?, status= ? where id = ?`,
      [
        project.title,
        project.description,
        project.link_project,
        project.link_github,
        project.status,
      ]
    );
  }
}

module.exports = newProjectManager;
