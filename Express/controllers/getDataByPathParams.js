import { startups } from '../data/startupsData.js';

export const getDataByPathParams = (req, res) => {
    // ** The functionality **
    // Get all startups in a given country via api/country/<country name>
    // Get all startups in a given continent via api/continent/<continent name>
    // Get all startups in a given industry via api/industry/<industry name></industry>
    // These should work:
        //   api/country/india
        //   api/continent/europe 
        //   api/industry/ai

    // console.log(req.params);  // { field: 'country', term: 'india' }
    const {field, term} = req.params;

    const allowedFields = ['country', 'continent', 'industry']

    if (!allowedFields.includes(field)) {
        return res.status(400).json({message: "Search field not allowed. Please use only 'country', 'continent', 'industry'" })
    }

    let filteredData = startups.filter(startup => startup[field].toLowerCase() === term.toLowerCase());

    res.json(filteredData);
}