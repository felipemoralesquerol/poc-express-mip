import {Schema, model} from 'mongoose';
import { defaultMaxListeners } from 'node:events';

const roleSchema = new Schema({
    name: String
    }, 
    { 
    versionKey: false
})

export default model('Role', roleSchema);