import React from 'react';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { Container, Text, H1 } from 'native-base';
import { FlatList, StyleSheet } from 'react-native';
import ListListItem from '../lists/list_list_item';
import { getLists, deleteList } from '../../actions/lists';

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
    this.props.getLists();
  }

  delete = id => this.props.deleteList(id); 

  modify = list => this.props.navigation.navigate('Modify List', {list});

  render() {
    if (this.props.lists.length === 0) {
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
          data={this.props.lists}
          renderItem={({item}) => (
            <ListListItem 
              list={item} 
              onPress={ () => this.props.navigation.navigate('List View', {itemId: item.id}) }
              onDelete={ () => this.delete(item.id) }
              onModify={ () => this.modify(item) }
            />
          )}
          keyExtractor={item => `todo_${item.id}`}
        />
      </Container>
    );
  }
}

select = (storeState) => {
  return {
    lists: storeState.lists,
  }
};

export default connect(select, { getLists, deleteList })(ListScreen);
