import React, {Component, View, Text} from 'react-native';
import {Provider} from 'react-redux';
import configureStore from '../store/configureStore';
import {getAllLessons} from '../actions/LessonListActions'
import LessonsContainer from '../containers/LessonsContainer'

const store = configureStore();
store.dispatch(getAllLessons())

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <LessonsContainer/>
      </Provider>
    )
  }
}
