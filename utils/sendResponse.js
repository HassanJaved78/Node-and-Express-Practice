
export default function sendResponse(res, statusCode,contentType, payload){
    res.statusCode = statusCode;
    res.contentType = contentType;
    res.end(payload);
}