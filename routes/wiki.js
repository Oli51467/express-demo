// wiki.js - 维基路由模块

const express = require('express');
const router = express.Router();

// 主页路由
router.get('/', (req, res) => {
  res.send('维基主页');
});

// “关于页面”路由
router.post('/about', (req, res) => {
  res.send('关于此维基');
});

router.get('/:userId', (req, res) => {
    // 通过 req.params.userId 访问 userId
    // 通过 req.params.bookId 访问 bookId
    res.send(req.params);
  });
  

module.exports = router;
