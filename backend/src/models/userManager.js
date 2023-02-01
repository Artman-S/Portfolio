const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  findAllUsers() {
    return this.connection.query(
      `select * from  ${this.table} order by lastname ASC`
    );
  }

  findByEmail(email) {
    return this.connection.query(
      `select * from ${this.table} where email = ?`,
      [email]
    );
  }

  userFindByID(id) {
    return this.connection.query(
      `select firstname, lastname, DATE_FORMAT(birthday, "%Y-%m-%d") date, user_role, matricule, email from  ${this.table} where id = ?`,
      [id]
    );
  }

  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (firstname, lastname, birthday, email) values (?, ?, ?, ?)`,
      [user.firstname, user.lastname, user.birthday, user.email]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${this.table} set firstname = ?, lastname= ?, birthday = ?, email = ?, pw= ?, where id = ?`,
      [
        user.firstname,
        user.lastname,
        user.birthday,
        user.email,
        user.pw,
        user.id,
      ]
    );
  }

  userUpdateUser(user, { id }) {
    return this.connection.query(
      `update ${this.table} set firstname = ?, lastname= ?, birthday= ?, email = ? where id = ?`,
      [user.firstname, user.lastname, user.date, user.email, id]
    );
  }
}

module.exports = UserManager;
