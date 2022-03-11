import express, { json } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import { connectDB } from './database/db.config';

// Connect to DB
connectDB();

// Routes
import keepRoutes from './routes/keep.routes';
import authRoutes from './routes/auth.routes';
import eventRoutes from './routes/event.routes';

// Initializations
export const app = express();

//middlewares

// comunications with other servers
app.use(cors());

// Helmet can help protect your app from some well-known web vulnerabilities
// by setting HTTP headers appropriately.
app.use(helmet());

// Public Dire
app.use(express.static('public'));

// sms servers develops
app.use(morgan('dev'));

// format json to object
app.use(json());

// Data format form
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/api', keepRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);
