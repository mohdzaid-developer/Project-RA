export const getAdminAccessToken = () => {
  return JSON.parse(sessionStorage.getItem("admin"));
};

export const getUserAccessToken = () => {
  return JSON.parse(sessionStorage.getItem("user"));
};

export const getOtpAccessToken = () => {
  return JSON.parse(sessionStorage.getItem("data"))?.token;
};

export const getRefreshAccessToken = () => {
  return JSON.parse(sessionStorage.getItem("admin"))
  ? JSON.parse(sessionStorage.getItem("admin")).accessToken
  : JSON.parse(sessionStorage.getItem("subAdmin"))?.accessToken;
}
