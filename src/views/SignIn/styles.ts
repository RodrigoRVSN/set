import { StyleSheet } from 'react-native'
import { commonStyles } from '../../Styles/commonStyles'

export const styles = StyleSheet.create({
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
  buttonText: {
    color: commonStyles.secondaryColor,
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerButton: {
    color: commonStyles.primaryColor,
    fontSize: 14,
    marginTop: 16,
    alignSelf: 'center'
  },
  errorText: {
    color: 'red',
  },
})
