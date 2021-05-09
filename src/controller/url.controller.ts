import { Request, Response } from 'express';
import url from '../models/url.model';


export async function createShortUrl(req: Request, res: Response) {
    // Get long destination
    const { destination } = req.body;
    // Shorten ShortURL
    // Return shortURL
    const newUrl = await url.create({ destination });
    return res.send(newUrl);

};
