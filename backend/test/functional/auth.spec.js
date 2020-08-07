'use strict';

const { test, trait } = use('Test/Suite')('Auth');
const Factory = use('Factory');

trait('Test/ApiClient');
trait('DatabaseTransactions');

test('should return access token and user information', async ({
  assert,
  client,
}) => {
  const userPayload = {
    email: 'assiswesley549@gmail.com',
    password: 'Mypassword2',
  };

  await Factory.model('App/Models/User').create(userPayload);

  const response = await client
    .post('/login')
    .accept('application/json')
    .send(userPayload)
    .end();

  response.assertStatus(200);
  assert.exists(response.body.token);
  assert.exists(response.body.user.username);
});

test('should return validation error when trying to authenticate with non-existent email', async ({
  assert,
  client,
}) => {
  const userPayload = {
    email: 'assiswesley549@gmail.com',
    password: 'Mypassword2',
  };

  const response = await client
    .post('/login')
    .accept('application/json')
    .send(userPayload)
    .end();

  response.assertStatus(401);
  assert.equal(
    response.body[0].message,
    'Cannot find user with provided email'
  );
});

test('should return validation error when trying to authenticate with invalid password', async ({
  assert,
  client,
}) => {
  const userPayload = {
    email: 'assiswesley549@gmail.com',
    password: 'Mypassword2',
  };

  await Factory.model('App/Models/User').create(userPayload);

  userPayload.password = 'Otherpassword';

  const response = await client
    .post('/login')
    .accept('application/json')
    .send(userPayload)
    .end();

  response.assertStatus(401);
  assert.equal(response.body[0].message, 'Invalid user password');
});
