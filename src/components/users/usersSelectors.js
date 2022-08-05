export const setUsers = (state) => {
  return state.usersPage.users;
};
export const setPageSize = (state) => {
  return state.usersPage.pageSize;
};
export const setTotalUsersCount = (state) => {
  return state.usersPage.totalUsersCount;
};
export const setCurrentPage = (state) => {
  return state.usersPage.currentPage;
};
export const setIsFetching = (state) => {
  return state.usersPage.isFetching;
};
export const setIsDisabled = (state) => {
  return state.usersPage.isDisabled;
};
