'use strict';

const { test, trait } = use('Test/Suite')('User Verify');
const Factory = use('Factory');

trait('Test/ApiClient');
trait('DatabaseTransactions');

//Test username
test('should return property exists as true the username already has registration', async ({
  assert,
  client,
}) => {
  const username = 'wesleyoliveira612';
  await Factory.model('App/Models/User').create({ username });

  const response = await client
    .post('/verify/username')
    .send({ username })
    .end();

  response.assertStatus(200);
  assert.equal(response.body.exists, true);
});

test('should return property exists as false when the username is not registered', async ({
  assert,
  client,
}) => {
  const response = await client
    .post('/verify/username')
    .send({ username: 'wesleyoliveira612' })
    .end();

  response.assertStatus(200);
  assert.equal(response.body.exists, false);
});

test('test should return validation error when sending invalid username', async ({
  assert,
  client,
}) => {
  const response = await client
    .post('/verify/username')
    .send({ username: 'wes.' })
    .end();

  response.assertStatus(200);
  assert.equal(response.body.message, 'Invalid username.');
});

//Test email
test('should return property exists as true the email already has registration', async ({
  assert,
  client,
}) => {
  const email = 'assiswesley549@gmail.com';
  await Factory.model('App/Models/User').create({ email });

  const response = await client.post('/verify/email').send({ email }).end();

  response.assertStatus(200);
  assert.equal(response.body.exists, true);
});

test('should return property exists as false when the email is not registered', async ({
  assert,
  client,
}) => {
  const response = await client
    .post('/verify/email')
    .send({ email: 'assiswesley549@gmail.com' })
    .end();

  response.assertStatus(200);
  assert.equal(response.body.exists, false);
});

test('test should return validation error when sending invalid email', async ({
  assert,
  client,
}) => {
  const response = await client
    .post('/verify/email')
    .send({ email: 'assiswesley@com' })
    .end();

  response.assertStatus(200);
  assert.equal(response.body.message, 'Invalid email.');
});
