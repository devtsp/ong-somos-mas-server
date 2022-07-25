const verifyRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req?.role) return res.status(401).json({ res: false, error: 'No user Role detected' });
    const isAuthorized = allowedRoles.includes(req.role);
    if (!isAuthorized)
      return res.status(401).json({ res: false, error: 'Forbidden, role unauthorized' });

    next();
  };
};

module.exports = verifyRoles;
