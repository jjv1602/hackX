const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const connectDB = require("./config/db.js");
const userRoutes = require("./routes/userRoutes");
const apnmtRoutes = require("./routes/apnmtRoutes.js")
const commonRoutes=require("./routes/commonRoutes.js");
dotenv.config({ path: path.resolve(__dirname, '../.env') });;

connectDB();
const app = express();
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/apnmt', apnmtRoutes);
app.use('/api/common',commonRoutes);

app.get("/", (req, res) => {
  res.send("API is running..");
});

//   ------------------------
const { errorHandler, notFound } = require('./middlewares/errorMiddlewares');
app.use(notFound)
app.use(errorHandler)
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT} `));
