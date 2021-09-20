const path = require('path');
const router = require('express').Router();

//SEND INDEX.HTML TO SERVER ROOT
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});
//SEND ANIMALS.HTML TO SERVER /ANIMALS
router.get('/animals', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/animals.html'));
});

//SEND ZOOKEEPERS.HTML TO SERVER /ZOOKEEPERS
router.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/zookeepers.html'));
});

//HANDLE WILDCARD ROUTES
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;