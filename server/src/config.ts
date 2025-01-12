import dotenv from 'dotenv';

dotenv.config();


// Mapper for environment variables
export const environment = process.env.NODE_ENV;
export const port = process.env.PORT;
export const timezone = process.env.TZ;

export const db = process.env.MONGODB_URI || "";

export const corsUrl = process.env.CORS_URL;

export const logDirectory = process.env.LOG_DIR;

export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || "";

export const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;

export const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;

export const CLOUDINARY_SECRET_KEY = process.env.CLOUDINARY_SECRET_KEY;