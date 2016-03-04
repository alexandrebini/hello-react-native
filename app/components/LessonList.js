import React, {Component, View, PropTypes} from 'react-native';
import {connect} from 'react-redux';
import Lesson from '../components/Lesson'

export default class LessonList extends Component {
  render() {
    const {children} = this.props;
    return (
        <View>{children}</View>
    );
  }
}

LessonList.propTypes = {
  children: PropTypes.node
}
