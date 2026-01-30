import { startups } from '../data/startupsData.js';

export const getAllData = (req, res) => {

    // this api returns all startups data and filters startups based on any query parameters if any
    let filteredData = startups;
    // console.log("IP: ", req.ip);
    // console.log(req.query);
    // console.log(req.params);
    // console.log(req.body);
    // console.log(req.method);

    const { industry, country, continent, is_seeking_funding, has_mvp } = req.query;

    if (industry) {
        filteredData = filteredData.filter(startup => startup.industry.toLowerCase() === industry.toLowerCase())
    }
    if (country) {
        filteredData = filteredData.filter(startup => startup.country.toLowerCase() === country.toLowerCase())
    }
    if (continent) {
        filteredData = filteredData.filter(startup => startup.continent.toLowerCase() === continent.toLowerCase())
    }
    if (is_seeking_funding) {
        filteredData = filteredData.filter(startup => startup.is_seeking_funding === JSON.parse(is_seeking_funding.toLowerCase()))
    }
    if (has_mvp) {
        filteredData = filteredData.filter(startup => startup.has_mvp === JSON.parse(has_mvp.toLowerCase()))
    }

    res.json(filteredData);
}