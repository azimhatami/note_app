const { Router } = require('express');
const { addNote, updateNote, getNotes, deleteNote } = require('../controllers/note');
const {  authenticateToken } = require('../middleware/auth');


const router = Router();

router.get('/notes', authenticateToken, getNotes)
router.post('/add-note', authenticateToken, addNote)
router.put('/update-note/:noteId', authenticateToken, updateNote)
router.delete('/delete-note/:noteId', authenticateToken, deleteNote)


module.exports = {
  noteRoutes: router
}
