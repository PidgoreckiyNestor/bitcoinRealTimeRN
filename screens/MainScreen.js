import React, { useEffect } from 'react';

import { Button, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { getBitcoinLatest } from '../redux/reducers/bitcoinSlice';
import axios from 'axios';
import bitcoin from '../services/bitcoin';

const MainScreen = () => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getBitcoinLatest());
  // }, [dispatch]);
  useEffect(() => {
     bitcoin.getBitcoinLatest().then(response => {
      console.log(response.data);
    }).catch(err=>console.log('errrrrr',err));
  }, []);
  return (
    <View>
      <Text>hello</Text>
      <Button title={'click'} onPress={() => dispatch(getBitcoinLatest())}/>
    </View>
  );
};

export default MainScreen;
