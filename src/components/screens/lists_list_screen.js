import React from 'react';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { Container, Text, H1 } from 'native-base';
import { FlatList, StyleSheet } from 'react-native';
import ListListItem from '../lists/list_list_item';
import { getLists } from '../../actions/lists';

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
  // PRIMITIVE EXAMPLE OF STORAGE
  // async componentDidMount() {
  //   const info = {
  //     name: 'Joseph',
  //     birthday: '01/01/2001',
  //   };
  //   await AsyncStorage.setItem("@todo_app_user_name", JSON.stringify(info));
  //   const loadedInfoJsonString = await AsyncStorage.getItem("@todo_app_user_name");
  //   const parsedInfo = JSON.parse(loadedInfoJsonString);
  //   this.setState({ loadedName: parsedInfo.name });
  //   console.log(parsedInfo);
  // }

  componentDidMount() {
    this.props.getLists();
  }

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
            <ListListItem list={item} onPress={() => this.props.navigation.navigate('List View', item)}/>
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

export default connect(select, { getLists })(ListScreen);
