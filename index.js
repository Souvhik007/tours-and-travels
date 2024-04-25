import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import tourRoute from './routes/tours.js';
import userRoute from './routes/users.js';
import authRoute from './routes/auth.js';

const corsOptions = {
    origin:true,
    credentials: true,
}

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

// Database connection
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            // Remove useNewUrlParser and useUnifiedTopology as they are deprecated
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // Instead, use the new options
            // useFindAndModify: false, // if you use findOneAndUpdate() and findOneAndRemove() methods
            // useCreateIndex: true, // to deal with deprecation warning for collection.ensureIndex()
            // autoIndex: false, // To turn off automatic index creation in production environment
        });

        console.log('MongoDB database connected');
    } catch (err) {
        console.error('MongoDB database connection failed:', err.message);
    }
};

// Middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use('/api/v1/auth', authRoute);
app.use('/api/v1//tours', tourRoute);
app.use('/api/v1//users', userRoute);




app.listen(port, () => {
    connect();
    console.log('Server listening on port', port);
});
