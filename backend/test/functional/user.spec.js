'use strict';

const { test, trait } = use('Test/Suite')('User');
const Factory = use('Factory');

trait('Test/ApiClient');
trait('DatabaseTransactions');

test('should create a new user and return status code 201', async ({
  assert,
  client,
}) => {
  const userPayload = {
    name: 'Wesley Oliveira',
    email: 'assiswesley549@gmail.com',
    username: 'wesleyoliveira612',
    password: 'Mypassword2',
  };

  const response = await client
    .post('/register')
    .accept('application/json')
    .send(userPayload)
    .end();

  response.assertStatus(201);
  assert.exists(response.body.token.token);
  assert.exists(response.body.user.email);
});

test('test should return validation error when sending invalid username', async ({
  assert,
  client,
}) => {
  const userPayload = {
    name: 'Wesley Oliveira',
    email: 'assiswesley549@gmail.com',
    username: 'wesley>',
    password: 'Mypassword2',
  };

  const response = await client
    .post('/register')
    .accept('application/json')
    .send(userPayload)
    .end();

  const { field, validation } = response.body[0];

  response.assertStatus(400);
  assert.equal(field, 'username');
  assert.equal(validation, 'regex');
});

test('should return validation error when sending invalid email', async ({
  assert,
  client,
}) => {
  const userPayload = {
    name: 'Wesley Oliveira',
    email: 'assiswesleygmail',
    username: 'wesleyoliveira612',
    password: 'Mypassword2',
  };

  const response = await client
    .post('/register')
    .accept('application/json')
    .send(userPayload)
    .end();

  const { field, validation } = response.body[0];

  response.assertStatus(400);
  assert.equal(field, 'email');
  assert.equal(validation, 'email');
});

test('should return validation error when trying to register an email that already exists', async ({
  assert,
  client,
}) => {
  const userPayload = {
    name: 'Wesley Oliveira',
    email: 'assiswesley549@gmail.com',
    username: 'wesleyoliveira612',
    password: 'Mypassword2',
  };

  await Factory.model('App/Models/User').create(userPayload);
  userPayload.username = 'oliveirawesley620';

  const response = await client
    .post('/register')
    .accept('application/json')
    .send(userPayload)
    .end();

  const { field, validation } = response.body[0];

  response.assertStatus(400);
  assert.equal(field, 'email');
  assert.equal(validation, 'unique');
});
