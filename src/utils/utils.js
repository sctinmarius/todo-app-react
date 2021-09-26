

export const getToken = () => {
  return localStorage.getItem('token') || null
}

export const setSessionLogin = (token, user) => {
  localStorage.setItem('token', token)
  localStorage.setItem('user', JSON.stringify(user))
}

export const removeSesionLogin = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
}

export const getFullName = () => {
  const user = localStorage.getItem('user')
  return JSON.parse(user).fullName
}
