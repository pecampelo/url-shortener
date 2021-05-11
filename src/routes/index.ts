import { Router, Request, Response } from 'express';
import generateNewUrl from '../controller/url.controller';

const routes = Router();

<<<<<<< HEAD
    app.get('/', (req: Request, res: Response) => {
        res.redirect('/encurtador');
    });

    app.get('/encurtador', (req: Request, res: Response) => {
        res.send('App is healthy!')
        return res.end();
    });


};
=======
routes.get('/', (req, res) => {
    return res.redirect('/encurtador');
});

routes.get('/encurtador', (req: Request, res: Response) => {
    res.render('index');
    return res.end();
});


routes.post('/encurtador', (req, res) => {
    const { url } = req.body;
    console.log(url);
    const newUrl = generateNewUrl();
    console.log(newUrl);
    return res.send(`http://localhost:8001/${newUrl}`);
})


export default routes;
