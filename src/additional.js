const express = require("express");

const PORT = 8083;

const app = express();

app.use("/", (req, res, next) => {
  const result = {
    value: 'ok'
  }

  res.json(result)

  next()
});

app.listen(PORT, () => {
  console.log(`Server has been started on port: ${PORT}`);
});
