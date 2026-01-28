import sanitizeHtml from 'sanitize-html';

export default function sanitizeData(data) {
    const sanitizedData = {};

    for (const {key, value} of Object.entries(data)) {
        if(typeof value === 'string') {
            sanitizeData[key] = sanitizeHtml(
                value, 
                {
                    allowedTags: ['b'], allowedAttributes: []
                }
            )
        }
        else {
            sanitizeData[key] = value;
        }
    }

    return sanitizeData;
}