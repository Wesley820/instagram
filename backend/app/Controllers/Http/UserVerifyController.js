'use strict';

const User = use('App/Models/User');
const { validate, rule } = use('Validator');

class UserVerifyController {
  async username({ request, response }) {
    try {
      const rules = {
        username: [
          rule('required'),
          rule('regex', /^(?=[a-z_\d]*[a-z])[a-z._\d]{5,}$/gim),
          rule('unique', 'users'),
        ],
      };
      const isValid = await validate(request.all(), rules);

      const responseType = {
        unique: { exists: true },
        passed: { exists: false },
        regex: { message: 'Invalid username.' },
        required: { message: 'Username is required.' },
      };

      if (isValid.fails()) {
        const { validation } = isValid._errorMessages[0];
        return responseType[validation];
      }

      return responseType['passed'];
    } catch (error) {
      return response.status(500).json({ message: error });
    }
  }

  async email({ request, response }) {
    try {
      const rules = {
        email: 'required|email|unique:users',
      };
      const isValid = await validate(request.all(), rules);

      const responseType = {
        unique: { exists: true },
        passed: { exists: false },
        email: { message: 'Invalid email.' },
        required: { message: 'Email is required.' },
      };

      if (isValid.fails()) {
        const { validation } = isValid._errorMessages[0];
        return responseType[validation];
      }

      return responseType['passed'];
    } catch (error) {
      return response.status(500).json({ message: error });
    }
  }
}

module.exports = UserVerifyController;
