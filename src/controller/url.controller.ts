import { Request, Response } from 'express';
import urlsData = require('../models/url.model');

// main function
function generateNewUrl() {
      let text = '';
      const possibleUrl = 'abcdefghijklmnopqrstuvwxyz0123456789';
      for (let i = 0; i < 10; i++)
          text += possibleUrl.charAt(Math.floor(Math.random() * possibleUrl.length));
      return text;
}

//  alternate
export async function createShortUrl(req: Request, res: Response) {
    // Get long destination
    const { destination } = req.body;
    // Shorten ShortURL
    // Return shortURL
    const newUrl = await url.create({ destination });
    return res.send(newUrl);
};

export default generateNewUrl;
