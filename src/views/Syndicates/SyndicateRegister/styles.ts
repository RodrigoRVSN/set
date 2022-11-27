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
})