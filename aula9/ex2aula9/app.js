const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// criando POST route e outras coisinhas
const tasks = [];

app.post('/tasks', (req, res) => {
  const { title, description, dueDate } = req.body;

  if (!title ||!description ||!dueDate) {
    return res.status(400).send({ error: 'Título, descrição e data de vencimento são obrigatórios.' });
  }

  const newTask = { id: Date.now(), title, description, dueDate, completed: false };
  tasks.push(newTask);

  res.send(newTask);
});

//Criando GET e outros

app.get('/tasks', (req, res) => {
    res.send(tasks);
  });

  // Criando PUT route e outras coisas

  app.put('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const taskIndex = tasks.findIndex((task) => task.id === Number(id));
  
    if (taskIndex === -1) {
      return res.status(404).send({ error: 'Tarefa não encontrada.' });
    }
  
    const { title, description, dueDate, completed } = req.body;
  
    if (!title ||!description ||!dueDate || completed === undefined) {
      return res.status(400).send({ error: 'Title, description, dueDate, and completed are required.' });
    }
  
    tasks[taskIndex] = {...tasks[taskIndex], title, description, dueDate, completed };
  
    res.send(tasks[taskIndex]);
  });

  // Criando DELETE e outros

  app.delete('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const taskIndex = tasks.findIndex((task) => task.id === Number(id));
  
    if (taskIndex === -1) {
      return res.status(404).send({ error: 'Tarefa não encontrada.' });
    }
  
    tasks.splice(taskIndex, 1);
  
    res.send({ message: 'Tarefa excluída com sucesso.' });
  });

  // Validação de dados

  function validateTask(req, res, next) {
    const { title, description, dueDate, completed } = req.body;
  
    if (!title ||!description ||!dueDate || completed === undefined) {
      return res.status(400).send({ error: 'Título, descrição, data de vencimento e preenchimento são obrigatórios' });
    }
  
    next();
  }
  
  app.post('/tasks', validateTask, (req, res) => {
    //...
  });
  
  app.put('/tasks/:id', validateTask, (req, res) => {
    //...
  });
  