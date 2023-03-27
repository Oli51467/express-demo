var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/cool', function (req, res, next) {
  res.send('cool');
  // var mysql = require('mysql')
  // var connection = mysql.createConnection({
  //   host: '39.98.80.11',
  //   user: 'hmis',
  //   password: 'Hmis1234.',
  //   database: 'gobot'
  // })

  // connection.connect()

  // connection.query('SELECT * from user', function (err, rows, fields) {
  //   if (err) throw err

  //   console.log('The solution is: ', rows[0])
  // })
  // connection.end()
});

module.exports = router;
