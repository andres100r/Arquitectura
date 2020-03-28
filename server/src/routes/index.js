const express = require('express');
const router = express.Router();
const Task = require('../model/task');

router.get('/',  (req, res) => {
    
    res.render('index');
  });

  router.post('/add',  (req, res) => {
     console.log(new Task(req.body));
      console.log(req.body);
    res.send('recibido');
  });
  

module.exports = router;