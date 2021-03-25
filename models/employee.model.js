module.exports = (mongoose) => {
	const Employee = mongoose.model(
		"employee",
		mongoose.Schema(
			{
				name: {
					type: String,
					required: true,
					maxlength: 255,
					unique: true,
				},
				empEmail: {
					type: String,
					required: true,
					minlength: 5,
					maxlength: 255,
					unique: true,
				},
				isActive: Boolean,
			},
			{ timestamps: true }
		)
	);

	return Employee;
};
