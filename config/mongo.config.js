const mongoose = require("mongoose");

const mongoURL = process.env.DB_CONNECT;

if (!mongoURL) {
	console.error("Connection String is not found.");
	return;
}

mongoose.connect(mongoURL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false
});

mongoose.connection.on(
	"error",
	console.error.bind(console, "connection error:")
);
mongoose.connection.once("open", () => {
	console.log("Connected to Database!");
});

module.exports = mongoose;
