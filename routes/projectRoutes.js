const express = require('express');
const router = express.Router();
const {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject
} = require('../controllers/projectController');

const { authMiddleware, checkRole } = require('../middleware/auth');

router.get('/', authMiddleware, getProjects);
router.get('/:id', authMiddleware, getProjectById);
router.post('/', authMiddleware, checkRole(['admin', 'manager']), createProject);
router.put('/:id', authMiddleware, checkRole(['admin', 'manager']), updateProject);
router.delete('/:id', authMiddleware, checkRole(['admin']), deleteProject);

module.exports = router;
