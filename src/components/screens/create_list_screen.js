import React from 'react';
import { connect } from 'react-redux';
import { createList } from '../../actions/lists';
import { Container, Input, Form, Item, Label, Textarea, Button, Text } from 'native-base';
import { StyleSheet, Alert } from 'react-native';

export class CreateListScreen extends React.Component {
  state = {
    title: '',
    icon: '',
    titleMissing: false
  }

  styles = StyleSheet.create({
    saveButtonContainer: {
      padding: 14,
      marginTop: 16,
    }
  })

  update = (key, value) => this.setState({ [key]: value })

  save = () => {
    if (this.state.title === '') {
      Alert.alert(
        'Missing Info',
        'You have to provide a title dummy!!',
      );

      this.setState({ titleMissing: true })

      return;
    }
    this.props.createList(
      this.state.title,
      this.state.icon,
    );

    this.props.navigation.goBack();
  }

  render() {

    return (
      <Container>
        <Form>
          <Item floatingLabel>
            <Label>Title</Label>
            <Input
              value={this.state.title}
              onChangeText={text => this.update('title', text)}
            />
          </Item>
          <Item floatingLabel>
            <Label>Icon</Label>
            <Input
              value={this.state.icon}
              onChangeText={text => this.update('icon', text)}
            />
          </Item>
        </Form>
        <Container style={this.styles.saveButtonContainer}>
          <Button onPress={this.save}><Text>Save</Text></Button>
        </Container>
      </Container>
    );
  }
}

const mapPropsToDispatch = {
  createList,
};

export default connect(null, mapPropsToDispatch)(CreateListScreen);
