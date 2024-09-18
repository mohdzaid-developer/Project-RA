export const getAdminAccessToken = () => {
  return JSON.parse(sessionStorage.getItem("admin"))?.accessToken;
};

export const getUserAccessToken = () => {
  return JSON.parse(sessionStorage.getItem("user"))?.accessToken;
};

export const getOtpAccessToken = (type) => {
  if (type == "refresh") {
    return JSON.parse(sessionStorage.getItem("otpInfo"))?.refreshToken;
  }
  if (type == "changePassword") {
    return (
      JSON.parse(sessionStorage.getItem("changePasswordInfo"))?.accessToken ??
      JSON.parse(sessionStorage.getItem("user"))?.accessToken
    );
  }
  return JSON.parse(sessionStorage.getItem("otpInfo"))?.accessToken;
};

export const getAdminOtpAccessToken = (type) => {
  if (type == "refresh") {
    return JSON.parse(sessionStorage.getItem("adminOtpInfo"))?.refreshToken;
  }
  return JSON.parse(sessionStorage.getItem("adminOtpInfo"))?.accessToken;
};
