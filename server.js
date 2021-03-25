const express = require("express");
const cors = require("cors");

const app = express();
const db = require("./models");
const Role = db.role;
const User = db.user;

db.mongoose
	.connect(
		`mongodb+srv://mongoadarsh:cqWWi48T63c5Wii6@cluster0.y2v1i.mongodb.net/task-db?retryWrites=true&w=majority`,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false,
		}
	)
	.then(() => {
		console.log("Successfully connect to MongoDB.");
		// initial();
	})
	.catch((err) => {
		console.error("Connection error", err);
		process.exit();
	});

var corsOptions = {
	origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);
require("./routes/employee.routes")(app);

// simple route
app.get("/", (req, res) => {
	res.json({ message: "Welcome to bezkoder application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});

// function initial() {
// 	Role.estimatedDocumentCount((err, count) => {
// 		if (!err && count === 0) {
// 			new Role({
// 				name: "user",
// 			}).save((err) => {
// 				if (err) {
// 					console.log("error", err);
// 				}

// 				console.log("added 'user' to roles collection");
// 			});

// 			new Role({
// 				name: "moderator",
// 			}).save((err) => {
// 				if (err) {
// 					console.log("error", err);
// 				}

// 				console.log("added 'moderator' to roles collection");
// 			});

// 			new Role({
// 				name: "admin",
// 			}).save((err) => {
// 				if (err) {
// 					console.log("error", err);
// 				}

// 				console.log("added 'admin' to roles collection");
// 			});
// 		}
// 	});
// 	User.estimatedDocumentCount((err, count) => {
// 		if (!err && count === 0) {
// 			new User({
// 				username: "moderator",
// 				password: "12345678",
// 				email: "mod@gmail.com",
// 				roles: ["user", "moderator"],
// 			}).save((err) => {
// 				if (err) {
// 					console.log("error", err);
// 				}
// 				console.log("added 'user' to Users collection");
// 			});
// 		}
// 	});
// }
