import path from 'node:path';

export function getContentType(filePath) {
   
  const extension = path.extname(filePath);
  console.log(extension);

  const types = {
    ".js": "text/javascript",
    ".css": "text/css",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".gif": "image/gif",
    ".svg": "image/svg+xml"
  }

  return types[extension.toLowerCase()] || "text/html"
} 