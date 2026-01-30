import getData from "./getdata.js";
import path from 'node:path';
import fs from 'fs/promises'

export default async function addNewSighting(newSighting) {
    try{
        const sighting = await getData();
        sighting.push(newSighting);

        // relative path
        const filePath = path.join('data', 'data.json');
        
        await fs.writeFile(
            filePath, 
            JSON.stringify(sighting, null, 2),  // here 2 is for indentation
            "utf8"
        );
    }
    catch(err) {
        throw new Error(err);
    }
}