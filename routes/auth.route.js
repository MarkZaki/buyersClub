const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user.model");
const { AUTH_HEADER } = require("../constants");
const { registerSchema, loginSchema } = require("../validators/auth.validator");
const auth = require("../middlewares/auth.middleware");

// @DESC Register User Route
// @ROUTE POST /api/auth/register
router.post("/register", async (req, res) => {
	// Validate Request Body
	const { error } = registerSchema.validate(req.body);
	if (error) {
		return res.status(400).json({ error: error.details[0].message });
	}

	// Check if email exists in database
	const emailExist = await User.findOne({ email: req.body.email });
	if (emailExist) {
		return res.status(400).json({ error: "email already exists" });
	}

	// Hash Password
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(req.body.password, salt);

	// Create New User
	const user = new User({
		name: req.body.name,
		email: req.body.email,
		phone: req.body.phone,
		password: hashedPassword
	});

	// Save New User
	try {
		const savedUser = await user.save();
		// Create and assign Token
		const token = jwt.sign({ _id: savedUser._id }, process.env.JWT_SECRET);
		return res.header(AUTH_HEADER, token).json({ token: token });
	} catch (error) {
		res.status(400).json({ error: error });
	}
});

// @DESC Login User Route
// @ROUTE POST /api/auth/login
router.post("/login", async (req, res) => {
	// Validate Request Body
	const { error } = loginSchema.validate(req.body);
	if (error) {
		return res.status(400).json({ error: error.details[0].message });
	}

	// Check if user exists in database
	const user = await User.findOne({ email: req.body.email });
	if (!user) {
		return res.status(400).json({ error: "email or password is wrong" });
	}

	// Check if password is correct
	const validPass = await bcrypt.compare(req.body.password, user.password);
	if (!validPass) {
		return res.status(400).json({ error: "email or password is wrong" });
	}

	// Create and assign Token
	const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
	return res.header(AUTH_HEADER, token).json({ token: token });
});

// @DESC Get logged in user
// @ROUTE GET /api/auth/
router.get("/", auth, async (req, res) => {
	try {
		const user = await User.findById(req.user.id).select("-password");
		res.json(user);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Server Error" });
	}
});

module.exports = router;
