import React from 'react';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { Container, Text, H1 } from 'native-base';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import _ from 'lodash';
import TodoListItem from '../todos/todo_list_item';
import { createTodo, markTodoDone } from '../../actions/lists';

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
    this.props.markTodoDone(item.id);
  }

  render() {
    if (this.props.list.todos.length === 0) {
      return (
        <Container style={this.styles.message}>
          <H1>Welcome {this.state.loadedName}!</H1>
          <Text>You do not have any todos yet, click the "New" button at the top to add a new todo.</Text>
        </Container>
      )
    }

    return (
      <Container>
        <FlatList
          data={this.props.list.todos}
          renderItem={({item}) => (
            <TodoListItem 
              todo={item} 
              onPress={
                () => this.markDone(item)
              }
            />
          )}
          keyExtractor={item => `todo_${item.id}`}
        />
      </Container>
    );
  }
}

select = (storeState, props) => {
  return {
    list: _.find(storeState.lists, {id: props.route.params.itemId}),
  }
};

export default connect(select, {createTodo, markTodoDone})(ListScreen);
