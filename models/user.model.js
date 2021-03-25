const mongoose = require("mongoose");

const User = mongoose.model(
	"User",
	new mongoose.Schema({
		username: {
			type: String,
			required: true,
			maxlength: 255,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			minlength: 5,
			maxlength: 255,
			unique: true,
		},
		password: {
			type: String,
			required: true,
			minlength: 5,
			maxlength: 1024,
		},
		roles: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Role",
			},
		],
	})
);

module.exports = User;
