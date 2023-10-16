import { View, } from 'react-native';
import React from 'react'
import CircularProgress from '../components/circular-bar/CircularProgressBar ';

const Home = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <CircularProgress initialValue={10} />
    </View>
  );
}

export default Home;