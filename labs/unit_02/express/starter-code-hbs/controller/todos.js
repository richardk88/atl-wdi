const express = require('express');
const router = express.Router();
const data = require('../data')

/* INDEX TODOS */
router.get('/', function(req,res) {
  res.render('todos/index', {
    todos: data.seededTodos
  });
});

//* NEW TODO */
router.get('/new', (req, res) => {
  res.render('todos/new');
})

/* SHOW TODO */
router.get('/:id', (req, res) => {
  const id = req.params.id;
  res.render('todos/show',{
    todo: data.seededTodos[id]
  });
})

/* POST TODO */
router.post('/', (req,res) => {
  console.log(req.body);
  const newTodo = {
    description: req.body.description,
    urgent: req.body.urgent
  };
  data.seededTodos.push(newTodo);
  res.redirect('/todos')
});

module.exports = router;