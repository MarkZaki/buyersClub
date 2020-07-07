const jwt = require("jsonwebtoken");

const User = require("../models/user.model");
const { AUTH_HEADER } = require("../constants");

const auth = async (req, res, next) => {
	const token = req.header(AUTH_HEADER);

	if (!token) {
		return res.status(401).json({ error: "Access Denied" });
	}

	try {
		const verified = jwt.verify(token, process.env.JWT_SECRET);
		const user = await User.findById(verified._id);
		req.user = user;
		next();
	} catch (error) {
		return res.status(400).json({ error: "Invalid Token" });
	}
};

module.exports = auth;
