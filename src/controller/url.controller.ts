import { Request, Response } from 'express';
import { Link } from '../models/url.model';

// main function
function generateShortUrl() {
      let text = '';
      const possibleUrl = 'abcdefghijklmnopqrstuvwxyz0123456789';
      for (let i = 0; i < 10; i++)
          text += possibleUrl.charAt(Math.floor(Math.random() * possibleUrl.length));
      return text;
};

let linkArray = {
  links : []
};

// function createNewId(longUrlReceived, newUrlCreated) {
//     let newId = (linkArray.links.length) + 1 ;
//     let link = new Link(longUrlReceived, newUrlCreated);
//     return link;
// };

export default generateShortUrl;
// export default createNewId;
