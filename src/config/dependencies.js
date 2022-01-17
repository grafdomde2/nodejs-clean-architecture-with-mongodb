// we can add production dependencies, test dependencies, 
// end to end testing dependencies, playing around dependencies,
// Tejan dependencies accourind to overall our environments
const useCases = require('../useCases');
//const repositories = require('../frameworks/repositories/db');
const repositories = require('../frameworks/repositories/mongo');
module.exports = {
    useCases,
    ...repositories
}