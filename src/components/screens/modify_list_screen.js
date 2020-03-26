import React from 'react';
import { Alert, StyleSheet, View, } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Input, Form, Item, Label, Textarea, Button, Text } from 'native-base';
import { modifyList } from '../../actions/lists';

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
    },
    iconRow: {
      marginHorizontal: 16,
      marginTop: 32,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    icon: {
      flex: 1,
      justifyContent: 'center',
    },
    iconSelected: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'rgba(100, 100, 100, 0.5)',
    },
  });

  componentDidMount() {
    this.setState(() => {
      return {
        title: this.props.route.params.list.title,
        icon: this.props.route.params.list.icon,
      }
    });
  }

  update = (key, value) => this.setState({ [key]: value })

  selectIcon = (newIcon) => {
    this.setState({icon: newIcon})
  }

  save = () => {
    if (this.state.title === '') {
      Alert.alert(
        'Missing Info',
        'You have to provide a title dummy!!',
      );

      this.setState({ titleMissing: true })

      return;
    }
    else if (this.state.icon === '') {
      Alert.alert(
        'Missing Info',
        'You have to provide an icon dummy!!',
      );

      this.setState({ iconMissing: true })

      return;
    }
    this.props.modifyList(
      this.state.title,
      this.state.icon,
      this.props.route.params.list.id,
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

          <View style={this.styles.iconRow}>
            <Button transparent style={this.state.icon === 'star' ? this.styles.iconSelected : this.styles.icon} onPress={() =>  this.selectIcon('star')}>
              <Icon name="star" size={24} color="blue"/>
            </Button>
            <Button transparent style={this.state.icon === 'glass' ? this.styles.iconSelected : this.styles.icon} onPress={() => this.selectIcon('glass')}>
              <Icon name="glass" size={24} color="blue"/>
            </Button>
            <Button transparent style={this.state.icon === 'snowflake-o' ? this.styles.iconSelected : this.styles.icon} onPress={() => this.selectIcon('snowflake-o')}>
              <Icon name="snowflake-o" size={24} color="blue"/>
            </Button>
            <Button transparent style={this.state.icon === 'trophy' ? this.styles.iconSelected : this.styles.icon} onPress={() => this.selectIcon('trophy')}>
              <Icon name="trophy" size={24} color="blue"/>
            </Button>
            <Button transparent style={this.state.icon === 'life-saver' ? this.styles.iconSelected : this.styles.icon} onPress={() => this.selectIcon('life-saver')}>
              <Icon name="life-saver" size={24} color="blue"/>
            </Button>
            <Button transparent style={this.state.icon === 'bicycle' ? this.styles.iconSelected : this.styles.icon} onPress={() => this.selectIcon('bicycle')}>
              <Icon name="bicycle" size={24} color="blue"/>
            </Button>
          </View>
        </Form>

        <Container style={this.styles.saveButtonContainer}>
          <Button onPress={this.save}><Text>Save</Text></Button>
        </Container>
      </Container>
    );
  }
}

const mapPropsToDispatch = {
  modifyList,
};

export default connect(null, mapPropsToDispatch)(CreateListScreen);
