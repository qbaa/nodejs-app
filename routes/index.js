const express = require('express');
const router = express.Router();

const PagersController = require('../controllers/PagesController');
const ApplicationsController = require('../controllers/ApplicationsController');

router.get('/', PagersController.home);

router.post('/applications', ApplicationsController.store);

router.get('/result', PagersController.result);

module.exports = router;