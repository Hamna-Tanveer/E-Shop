// create tokrn and sending this in cookies
const sendToken = (user, statusCode, res) => {
  const token = user.getJwtToken();

  //Options for cookies
  const Options = {
    expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

  res.status(statusCode).cookie("token", token, Options).json({
    success: true,
    user,
    token,
  });
};
module.exports = sendToken;
