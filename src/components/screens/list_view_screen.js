import React from 'react';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { Container, Input, Item, Text, H1 } from 'native-base';
import { Alert, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import _ from 'lodash';
import TodoListItem from '../todos/todo_list_item';
import { createTodo, markTodoDone } from '../../actions/lists';
import Icon from 'react-native-vector-icons/FontAwesome';

export class ListScreen extends React.Component {
  styles = StyleSheet.create({
    message: {
      alignItems: 'center',
      padding: 16,
    },
    inputBox: {
      marginLeft: 16,
      marginRight: 16,
      marginVertical: 16,
    },
    addButton: {
      marginRight: 20,
    },
  })

  state = {
    loadedName: 'Stu',
    newTodo: '',
  }

  update = (key, value) => this.setState({ [key]: value })

  addTodo = () => {
    if (this.state.newTodo === '') {
      Alert.alert(
        'Missing Info',
        'You have to provide a todo dummy!!',
      );
      return;
    }
    this.props.createTodo(this.state.newTodo, this.props.list.id);
    this.setState({newTodo: ''});
  }

  markDone = (item) => {
    this.props.markTodoDone(item.id);
  }

  render() {
    return (
      <Container>
        <Item rounded style={this.styles.inputBox}>
          <Input 
            placeholder='New Todo' 
            value={this.state.newTodo}
            onChangeText={text => this.update('newTodo', text)}
          />
          <Icon 
            name="plus" 
            size={24} 
            color="blue" 
            style={this.styles.addButton}
            onPress={() => this.addTodo()}
          />
        </Item>
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
