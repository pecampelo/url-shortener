import { Router, Request, Response } from 'express';
import controller = require('../controller/url.controller');

const routes = Router();

routes.get('/', (req, res) => {
    return res.redirect('/encurtador');
});

routes.get('/encurtador', (req: Request, res: Response) => {
      res.render('index');
      // res.json({ hello: 'World'});
});


routes.post('/newUrl', (req, res, next) => {
      const url = req.body.url;
      const code = generateCode();
      res.send('http://localhost:3000' + code);
})

export default routes;
