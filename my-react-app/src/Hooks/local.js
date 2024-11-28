export const setUserLocal = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
}

export const getUserLocal = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
}

export const clearUser = () => {
  localStorage.clear();
}