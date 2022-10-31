import { StyleSheet, Dimensions } from 'react-native'

const deviceWidth = Dimensions.get('window').width

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    height: 40,
    width: deviceWidth / 2,
    marginBottom: 12,
    fontSize: 16,
  },
  button: {
    width: deviceWidth / 2,
    borderRadius: 10,
    paddingVertical: 8,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
})
