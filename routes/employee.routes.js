module.exports = (app) => {
	const employees = require("../controllers/employee.controller.js");

	var router = require("express").Router();

	// Create a new Employee
	router.post("/", employees.create);

	// Retrieve all Tutorials
	router.get("/", employees.findAll);

	// Retrieve all isActive Tutorials
	router.get("/isActive", employees.findAllIsActive);

	// Retrieve a single Employee with id
	router.get("/:id", employees.findOne);

	// Update a Employee with id
	router.put("/:id", employees.update);

	// Delete a Employee with id
	router.delete("/:id", employees.delete);

	// Create a new Employee
	router.delete("/", employees.deleteAll);

	app.use("/api/employees", router);
};
