import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev')); // Logging middleware

// Set view engine
app.set('view engine', 'ejs');

// Use routes
app.use('/', (request:Request,response:Response)=>{
    console.log(request.url)
    response.send(`<h1>Node Js server running successfully on http://localhost:${PORT} </h1>`)
});

// 404 handler
app.use((request: Request, response: Response) => {
    console.log(request.url)
  response.status(404).send('Route not found');
});

// Error handling middleware
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    console.log(request.url)
  console.error(err.stack);
  response.status(500).send('Something went wrong!');
  next()
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
