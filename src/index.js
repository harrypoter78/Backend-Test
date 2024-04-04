const express = require('express');
const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('./infrastructure/swagger/swagger.js');
const memberRouter = require('./application/member/member.router');
const bookRouter = require('./application/book/book.router');
const borrowRouter = require('./application/borrow/borrow.router');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
app.use(express.json());

// Routes
app.use('/api/members', memberRouter);
app.use('/api/books', bookRouter);
app.use('/api/borrow', borrowRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server sedang berjalan di port http://localhost:${PORT}`);
});
