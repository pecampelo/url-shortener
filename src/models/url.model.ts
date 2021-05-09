import { Pool } from "pg";
import { customAlphabet } from 'nanoid';

const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz0987654321', 10);

export interface URL extends Document {
    id: string,
    destination: string;
}

const schema = new pg.Pool({
    id: {
      type: String,
      unique: true,
      required: true,
      default: () => nanoid()
    },
    destination: {
      type: String,
      required: true
    },
});

const url = pg.model<URL>('url', schema);

export default url;
