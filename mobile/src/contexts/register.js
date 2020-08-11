import React, { createContext, useState, useContext } from 'react';
import axios from '../services/axios';
import { useAuth } from './auth';

const RegisterContext = createContext();

export function RegisterProvider({ children }) {
  const { signIn } = useAuth();
  const inputUser = {
    name: '',
    username: '',
    email: '',
  };

  const [inputs, setInputs] = useState(inputUser);

  async function signUp(data) {
    try {
      const response = await axios.post('/register', {
        ...inputs,
        ...data,
      });

      signIn(response.data);
    } catch (error) {
      Promise.reject(error);
    }
  }

  function handleChangeInputs(data) {
    setInputs({ ...inputs, ...data });
  }

  function handleClearInputs() {
    setInputs(inputUser);
  }

  return (
    <RegisterContext.Provider
      value={{ inputs, handleChangeInputs, handleClearInputs, signUp }}
    >
      {children}
    </RegisterContext.Provider>
  );
}

export function useRegister() {
  const context = useContext(RegisterContext);
  return context;
}
