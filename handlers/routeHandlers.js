import getData from '../utils/getdata.js';
import sendResponse from '../utils/sendResponse.js';

// GET handler
export async function handleGet(res) {
    const data = await getData();
    const content = JSON.stringify(data);
    sendResponse(res, 200, 'application/json', content)
}


// POST handler
export async function hanldePost(req, res) {
    
}