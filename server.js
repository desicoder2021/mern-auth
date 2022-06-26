const express = require("express");
const connectDB = require("./config/db");
const app = express();

// this is good to use for Heoroku deoployment to get the port
const PORT = process.env.PORT || 5000;

// connect to database
connectDB();

// initialize middleware
// we used to have to install body parser but now it is a built in middleware
// function of express It parses incoming JSON payload
app.use(express.json({ extended: false }));

app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/users", require("./routes/api/users"));

// Production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
