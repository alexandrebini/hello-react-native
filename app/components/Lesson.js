import React, {Component, View, Text, PropTypes} from 'react-native'
import {connect} from 'react-redux';

export default class Lesson extends Component {
  render() {
    const {lesson} = this.props;
    return (
      <View>
        <Text>{lesson.title}</Text>
      </View>
    );
  }
}

Lesson.propTypes = {
  lesson: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  onClicked: PropTypes.func.isRequired
}
