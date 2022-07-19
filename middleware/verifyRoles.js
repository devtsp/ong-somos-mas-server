const verifyRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req?.user?.role) return res.sendStatus(401);
    const isAuthorized = allowedRoles.includes(req.user.role);
    if (!isAuthorized) return res.sendStatus(401);
    next();
  };
};

module.exports = verifyRoles;
