const fakeAuthProvider = {
  isAuthenticated: false,
  login: (callback: VoidFunction) => {
    fakeAuthProvider.isAuthenticated = true
    setTimeout(callback, 100)
  },
  logout: (callback: VoidFunction) => {
    fakeAuthProvider.isAuthenticated = false
    setTimeout(callback, 100)
  }
}

export { fakeAuthProvider }