import { Router, Request, Response } from 'express';
import LocatorController from '../controllers/locatorController';

const routes = Router();


routes.get('/', (req: Request, res: Response) => {
    return res.redirect('/encurtador');
});

routes.get('/encurtador', (req: Request, res: Response) => {
    res.render('index');
    return res.end();
});

// routes.get('/:newUrlCreated', (req, res) => {
//     const { newUrlCreated } = ;
// });

routes.post('/encurtador', (req, res) => {
    const url = req.body.url;
    console.log(url);
    const newUrlCreated = generateShortUrl();
    console.log(newUrlCreated);
    res.status(201).send(`Shortened the link!`);
});


export default routes;
