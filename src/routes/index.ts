import { Router, Request, Response } from 'express';
import controller = require('../controller/url.controller');

const routes = Router();

routes.get('/', (req, res) => {
    return res.redirect('/encurtador');
});

routes.get('/encurtador', (req: Request, res: Response) => {
      return res.render('index');
      return res.json({ hello: 'World'});
});

export default routes;
