import React, {Component, Image, View, Text, PropTypes} from 'react-native'
import {connect} from 'react-redux';
import styles from '../styles/LessonStyle';

console.log(styles)

export default class Lesson extends Component {
  render() {
    const {lesson} = this.props;
    return (
      <View style={styles.container}>
        <Image source={{uri: lesson.image}} style={styles.image} />
        <View style={styles.text}>
          <Text style={styles.title} numberOfLines={1}>{lesson.title}</Text>
          <Text description={styles.description} numberOfLines={2}>{lesson.description}</Text>
        </View>
      </View>
    );
  }
}

Lesson.propTypes = {
  lesson: PropTypes.shape({
    description: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string.isRequired
  }).isRequired,
  onClicked: PropTypes.func.isRequired
}
