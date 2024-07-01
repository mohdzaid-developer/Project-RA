export const getAdminAccessToken = () => {
  return JSON.parse(sessionStorage.getItem("admin"));
};

export const getUserAccessToken = () => {
  return JSON.parse(sessionStorage.getItem("user"));
};
