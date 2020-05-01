const axios = require('axios');

const states = [
  'alabama', 'alaska', 'arizona', 'arkansas', 'california', 'colorado', 'connecticut', 'delaware',
  'district of columbia', 'florida', 'georgia', 'guam', 'hawaii', 'idaho', 'illinois', 'indiana',
  'iowa', 'kansas', 'kentucky', 'louisiana', 'maine', 'maryland', 'massachusetts', 'michigan',
  'minnesota', 'mississippi', 'missouri', 'montana', 'nebraska', 'nevada', 'new hampshire',
  'new jersey', 'new mexico', 'new york', 'north carolina', 'north dakota',
  'northern mariana islands', 'ohio', 'oklahoma', 'oregon', 'pennsylvania', 'puerto rico',
  'rhode island', 'south carolina', 'south dakota', 'tennessee', 'texas', 'utah', 'vermont',
  'virginia', 'washington', 'west virginia', 'wisconsin', 'wyoming'
];

exports.handler = async function (context, event, callback) {
  const response = {};
  const location = event.location.trim();
  const states_or_countries = states.includes(location.toLowerCase()) ? 'states' : 'countries';
  try {
    const res = await axios.get(`https://corona.lmao.ninja/v2/${states_or_countries}/${location}`);
    const { cases, deaths } = res.data;
    response.message = `There have been ${Number(cases).toLocaleString()} cases and ` +
                       `${Number(deaths).toLocaleString()} deaths in ${location}.`;
  } catch {
    response.message = `Error retrieving data for ${location}. Please send either a state or country.`;
  }

  callback(null, response);
};
