import React, {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#F5FCFF',
    margin: 5,
  },
  text: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 5,
  },
  title: {
    fontSize: 20,
    marginVertical: 2,
  },
  description: {
    fontSize: 12,
    marginVertical: 2,
  },
  image: {
    alignSelf: 'flex-start',
    width: 113,
    height: 62,
    marginTop: 5,
    marginBottom: 5
  }
});
