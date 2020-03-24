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
      paddingLeft: 16,
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


  delete = (todo) => {
    console.log('Delete', todo.title);
  }


  edit = (todo) => {
    console.log('Edit', todo.title);
  }


  render() {
    const { todo } = this.props;
    return (
      <SwipeRow
        rightOpenValue={-125}
        leftOpenValue={125}
        stopRightSwipe={-145}
        stopLeftSwipe={145}
        onRowPress={console.log}
      >
        <View style={[this.styles.base, this.styles.hidden]}>
          {/* HIDDEN: need to swipe to see this content */}
          <TouchableOpacity onPress={() => this.edit(todo)} style={this.styles.editButton}>
            <Text style={this.styles.whiteText}>MODIFY</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.delete(todo)} style={this.styles.deleteButton}>
            <Text style={this.styles.whiteText}>DELETE</Text>
          </TouchableOpacity>
        </View>
        <View style={[this.styles.base, this.styles.visible]}>
          {/* VISIBLE: visible by default */}
          <Text style={this.styles.listText}><Icon name={todo.icon} size={24} color="blue" />   {todo.title}</Text>
        </View>
      </SwipeRow>
    );
  }
}
