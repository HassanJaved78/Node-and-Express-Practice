import getData from '../utils/getdata.js';
import sendResponse from '../utils/sendResponse.js';
import parseJSONBody from '../utils/parseJSONBody.js';
import addNewSighting from '../utils/addNewSighting.js';
import sanitizeData from '../utils/sanitizeData.js';
import { sightingEvents } from '../events/sightingEvents.js';
import { stories } from "../data/stories.js";

// GET handler
export async function handleGet(res) {
    const data = await getData();
    const content = JSON.stringify(data);

    // below is an exmaple of XSS attack if data is not sanitized
    // "text": "<img src=x onerror=\"document.location.href='https://google.com'\">",
    
    sendResponse(res, 200, 'application/json', content)
}


// POST handler
export async function hanldePost(req, res) {
    
    try {
        const parsedBody = await parseJSONBody(req);
        // console.log(rawBody);
        const sanitizedBody = sanitizeData(parsedBody);
        console.log("Sanitized: ", sanitizedBody);
        await addNewSighting(sanitizedBody);
        sightingEvents.emit('sighting-added', sanitizedBody);   //emits 'sighting-added' event and passes sanitized body as parameters to the function register to this specific event
        sendResponse(res, 201, 'application/json', JSON.stringify(parsedBody));
    }
    catch (err) {
        sendResponse(res, 400, 'application/json', JSON.stringify({error: err}))
    }
}

export async function handleNews(req, res) {
    res.setStatus = 200;
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive')

    setInterval(() => {
        let randomIndex = Math.floor(Math.random() * stories.length);

        res.write(
            `data: ${JSON.stringify({
                event: 'news-update',
                story: stories[randomIndex]
            })}\n\n`  // here \n\n is very importatn as it tells that the current message has ended
        )
    }, 3000)
}