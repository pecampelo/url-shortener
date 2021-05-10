import {Express, Request, Response} from 'express';
import { createShortUrl } from '../controller/url.controller';

function routes(app: Express) {

    app.get('/', (req: Request, res: Response) => {
        res.redirect('/encurtador');
    });

    app.get('/encurtador', (req: Request, res: Response) => {
        res.render('index');
        console.log('Server is working!');
    });

    app.post('/shortUrl', createShortUrl);

}

export default routes;
