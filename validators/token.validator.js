const Joi = require("@hapi/joi");

const tokenSchema = Joi.object({
	token: Joi.string().min(6).required()
});

module.exports = { tokenSchema };
