const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Parijat Shoily Server Running 🌸");
});

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});