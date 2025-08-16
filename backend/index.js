require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const { v4: uuidv4 } = require('uuid');

const { HoldingsModel } = require("./model/HoldingsModel");

const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const cookieParser = require("cookie-parser");

// const authRoute = require("./Routes/AuthRoute");

const PORT = 3002;
const uri = process.env.MONGO_URL;
const JWT_SECRET = process.env.JWT_SECRET;

// const connectDB=require('./db');
const User = require("./model/UserModel");
const jwt = require("jsonwebtoken");


const app = express();

const FRONTEND_URL =
  process.env.REACT_APP_FRONTEND_URL || "http://localhost:3000";
const DASHBOARD_URL =
  process.env.REACT_APP_DASHBOARD_URL || "http://localhost:3001";


const corsOptions = {
  // origin: ["https://zerodha-clone-pi-mauve.vercel.app", "https://zerodha-clone-5drm.vercel.app"], // your frontend origin
  // origin: ["http://localhost:3000", "http://localhost:3001"], // your frontend origin
  origin: [
    process.env.DASHBOARD_URL,
    process.env.FRONTEND_URL,
    "http://localhost:3000",
    "http://localhost:3001",
  ],

  credentials: true, // allow credentials (cookies, authorization headers, etc.)
};
app.use(cors(corsOptions));
app.use(bodyParser.json());


app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allpositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", authenticateToken, async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: "No token provided" });

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Get user ID from token

    let newOrder = new OrdersModel({
      orderId: uuidv4(),
      userId: decoded.id, // Save the userId
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();

    res.send("Order saved!");
  } catch (e) {
    console.error("Error saving order:", e);
    res.status(500).send("Server error");
  }
});

app.get("/userOrders", authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id; // Ensure this 'id' is in your JWT
    const userOrders = await OrdersModel.find({ userId });
    res.json(userOrders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/newOrder", async (req, res) => {
  
  try {
    const orders = await OrdersModel.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});

app.delete("/userOrders/:id",authenticateToken,async(req,res)=>{
  try{
    const orderId=req.params.id;
    await OrdersModel.findByIdAndDelete(orderId);
    res.status(200).json({message:"Order deleted successfully"})
  }catch(err){
    console.log(err);
    res.status(500).json({error:"Failed to delete order"})
    
  }

});

// Signup Route
app.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields required" });
    }
    const existing = await User.findOne({ email });
    if (existing) {
      return res
        .status(400)
        .json({ success: false, message: "Email already exists" });
    }
    const user = new User({ username, email, password });
    await user.save();
    // Issue JWT on signup
    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
    res.json({
      success: true,
      message: "Signup successful",
      token,
      user: { username: user.username, email: user.email },
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Signup failed", error: err.message });
  }
});

// Login Route
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }
    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
    res.json({
      success: true,
      token,
      user: {
        username: user.username,
        email: user.email,
        redirectUrl: "http://localhost:3001",
      },
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Login failed", error: err.message });
  }
});



// Auth Middleware Example
function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token" });
  try {
    const decoded = jwt.verify(token, JWT_SCERET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
}




// Middleware to verify token
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ message: "No token provided" });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = user;
    next();
  });
}


// Temporary route to view all users (for testing only)
app.get("/all-users", async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching users", error: err.message });
  }
});

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(3002, () =>
       console.log("Server running on port 3002"));
    res.send("working");
  })
  .catch((err) => console.error("MongoDB connection error:", err));
  



