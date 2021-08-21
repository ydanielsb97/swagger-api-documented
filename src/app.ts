import Express, { json, Request, Response, urlencoded } from 'express'
import TaskRouter from './routes/tasks.routes';
import constants from "./config";
const app = Express();

// Config

app.set('port', constants.PORT);

// Middlewares

app.use(json());
app.use(urlencoded({extended: true}));

// Routes

app.use('/tasks', TaskRouter);


// Route 404 Custom
app.use('*', (req: Request, res: Response) =>{
    res.json({
        message: "404 not found"
    })
    
})


export default app;