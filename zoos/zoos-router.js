
const db = require('./zoo-model')

const router = require('express').Router();

router.get('/', (req, res) => {
  // get the zoos from the database
 db.find()
  .then(zoos => {
      res.status(200).json(zoos);
  })
  .catch(error => {
      res.status(500).json(error);
  });
});

router.get('/:id', (req, res) => {
 db.findById(req.params.id)
  .then(zoos => {
    res.json(zoos)
  })
  .catch(error => {
    res.status(200).json(error)
  })
});

router.post('/', (req, res) => {
   db.add(req.body)
     .then(zoo => {
       res.status(201).json(zoo)
     })
    .catch(err => {
      res.status(500).json(err);
    });
  })

router.put('/:id', (req, res) => {
 const { name } = req.body;
 const { id } = req.params;
 if(!name) {
   res.status(422).json({ message: 'name field is required.'});
 }
  db.update(id, { name })
  .then(zoo => {
    if(zoo) {
      res.json(zoo);
    } else {
      res.status(404).json({ message: 'zoo not found.'});
    }
  })
  .catch(error => {
    res.status(500).json(error)
  })
});

router.delete('/:id', (req, res) => {
 db.remove(req.params.id) 
 .then(count => {
   if(count > 0) {
     res.status(204).end();
   }
 })
 .catch(error => {
   res.status(404).json({ message: 'zoo not found.'})
 })
});

module.exports = router;
