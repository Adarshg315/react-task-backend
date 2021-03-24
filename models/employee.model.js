module.exports = (mongoose) => {
	const Employee = mongoose.model(
		"employee",
		mongoose.Schema(
			{
				title: String,
				description: String,
				published: Boolean,
			},
			{ timestamps: true }
		)
	);

	return Employee;
};
