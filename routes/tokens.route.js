const router = require("express").Router();

const Token = require("../models/token.model");
const User = require("../models/user.model");

const auth = require("../middlewares/auth.middleware");

const { tokenSchema } = require("../validators/token.validator");

router.post("/confirm", auth, async (req, res) => {
	// Validate Request Body
	const { error } = tokenSchema.validate(req.body);
	if (error) {
		return res.status(400).json({ error: error.details[0].message });
	}
	// fetch user
	const user = await User.findById(req.user._id).select("-password");
	// find matching token
	const token = await Token.findOne({
		_userId: user._id
	});

	// if not token
	if (!token) {
		return res.status(400).json({ error: "Invalid Validation Code" });
	}

	// check if user is already verified
	if (user.verified) {
		return res.status(400).json({ error: "User is already verified" });
	}

	// check if token is correct
	if (!(token.token == req.body.token)) {
		return res.status(400).json({ error: "Wrong Validation Code" });
	}

	// modify user
	user.verified = true;

	// save user
	try {
		const savedUser = await user.save();
		delete savedUser.password;
		await token.remove();
		return res.json({ user: savedUser });
	} catch (error) {
		return res.status(400).json({ error: error });
	}
});

module.exports = router;
