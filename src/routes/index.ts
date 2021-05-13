import { Router, Request, Response } from 'express';
import generateShortUrl from '../controller/url.controller';

const routes = Router();

routes.get('/', (req, res) => {
    return res.redirect('/encurtador');
});

routes.get('/encurtador', (req, res) => {
    res.render('index');
    res.end();
});

// routes.get('/:newUrlCreated', (req, res) => {
//     const { newUrlCreated } = ;
// });

routes.post('/encurtador', (req, res) => {
    const url = req.body.url;
    console.log(url);
    const shortUrl = generateShortUrl();
    console.log(shortUrl);
    res.send(`Shortened the link! >>>> ${shortUrl}`);
    return shortUrl;
});


export default routes;
