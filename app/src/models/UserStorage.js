"use strict";

class UserStorage {
  static #users = {
    id: ["a", "게발맨", "오타쟁이"],
    psword: ["123", "123", "1234"],
    name: ["정팀장", "김과장", "박부장"],
  };

  static getUsers(...fields) {
    const users = this.#users
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field]
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage