import { StyleSheet, Dimensions  } from 'react-native'
import { commonStyles } from '../../Styles/commonStyles'

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: commonStyles.primaryColor,
    height: deviceHeight,
    width: deviceWidth,
    padding: 10
  },
  title: {
    marginVertical: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: commonStyles.secondaryColor
  },
  text: {
    fontSize: 16,
    color: commonStyles.secondaryColor
  }
})