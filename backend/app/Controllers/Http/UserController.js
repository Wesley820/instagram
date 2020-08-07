'use strict';
const User = use('App/Models/User');

class UserController {
  async store({ request, response, auth }) {
    try {
      const password = request.input('password');
      const data = request.only(['name', 'username', 'email', 'password']);

      const { name, username, email } = await User.create(data);
      const token = await auth.attempt(email, password);

      return response.status(201).json({
        user: {
          name,
          username,
          email,
        },
        token,
      });
    } catch (error) {
      return response.status(500).json({ message: error });
    }
  }
}

module.exports = UserController;
