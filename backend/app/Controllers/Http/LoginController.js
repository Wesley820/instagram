'use strict';
const User = use('App/Models/User');

class LoginController {
  async store({ request, auth }) {
    const { email, password } = request.only(['email', 'password']);
    const token = await auth.attempt(email, password);

    const user = await User.query()
      .select('id', 'name', 'username', 'email')
      .where({ email })
      .first();

    return { user, token };
  }
}

module.exports = LoginController;
