const mongoose = require("../config/mongo.config");

const tokenSchema = new mongoose.Schema({
	_userId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "User"
	},
	token: {
		type: String,
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

const tokenModel = mongoose.model("Token", tokenSchema);

module.exports = tokenModel;
