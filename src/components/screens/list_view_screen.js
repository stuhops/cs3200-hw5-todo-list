import React from 'react';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { Container, Text, H1 } from 'native-base';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import _ from 'lodash';
import ListListItem from '../lists/list_list_item';
import { createTodo } from '../../actions/lists';

export class ListScreen extends React.Component {
  styles = StyleSheet.create({
    message: {
      alignItems: 'center',
      padding: 16,
    }
  })

  state = {
    loadedName: 'Stu',
  }

  componentDidMount() {
    this.props.createTodo('Hello World', this.props.list.id);
  }

  markDone = (item) => {
    console.log('Mark', item, 'as done');
  }

  render() {
    return (
      <SafeAreaView>
        <Text>{this.props.list.title}</Text>
      </SafeAreaView>
    );
  }
}

select = (storeState, props) => {
  return {
    list: _.find(storeState.lists, {id: props.route.params.itemId}),
  }
};

export default connect(select, {createTodo})(ListScreen);
