const express = require('express');
const router = express.Router();
const { Student, Campus } = require('../database/models');

/* IN THIS COMMIT, THE DATA THIS ENDPOINT WILL PROVIDE WILL LOOK LIKE SO:

[
  {
    "id": 1,
    "name": "Hunter College",
    "createdAt": "2020-01-16T19:07:26.525Z",
    "updatedAt": "2020-01-16T19:07:26.525Z",
    "students": [
      {
        "id": 3,
        "firstName": "Luka",
        "lastName": "Doncic",
        "createdAt": "2020-01-16T19:07:26.539Z",
        "updatedAt": "2020-01-16T19:07:26.574Z",
        "campusId": 1
      },
      {
        "id": 2,
        "firstName": "LeBron",
        "lastName": "James",
        "createdAt": "2020-01-16T19:07:26.539Z",
        "updatedAt": "2020-01-16T19:07:26.569Z",
        "campusId": 1
      },
      {
        "id": 1,
        "firstName": "Kyrie",
        "lastName": "Irving",
        "createdAt": "2020-01-16T19:07:26.538Z",
        "updatedAt": "2020-01-16T19:07:26.564Z",
        "campusId": 1
      }
    ]
  }
]

*/

router.get('/', function(req, res, next) {
  Campus.findAll({include: [Student]})
    .then(campuses => res.json(campuses))
    .catch(err => console.log(err))
});

// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;
