import {Express, Request, Response} from 'express';
function routes(app: Express) {

    app.get('/encurtador', (req: Request, res: Response) => {
        return res.send('App is healthy!')
    })
}

export default routes;
