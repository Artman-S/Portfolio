const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  findByEmail(email) {
    return this.connection.query(
      `select * from ${this.table} where email = ?`,
      [email]
    );
  }

  findByPW(password) {
    return this.connection.query(`select * from ${this.table} where pw = ?`, [
      password,
    ]);
  }
}

module.exports = UserManager;
