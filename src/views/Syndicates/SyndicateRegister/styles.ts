import { StyleSheet, Dimensions } from 'react-native'
import { commonStyles } from '../../../Styles/commonStyles'

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: commonStyles.primaryColor,
    height: '100%',
    width: '100%',
    padding: 20
  },
  title: {
    fontSize: 20,
    marginTop: 28,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },
  errorText: {
    color: 'red',
  },
  buttonText: {
    color: commonStyles.secondaryColor,
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: commonStyles.primaryColor,
    width: '40%',
    borderRadius: 10,
    paddingVertical: 8,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
})

export const selectButton = {
  marginTop: 8,
  width: '100%'
}