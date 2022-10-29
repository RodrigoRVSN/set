import { StyleSheet } from 'react-native'

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
    backgroundColor: '#38A69D',
    width: '40%',
    borderRadius: 10,
    paddingVertical: 8,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerButton: {
    color: '#38A69D',
    fontSize: 14,
    marginTop: 16,
    alignSelf: 'center'
  },
  errorText: {
    color: 'red',
  },
})

export const selectButton = {
  marginTop: 8,
  width: '100%'
}