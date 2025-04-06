import { request, Request, Response} from 'express'
const devRouter = require('express').Router()


// Basic route
devRouter.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the WoT Clantool Backend!');
});

// Route that responds with an array of 5 things
devRouter.get('/items', (req: Request, res: Response) => {
    const items = ['Apple', 'Sword', 'Tank', 'Clan', 'Milk'];
    res.json(items);
});


export default devRouter;