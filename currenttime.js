const express = require('express');

const app = express();



app.get('/api/currenttime', (req, res) => {

  const now = new Date();

  const currentTime = {

    year: now.getFullYear(),

    month: String(now.getMonth() + 1).padStart(2, '0'),

    date: now.getDate(),

    hour: now.getHours(),

    minute: String(now.getMinutes()).padStart(2, '0')

  };

  res.setHeader('Content-Type', 'application/json');

  res.send(JSON.stringify(currentTime, null, 0));

});



const PORT = 8080;

app.listen(PORT, () => {

  console.log(`Server running on port ${PORT}`);

});

