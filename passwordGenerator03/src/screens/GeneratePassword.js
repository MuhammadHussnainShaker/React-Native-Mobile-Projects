import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Button,
} from 'react-native';

import React, {useState} from 'react';

import * as Yup from 'yup';
import {Formik} from 'formik';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

// navigation
import { useNavigation } from '@react-navigation/native';

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Password length should be 4 characters at least')
    .max(16, 'Password length should not exceed 16 characters')
    .required('This field is required'),
});

export default function Home () {
    const navigation = useNavigation()

    const [password, setPassword] = useState('');
    const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);

    const [isLowerCase, setIsLowerCase] = useState(true);
    const [isUpperCase, setIsUpperCase] = useState(false);
    const [numbers, setNumbers] = useState(false);
    const [symbols, setSymbols] = useState(false);

    const createPassword = (characters, passwordLength) => {
      let result = '';
      for (let i = 0; i < passwordLength; i++) {
        const characterIndex = Math.round(Math.random() * characters.length);
        result += characters.charAt(characterIndex);
      }
      return result;
    };

    const generatePasswordString = passwordLength => {
      let characterList = '';

      const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
      const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const numberChars = '1234567890';
      const specialChars = '!@#$%^&*()`~[];,./?><|":}{';

      if (isLowerCase) {
        characterList += lowerCaseChars;
      }
      if (isUpperCase) {
        characterList += upperCaseChars;
      }
      if (numbers) {
        characterList += numberChars;
      }
      if (symbols) {
        characterList += specialChars;
      }

      const passwordResult = createPassword(characterList, passwordLength);
      setPassword(passwordResult);
      setIsPasswordGenerated(true);
    };

    const resetPasswordState = () => {
      setPassword('');
      setIsPasswordGenerated(false);
      setIsLowerCase(true);
      setIsUpperCase(false);
      setNumbers(false);
      setSymbols(false);
    };

    return (
      <ScrollView keyboardShouldPersistTaps="handled">
        <SafeAreaView style={styles.appContainer}>
          <View style={styles.formContainer}>
            <Text style={styles.title}>Password Generator</Text>
            <Formik
              initialValues={{passwordLength: ''}}
              validationSchema={PasswordSchema}
              onSubmit={values => {
                return generatePasswordString(+values.passwordLength);
              }}>
              {({
                values,
                errors,
                touched,
                isValid,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                handleReset,
                /* and other goodies */
              }) => (
                <>
                  <View style={styles.inputWrapper}>
                    <View style={styles.inputColumn}>
                      <Text style={styles.heading}>Password Length</Text>
                      {errors.passwordLength && (
                        <Text style={styles.errorText}>
                          {errors.passwordLength}
                        </Text>
                      )}
                    </View>
                    <TextInput
                      style={styles.inputStyle}
                      value={values.passwordLength}
                      onChangeText={handleChange('passwordLength')}
                      placeholder="Ex. 8"
                      keyboardType="numeric"
                    />
                  </View>
                  <View style={styles.inputWrapper}>
                    <Text style={styles.heading}>Include Lowercase</Text>
                    <BouncyCheckbox
                      disableBuiltInState
                      isChecked={isLowerCase}
                      onPress={() => setIsLowerCase(!isLowerCase)}
                      fillColor="#29AB87"
                    />
                  </View>
                  <View style={styles.inputWrapper}>
                    <Text style={styles.heading}>
                      Include Uppercase letters
                    </Text>
                    <BouncyCheckbox
                      disableBuiltInState
                      isChecked={isUpperCase}
                      onPress={() => setIsUpperCase(!isUpperCase)}
                      fillColor="#FED85D"
                    />
                  </View>
                  <View style={styles.inputWrapper}>
                    <Text style={styles.heading}>Include Numbers</Text>
                    <BouncyCheckbox
                      disableBuiltInState
                      isChecked={numbers}
                      onPress={() => setNumbers(!numbers)}
                      fillColor="#C9A0DC"
                    />
                  </View>
                  <View style={styles.inputWrapper}>
                    <Text style={styles.heading}>Include Symbols</Text>
                    <BouncyCheckbox
                      disableBuiltInState
                      isChecked={symbols}
                      onPress={() => setSymbols(!symbols)}
                      fillColor="#FC80A5"
                    />
                  </View>
                  <View style={styles.formActions}>
                    <TouchableOpacity
                      disabled={!isValid}
                      style={styles.primaryBtn}
                      onPress={() => {
                        handleSubmit();
                        Keyboard.dismiss();
                      }}>
                      <Text style={styles.primaryBtnTxt}>
                        Generate Password
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.secondaryBtn}
                      onPress={() => {
                        handleReset();
                        resetPasswordState();
                      }}>
                      <Text style={styles.secondaryBtnTxt}>Reset</Text>
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </Formik>
          </View>
          {isPasswordGenerated ? (
            <View style={[styles.card, styles.cardElevated]}>
              <Text style={styles.subTitle}>Result:</Text>
              <Text style={styles.description}>Long press to copy</Text>
              <Text selectable={true} style={styles.generatedPassword}>
                {password}
              </Text>
            </View>
          ) : null}
          <View>
            <Button
              title="About Us"
              onPress={() => navigation.navigate('About')}
            />
          </View>
        </SafeAreaView>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inputColumn: {
    flexDirection: 'column',
  },
  inputStyle: {
    padding: 8,
    width: '30%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#16213e',
  },
  errorText: {
    width: 200,
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#CAD5E2',
  },
  secondaryBtnTxt: {
    textAlign: 'center',
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color: '#000',
  },
});