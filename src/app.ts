import Express, { json, Request, Response, urlencoded } from 'express'
import TaskRouter from './routes/tasks.routes';
import constants from "./config";
import SwaggerUI from "swagger-ui-express";
import SwaggerJsDoc from "swagger-jsdoc";
import { options } from "./swaggerOptions";

const app = Express();

// Config

app.set('port', constants.PORT);

// Middlewares

app.use(json());
app.use(urlencoded({extended: true}));

// Swagger

const specs = SwaggerJsDoc(options);

// Routes

app.use('/tasks', TaskRouter);
app.use('/docs', SwaggerUI.serve, SwaggerUI.setup(specs));

// Route 404 Custom
app.use('*', (req: Request, res: Response) =>{
    res.json({
        message: "404 not found"
    })
    
})


export default app;