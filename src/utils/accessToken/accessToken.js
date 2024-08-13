export const getAdminAccessToken = () => {
  return JSON.parse(sessionStorage.getItem("admin"));
};

export const getUserAccessToken = () => {
  return JSON.parse(sessionStorage.getItem("user"))?.accessToken;
};

export const getOtpAccessToken = (type) => {
  // const data = JSON.parse(sessionStorage.getItem("otpInfo"));
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
  console.log(JSON.parse(sessionStorage.getItem("adminOtpInfo")))
  return JSON.parse(sessionStorage.getItem("adminOtpInfo"))?.accessToken;
};
