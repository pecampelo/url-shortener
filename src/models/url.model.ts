import { customAlphabet } from 'nanoid';
const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz0987654321', 10);

import db = require("../db/db.config");

// exports.getUrls= function() {
//     return db.query('select * from url');
// }
