import React, { useEffect, useRef } from 'react';
import { TextInput, Text } from 'react-native';
import { useField } from '@unform/core';

export default function Input({ name, ...rest }) {
  const inputRef = useRef(null);

  const { fieldName, registerField, error } = useField(name);

  useEffect(() => {
    registerField(
      {
        name: fieldName,
        ref: inputRef.current,
        path: 'value',
        setValue(ref, value) {
          ref.setNativeProps({ text: value });
          inputRef.current.value = value;
        },
      },

      [registerField]
    );
  });

  return (
    <>
      <TextInput
        ref={inputRef}
        onChangeText={(value) => {
          if (inputRef.current) {
            inputRef.current.value = value;
          }
        }}
        {...rest}
      />
      {error && (
        <Text
          style={{
            marginRight: 'auto',
            marginBottom: 13,
            color: '#ee2121',
          }}
        >
          {error}
        </Text>
      )}
    </>
  );
}
