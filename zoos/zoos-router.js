const router = require('express').Router();

router.get('/', (req, res) => {
  // get the zoos from the database
  res.send('Write code to retrieve all zoos');
});

router.get('/:id', (req, res) => {
  // retrieve a zoo by id
  res.send('Write code to retrieve a zoo by id');
});

router.post('/', (req, res) => {
  // add a zoo to the database
  res.send('Write code to add a zoo');
});

router.put('/:id', (req, res) => {
  // update zoos
  res.send('Write code to modify a zoo');
});

router.delete('/:id', (req, res) => {
  // remove zoos (inactivate the zoo)
  res.send('Write code to remove a zoo');
});

module.exports = router;
