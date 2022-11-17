import { StyleSheet } from 'react-native'
import { commonStyles } from '../../Styles/commonStyles'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: commonStyles.primaryColor,
  },
  containerLogo: {
    flex: 1,
    backgroundColor: commonStyles.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerForm: {
    flex: 1,
    backgroundColor: commonStyles.secondaryColor,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
  },
  text: {
    color: '#A1A1A1',
  },
  button: {
    position: 'absolute',
    backgroundColor: commonStyles.primaryColor,
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: commonStyles.secondaryColor,
    fontWeight: 'bold',
  },
})
