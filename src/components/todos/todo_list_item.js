import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { SwipeRow } from 'react-native-swipe-list-view';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class TodoListItem extends React.Component {
  styles = StyleSheet.create({
    base: {
      backgroundColor: 'white',
      height: 64,
      borderBottomWidth: 1,
    },
    listText: {
      fontSize: 32,
    },
    deleteButton: {
      flex: 1,
      backgroundColor: 'red',
      height: 64,
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingRight: 16,
    },
    editButton: {
      flex: 1,
      backgroundColor: 'green',
      height: 64,
      alignItems: 'flex-start',
      justifyContent: 'center',
      paddingRight: 16,
    },
    whiteText: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
    },
    hidden: {
      flexDirection: 'row',
    },
    visible: {
      justifyContent: 'center',
      paddingLeft: 16,
    }
  });


  edit = (todo) => {
    console.log('Edit', todo.title);
  }


  render() {
    const { todo, onPress, onDelete } = this.props;
    return (
      <SwipeRow
        rightOpenValue={-125}
        leftOpenValue={0}
        stopRightSwipe={-145}
        stopLeftSwipe={0}
        onRowPress={onPress}
      >
        <View style={[this.styles.base, this.styles.hidden]}>
          {/* HIDDEN: need to swipe to see this content */}
          <TouchableOpacity onPress={() => onDelete(todo.id)} style={this.styles.deleteButton}>
            <Text style={this.styles.whiteText}>DELETE</Text>
          </TouchableOpacity>
        </View>
        <View style={[this.styles.base, this.styles.visible]}>
          {/* VISIBLE: visible by default */}
          <Text style={this.styles.listText}>
            <Icon 
              name={ todo.done ? 'check-circle' : 'check-circle-o' } 
              size={24} 
              color={ todo.done ? 'green' : 'gray' } />   {todo.title}</Text>
        </View>
      </SwipeRow>
    );
  }
}
