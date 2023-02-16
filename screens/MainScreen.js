import React, {useEffect, useState} from 'react';

import {Button, Text, View, StyleSheet, TextInput} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  changeIntervalOfUpdate,
  clearHistory,
  getBitcoinLatest,
  nextPage,
  prevPage,
  toggleFilter
} from '../redux/reducers/bitcoinSlice';


import {Table, Row, Rows} from 'react-native-table-component';
import minutes from "../utils/minutes";

const MainScreen = () => {
  const [data, setData] = useState([])
  const dispatch = useDispatch();
  const bitcoinState = useSelector(state => state.bitcoin)
  const {history, limit, offset, ascending, intervalOfSearch, } = bitcoinState
  console.log('bitcoinState', bitcoinState)

  useEffect(() => {
    if (history) {
      setData([...history].sort((a, b) => ascending ? b[1] - a[1] : a[1] - b[1]).splice(offset, limit))
    }
  }, [offset, history.length, ascending])

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(getBitcoinLatest())
    }, minutes(intervalOfSearch))
    return () => clearInterval(interval)
  }, [])
  return (
    <View style={styles.container}>
      <View style={styles.intervalContainer}>
        <View style={styles.inputContainer}>
          <Text>
            Interval Of Update
          </Text>
          <TextInput onChangeText={(val)=> dispatch(changeIntervalOfUpdate(val))} value={intervalOfSearch + ''} style={styles.intervalInput}/>
        </View>
      </View>
      <View style={styles.actionsContainer}>
        <Button title={'clear history'} onPress={() => dispatch(clearHistory())}/>
        <View>
          <Button title={'Toggle sorting by price'} onPress={() => dispatch(toggleFilter())}/>
          <Text>{ascending ? 'ascending' : 'descending'}</Text>
        </View>
      </View>
      <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
        <Row data={['Time', 'Price']} style={styles.head} textStyle={styles.text}/>
        <Rows data={data} textStyle={styles.text}/>
      </Table>
      <View style={styles.actionsContainer}>
        <Button title={'Back'} onPress={() => dispatch(prevPage())}/>
        <Button title={'Next'} onPress={() => dispatch(nextPage())}/>
      </View>
      <View style={styles.fetchContainer}>
        <Button title={'Fetch Now'} onPress={() => dispatch(getBitcoinLatest())}/>
      </View>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
    position: 'relative',
  },
  intervalContainer: {
    marginVertical:30,
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 100,
    alignItems: 'center',
    paddingVertical: 15
  },
  inputContainer: {
    width: '40%',
    marginLeft: 15,
    alignItems: 'center'
  },
  intervalInput: {
    borderWidth: 1,
    borderRadius: 100,
    width: '100%',
    textAlign:'center'
  },

  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginVertical: 10
  },
  fetchContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
  },
  head: {height: 40, backgroundColor: '#f1f8ff'},
  text: {margin: 6}

})
