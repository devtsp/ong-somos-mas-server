const verifyJWT = (req, res, next) => {
	// GRANT ADMIN ACCESS UNTIL PROPER AUTH IMPLEMENTATION TO ALL INCOMING REQUESTS
	req.user = {
		role: 'Admin',
	};
	next();
};

module.exports = verifyJWT;
