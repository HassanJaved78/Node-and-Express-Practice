import path from 'node:path';
import fs from 'node:fs/promises';
import sendResponse from './sendResponse.js';
import { getContentType } from './getContentType.js';

export default async function serveStatic(req, res, baseDir) {

    // const filePath = path.join(baseDir, 'public', 'index.html');
    const filePath = path.join(baseDir, 'public',
        req.url === '/' ? 'index.html' : req.url
    )
    console.log(filePath);
    
    const contentType = getContentType(filePath);

    try {
        const content = await fs.readFile(filePath);
        sendResponse(res, 200, contentType, content);
    }
    catch(err) {
        console.log(err);
        if (err.code === 'ENOENT') {
            const content = await fs.readFile(path.join(baseDir, 'public', '404.html'));
            sendResponse(res, 404, contentType, content);
        }
        else {
            sendResponse(res, 500, contentType, '<html><h1>Server Error: ${err.code}</h1></html>');
        }
    }

}