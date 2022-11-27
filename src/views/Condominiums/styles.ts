import { StyleSheet, Dimensions  } from 'react-native'
import { commonStyles } from '../../Styles/commonStyles'

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: commonStyles.primaryColor,
    height: '100%',
    width: '100%',
    padding: 20
  },
  registerButton: {
    width: deviceWidth * 0.5,
    height: deviceHeight * 0.05,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: commonStyles.secondaryColor,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    margin: 30,
    alignSelf: 'center',
    position: 'absolute',
    top: 0
  },
  registerButtonText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: commonStyles.primaryColor
  },
  text: {
    alignSelf: 'flex-start'
  },
  flatlist: {
    paddingVertical: 40,
    top: 60
  },
  card: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 20,
    paddingHorizontal: 20,
    paddingVertical: 20
  },
})
