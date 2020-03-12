import React, {ReactElement, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default function App(): ReactElement {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleClick = (event) => {
    event.preventDefault();
    setGreeting(name);
    setName('');
  };

  const onChange = (event) => {
    setName(event.target.value);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('./assets/page_26_medicall online orvos.png')}/>
      <Text style={styles.text}>{`Üdv, ${greeting}!`}</Text>
      <form>
        <input placeholder={'Név'} value={name} onChange={onChange}/>
        <button type={"submit"} onClick={handleClick}>Küldés</button>
      </form>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  img: {
    height: '134px',
    width: '400px',
    marginBottom: '20px'
  },
  text: {
    fontSize: '14px',
    marginBottom: '10px'
  }
});
