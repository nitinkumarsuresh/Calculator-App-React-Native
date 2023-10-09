import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [value, setValue] = useState('');
  const [cur, setCur] = useState(0);

  const handleButtonPress = (buttonValue) => {
    if (buttonValue === 'AC') {
      setValue('');
      setCur(0);
    } else if (buttonValue === 'DE' && cur === 0) {
      setValue(value.slice(0, -1));
    } else if (buttonValue === '=') {
      if (value !== '') {
        try {
          setValue(eval(value).toString());
          setCur(-1);
        } catch (error) {
          setValue('Error');
        }
      }
    } else {
      setValue(value + buttonValue);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.calculator}>
        <View style={styles.nk}>
          <Text style={styles.nkText}>NKasio</Text>
          <Text style={styles.Text}>Simplify Your Math with Our Calculator App</Text>
        </View>
        <View style={styles.display}>
          <TextInput
            style={styles.displayInput}
            value={value}
            editable={false}
            textAlign="right"
            fontSize={40}
            numberOfLines={1}
          />
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => handleButtonPress('AC')}
          >
            <Text style={styles.buttonText}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => handleButtonPress('DE')}
          >
            <Text style={styles.buttonText1}>DE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => handleButtonPress('%')}
          >
            <Text style={styles.buttonText1}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => handleButtonPress('/')}
          >
            <Text style={styles.buttonText1}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress('7')}
          >
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress('8')}
          >
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress('9')}
          >
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => handleButtonPress('*')}
          >
            <Text style={styles.buttonText1}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress('4')}
          >
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress('5')}
          >
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress('6')}
          >
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => handleButtonPress('+')}
          >
            <Text style={styles.buttonText1}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress('3')}
          >
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress('2')}
          >
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress('1')}
          >
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => handleButtonPress('-')}
          >
            <Text style={styles.buttonText1}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress('0')}
          >
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress('00')}
          >
            <Text style={styles.buttonText}>00</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress('.')}
          >
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button1]}
            onPress={() => handleButtonPress('=')}
          >
            <Text style={styles.buttonText1}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style='light'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  calculator: {
    flex: 1,
    backgroundColor: '#313131',
    borderRadius: 20,
    padding: 20,
    paddingTop:60,
  },
  nk: {
    alignItems: 'center',
    marginBottom: 20,
  },
  nkText: {
    fontSize: 40,
    color: '#FF72A3',
  },
  Text: {
    fontSize: 11,
    color: '#C0C0C0',
  },
  display: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: 20,
    
  },
  displayInput: {
    flex: 1,
    fontSize: 60,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    color: 'black',
    
  },
  buttonRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    width: '23%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#494D53',
    marginVertical: 5,
    borderRadius: 10,
  },
  button1:{
    width: '23%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5DE8D6',
    marginVertical: 5,
    borderRadius: 10,
  },
  button2:{
    width: '23%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DF3F37',
    marginVertical: 5,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 30,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  buttonText1: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
  equalButton: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    
    marginVertical: 5,
    borderRadius: 10,
  },
  equalButtonText: {
    fontSize: 30,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  clearButton: {
    backgroundColor: '#EF5350',
  },
  deleteButton: {
    backgroundColor: '#FDD835',
  },
  specialButton: {
    backgroundColor: '#4CAF50',
  },
  operatorButton: {
    backgroundColor: '#2196F3',
  },
  numericButton: {
    backgroundColor: '#78909C',
  },
  zeroButton: {
    width: '48%',
  },
  dotButton: {
    width: '23%',
  },
});

