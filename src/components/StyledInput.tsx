import {StyleSheet, Text, View, StyleProp, TextInputProps} from 'react-native';
import React from 'react';
import {Input, InputProps} from '@rneui/themed';
import {useTheme} from '@react-navigation/native';

type StyledInputProps = InputProps & {};

const StyledInput = ({
  placeholder = 'Please enter your name',
  label = 'Name',
  keyboardType = 'name-phone-pad',
  selectionColor = '#a5b4fc',
  cursorColor = '#a5b4fc',
  placeholderTextColor = '#6b7280',
  onChangeText,
  onChange,
  errorMessage = '',
  value = '',
  rightIcon = {},
  leftIcon = {},
  ref = null,
  multiline = false,
  maxLength = 30,
}: StyledInputProps) => {
  const {colors, dark} = useTheme();
  return (
    <Input
      containerStyle={styles.container}
      inputContainerStyle={[
        styles.inputContainer,
        {borderColor: colors.border},
      ]}
      value={value}
      keyboardType={keyboardType}
      inputStyle={[styles.input, {color: dark ? '#fff' : '#000'}]}
      label={label}
      labelStyle={[styles.label, {color: colors.text}]}
      placeholder={placeholder}
      selectionColor={selectionColor}
      onChange={onChange}
      onChangeText={onChangeText}
      cursorColor={cursorColor}
      maxLength={maxLength}
      placeholderTextColor={placeholderTextColor}
      errorMessage={errorMessage}
      rightIcon={rightIcon}
      leftIcon={leftIcon}
    />
  );
};

export default StyledInput;

const styles = StyleSheet.create({
  container: {
    // width: '100%',
    // borderWidth: 2,
    marginVertical: 5,
    paddingLeft: 0,
    borderColor: 'purple',
  },
  inputContainer: {
    width: '100%',
    borderWidth: 1,
    borderBottomWidth: 1,
    marginTop: 5,
    borderColor: 'red',
    borderRadius: 10,
  },
  input: {
    // borderWidth: 1,
    fontSize: 14,
    marginLeft: 10,
    borderColor: 'blue',
  },
  label: {
    color: '#4b5563',
    fontWeight: '600',
  },
});
