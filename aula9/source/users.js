app.post('/users', (req, res) => {
    const newUser = req.body;
    // Adicione o novo usuário a um array ou banco de dados
    users.push(newUser);
    res.status(201).json(newUser);
  });

  app.get('/users', (req, res) => {
    res.json(users);
  });

  app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    if (!user) {
      return res.status(404).json({ message: 'Usuario não existe' });
    }
    res.json(user);
  });

  app.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const updatedUser = req.body;
    const index = users.findIndex(u => u.id === userId);
    if (index === -1) {
      return res.status(404).json({ message: 'Usuario não existe' });
    }
    users[index] = updatedUser;
    res.json(updatedUser);
  });

  app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const index = users.findIndex(u => u.id === userId);
    if (index === -1) {
      return res.status(404).json({ message: 'Usuario não existe' });
    }
    users.splice(index, 1);
    res.json({ message: 'Usuario destruido' });
  });