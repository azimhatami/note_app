const { Router } = require('express');
const { addNote, updateNote, getNotes, deleteNote, getNote } = require('../controllers/note');
const {  authenticateToken } = require('../middleware/auth');


const router = Router();

router.get('/notes', authenticateToken, getNotes)
router.get('/notes/:noteId', authenticateToken, getNote)
router.post('/add-note', authenticateToken, addNote)
router.put('/update-note/:noteId', authenticateToken, updateNote)
router.delete('/delete-note/:noteId', authenticateToken, deleteNote)
// router.get('/notes/:noteId', authenticateToken, getNoteByID)


module.exports = {
  noteRoutes: router
}
