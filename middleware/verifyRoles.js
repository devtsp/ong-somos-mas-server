const jwt_decode = require('jwt-decode');

const verifyRoles = (...allowedRoles) => {
  return (req, res, next) => {
    const { UserInfo } = jwt_decode(req.token);
    const { roleId: role } = UserInfo;
    if (!role) return res.sendStatus(401);
    const isAuthorized = allowedRoles.includes(role);
    if (!isAuthorized) return res.sendStatus(401);
    next();
  };
};

module.exports = verifyRoles;
