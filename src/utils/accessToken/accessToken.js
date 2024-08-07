export const getAdminAccessToken = () => {
  return JSON.parse(sessionStorage.getItem("admin"));
};

export const getUserAccessToken = () => {
  return JSON.parse(sessionStorage.getItem("user"));
};

export const getOtpAccessToken = (type) => {
  const data=JSON.parse(sessionStorage.getItem("otpInfo"))
  if(type=="refresh"){
    return JSON.parse(sessionStorage.getItem("otpInfo"))?.refreshToken;
  }
  return JSON.parse(sessionStorage.getItem("otpInfo"))?.accessToken;
};
