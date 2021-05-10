import { Request, Response } from 'express';
import urlsData = require('../models/url.model');

function generateNewUrl() {
      let text = '';
      const possibleText = 'abcdefghijklmnopqrstuvwxyz0123456789';
      for (let i = 0; i < 10; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
}


export async function createShortUrl(req: Request, res: Response) {
    // Get long destination
    const { destination } = req.body;
    // Shorten ShortURL
    // Return shortURL
    const newUrl = await url.create({ destination });
    return res.send(newUrl);
};
