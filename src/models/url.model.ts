import postgres, { Document } from "postgres";
import { customAlphabet } from 'nanoid';

const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz0987654321', 10);

export interface URL extends Document {
    id: string,
    destination: string;
}

const schema = new postgres.Schema({
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

const url = postgres.model<URL>('url', schema);

export default url;
