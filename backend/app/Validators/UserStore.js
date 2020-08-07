'use strict';

const { rule } = use('Validator');

class UserStore {
  get rules() {
    return {
      name: 'required|string',
      username: [
        rule('required'),
        rule('string'),
        rule('regex', /^(?=[a-z_\d]*[a-z])[a-z._\d]{5,}$/gim),
        rule('unique', 'users'),
      ],
      email: 'required|email|unique:users',
      password: 'required|string|min:8',
    };
  }
}

module.exports = UserStore;
