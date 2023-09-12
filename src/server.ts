import cors from 'cors';
import express, { Express } from 'express';
import fileUpload from 'express-fileupload';
import helmet from 'helmet';
import morgan from 'morgan';
import { genreRoutes, playlistRoutes, trackRoutes, userRoutes } from './routes';


const app: express.Application = express();


app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false })); // Middleware for parsing form data
app.use(helmet());
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './uploads'
}));


app.use('/user', userRoutes);
app.use('/playlist', playlistRoutes);
app.use('/track', trackRoutes);
app.use('/genre', genreRoutes)


export default app;