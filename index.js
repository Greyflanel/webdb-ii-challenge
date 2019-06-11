const server = require('./api/server.js');
// endpoints here

const port = 3300;
server.listen(port, () => 
console.log(`Listening on Port ${port}`));
