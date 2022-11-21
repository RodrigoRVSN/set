import { StyleSheet, Dimensions  } from 'react-native'
import { commonStyles } from '../../Styles/commonStyles'

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: commonStyles.primaryColor,
    height: '100%',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  cardsContainer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: '90%',
    height: '60%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '45%',
    height: deviceHeight * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginRight: 10,
    marginBottom: 10,
    marginLeft: 10,
    backgroundColor: commonStyles.secondaryColor,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  cardText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: commonStyles.primaryColor
  },
  logoutButton: {
    width: deviceWidth * 0.5,
    backgroundColor: commonStyles.secondaryColor,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    marginBottom: 45,
    alignItems: 'center'
  },
  logoutButtonText: {
    color: commonStyles.primaryColor,
    fontSize: 30,
    alignSelf: 'center'
  }
})
