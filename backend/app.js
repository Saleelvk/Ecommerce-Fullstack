const express = require('express');
const path = require('path');
const cors = require('cors'); // Importing CORS
const connectDB = require('./db/db');
const apiRouter = require('./routes/auth-routes');
const productRouter = require('./routes/product-rout');
const cartRoute = require('./routes/addToCart');
const orderRoute = require("./routes/orderRoute");
require('dotenv').config();

const Port = process.env.PORT || 4000;
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser());

const allowedOrigins = [
  'http://localhost:5174',
  'https://project-oy2wtdu8x-saleelvks-projects.vercel.app'
];

// Apply CORS middleware before routes
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'OPTIONS', "DELETE"],
  credentials: true
}));

// Enable preflight requests (OPTIONS)
app.options('*', cors());

// Middleware to handle JSON and URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use('/api/v1/auth', apiRouter);
app.use('/api/v1/product', productRouter);
app.use('/api/v1/cart', cartRoute);
app.use('/api/v1/order', orderRoute);

// Serve static files from uploads directory with custom headers
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads'), {
  setHeaders: (res) => {
    // Set caching headers for long-term cache
    res.setHeader('Cache-Control', 'public, max-age=31536000'); // Cache for 1 year
    // Set Content Security Policy for images
    res.setHeader('Content-Security-Policy', "default-src 'self'; img-src 'self' https://your-domain.com;");
    // Security headers
    res.setHeader('X-Content-Type-Options', 'nosniff');
  }
}));

// Connect to the database and start the server
app.listen(Port, () => {
  console.log(`Server running on port ${Port}`);
  connectDB();
});
