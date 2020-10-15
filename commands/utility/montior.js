const JsonDB = require('json-database.js');
 
const db = new JsonDB({
    file: '../../uptime.json', /* Type there database file path */
    table: 'Montior-links' /* Users is example, type one you want */
});
 
 