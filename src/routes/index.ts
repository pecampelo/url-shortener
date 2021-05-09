import {Express, Request, Response} from 'express';
import { createShortUrl } from '../controller/url.controller';

function routes(app: Express) {

    app.get('/encurtador', (req: Request, res: Response) => {
        return res.send('App is healthy!')
    });

    app.post('/api/url', createShortUrl);

}

export default routes;
