const express = require('express');

const router = express.Router();

router.get('/api/v1/TaskCatalog', (req, res) => {
  const okResponse = [
    // {
    //   id: 4,
    //   markerId: 1,
    //   required: true,
    //   priority: 1
    // },
    // {
    //   id: 1,
    //   markerId: 2,
    //   required: true,
    //   priority: 2
    // },
    {
      id: 3,
      markerId: 38,
      required: false,
      priority: 4
    },
    {
      id: 2,
      markerId: 2,
      required: true,
      priority: 3
    },
    // {
    //   id: 5,
    //   markerId: 5,
    //   required: false,
    //   priority: 5
    // },
    // {
    //   id: 6,
    //   markerId: 6,
    //   required: false,
    //   priority: 6
    // }
  ]
  
  res.json(okResponse);
  // res.json(tasks);
});

const tasks = JSON.parse("[{\"id\":4,\"markerId\":1,\"required\":true,\"priority\":1},{\"id\":1,\"markerId\":2,\"required\":true,\"priority\":2},{\"id\":3,\"markerId\":3,\"required\":false,\"priority\":3},{\"id\":2,\"markerId\":4,\"required\":false,\"priority\":4},{\"id\":5,\"markerId\":5,\"required\":false,\"priority\":5},{\"id\":6,\"markerId\":6,\"required\":false,\"priority\":6},{\"id\":7,\"markerId\":38,\"required\":false,\"priority\":7}]")

module.exports = router;
