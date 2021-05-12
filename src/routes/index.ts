import { Router, Request, Response } from 'express';
import generateShortUrl from '../controller/url.controller';

const routes = Router();

routes.get('/', (req, res) => {
    return res.redirect('/encurtador');
});

routes.get('/encurtador', (req: Request, res: Response) => {
    res.render('index');
    return res.end();
});

routes.get('/:shortUrl', (req, res) => {
    const { shortUrl } = req.params;
});

routes.post('/encurtador', (req, res) => {
    const url = req.body.url;
    console.log(url);
    const newUrlCreated = generateShortUrl();
    console.log(newUrlCreated);
    res.status(201).send("Shortened the link!");
});


export default routes;
