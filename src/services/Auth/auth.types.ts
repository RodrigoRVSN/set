export type SignInType = {
  email: string,
  password: string,
}

export type SignUpType = {
  email: string,
  password: string,
  phone: string,
  name: string,
  role: 'ADMIN' | 'SYNDICATE' | 'RESIDENT'
}