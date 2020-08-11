import axios from './axios';

export async function signIn(data) {
  return await axios.post('/login', data);
}
