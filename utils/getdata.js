import fs from 'node:fs/promises';
import path, { parse } from 'node:path';

export default async function getData() {
    try{
        const baseDir = import.meta.dirname;
        const filePath = path.join('data', 'data.json');

        const content = await fs.readFile(filePath);
        const parsedData = JSON.parse(content);
        return parsedData;
    }
    catch(err) {
        console.log(err);
        return [];
    }
}