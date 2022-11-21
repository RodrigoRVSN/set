import { StyleSheet } from 'react-native'
import { commonStyles } from '../../Styles/commonStyles'

export const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: commonStyles.primaryColor,
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderColor: commonStyles.secondaryColor,
  },
  headerText: {
    fontSize: 32,
    color: commonStyles.secondaryColor
  }
})
