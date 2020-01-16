const express = require('express');
const router = express.Router();
const { Student, Campus } = require('../database/models');

/* STEP A;

With just the associations, the data this endpoint gives back is shaped like so:

[
  {
    "id": 1,
    "firstName": "Kyrie",
    "lastName": "Irving",
    "createdAt": "2020-01-16T18:19:46.141Z",
    "updatedAt": "2020-01-16T18:19:46.141Z",
    "campusId": null
  },
  {
    "id": 2,
    "firstName": "LeBron",
    "lastName": "James",
    "createdAt": "2020-01-16T18:19:46.146Z",
    "updatedAt": "2020-01-16T18:19:46.146Z",
    "campusId": null
  },
  {
    "id": 3,
    "firstName": "Luka",
    "lastName": "Doncic",
    "createdAt": "2020-01-16T18:19:46.148Z",
    "updatedAt": "2020-01-16T18:19:46.148Z",
    "campusId": null
  }
]

*/

/* STEP B;

With the addition of the "include property in the findAll() and the associated Model", PRIOR TO MODIFYING THE SEED FILE, this is how the data looks:

[
  {
    "id": 3,
    "firstName": "Luka",
    "lastName": "Doncic",
    "createdAt": "2020-01-16T18:35:59.275Z",
    "updatedAt": "2020-01-16T18:35:59.275Z",
    "campusId": null,
    "campus": null
  },
  {
    "id": 2,
    "firstName": "LeBron",
    "lastName": "James",
    "createdAt": "2020-01-16T18:35:59.275Z",
    "updatedAt": "2020-01-16T18:35:59.275Z",
    "campusId": null,
    "campus": null
  },
  {
    "id": 1,
    "firstName": "Kyrie",
    "lastName": "Irving",
    "createdAt": "2020-01-16T18:35:59.275Z",
    "updatedAt": "2020-01-16T18:35:59.275Z",
    "campusId": null,
    "campus": null
  }
]

*/

/* STEP C;

With the addition of the "include property in the findAll() and the associated Model", AFTER MODIFYING THE SEED FILE, this is how the data looks:

[
  {
    "id": 3,
    "firstName": "Luka",
    "lastName": "Doncic",
    "createdAt": "2020-01-16T18:52:39.431Z",
    "updatedAt": "2020-01-16T18:52:39.451Z",
    "campusId": 1,
    "campus": {
      "id": 1,
      "name": "Hunter College",
      "createdAt": "2020-01-16T18:52:39.419Z",
      "updatedAt": "2020-01-16T18:52:39.419Z"
    }
  },
  {
    "id": 2,
    "firstName": "LeBron",
    "lastName": "James",
    "createdAt": "2020-01-16T18:52:39.430Z",
    "updatedAt": "2020-01-16T18:52:39.448Z",
    "campusId": 1,
    "campus": {
      "id": 1,
      "name": "Hunter College",
      "createdAt": "2020-01-16T18:52:39.419Z",
      "updatedAt": "2020-01-16T18:52:39.419Z"
    }
  },
  {
    "id": 1,
    "firstName": "Kyrie",
    "lastName": "Irving",
    "createdAt": "2020-01-16T18:52:39.430Z",
    "updatedAt": "2020-01-16T18:52:39.442Z",
    "campusId": 1,
    "campus": {
      "id": 1,
      "name": "Hunter College",
      "createdAt": "2020-01-16T18:52:39.419Z",
      "updatedAt": "2020-01-16T18:52:39.419Z"
    }
  }
]

*/

router.get('/', function(req, res, next) {
  Student.findAll({include: [Campus]})
    .then(students => res.json(students))
    .catch(err => console.log(err))
});

// //fetch students
// router.get('/students', function(req, res, next) {
  
// });

// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;
