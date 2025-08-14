const noteModel = require('../models/note');


// Add note
const addNote = async (req, res) => {
  try {
    const { title, content, tags, isPinned } = req.body;
    const { userId } = req.user;

    if (!title || !content) {
      return res.status(400).json({ message: 'Title and content are required' });
    }

    const note = await noteModel.create({
      userId,
      title,
      content,
      tags: tags || [],
      isPinned

    });

    return res.status(201).json({
      note,
      message: 'Note added successfully'
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error',
      error: error.message
    });
  }
};

// Update note
const updateNote = async (req, res) => {
  try {
    const { title, content, tags, isPinned } = req.body;
    const { noteId } = req.params;
    const { userId } = req.user;

    if (!title && !content && !tags) {
      return res.status(400).json({
        message: 'No changes provided'
      });
    }

    const note = await noteModel.findOne({_id: noteId, userId: userId});

    if (!note) {
      return res.status(404).json({
        message: 'Note not found'
      });
    }

    if (note) note.title = title;
    if (content) note.content = content;
    if (tags) note.tags = tags;
    if (isPinned) note.isPinned = isPinned;

    await note.save();

    return res.json({
      note,
      message: 'Note updated successfully'
    });

  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error',
      error: error.message
    });
  }
};

// Get all notes
const getNotes = async (req, res) => {
  try {
    const { userId } = req.user;

    const notes = await noteModel.find({ userId: userId }).sort({ isPinned: -1 });

    return res.status(200).json({
      notes,
      message: 'All notes retrieved successfully'
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error'
    });
  }
};

// Get note
const getNote = async (req, res) => {
  try {
    const { noteId } = req.params;
    const { userId } = req.user;

    const note = await noteModel.findOne({ _id: noteId, userId: userId });
    
    if (!note) return res.status(404).json({ message: 'Note not found' });

    return res.status(200).json({
      note,
      message: 'Note retrieved successfully'
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Internal Server Error',
      error: error.message
    });
  }
};

// Delete note
const deleteNote = async (req, res) => {
  try {
    const { noteId } = req.params;
    const { userId } = req.user;

    const note = await noteModel.findOne({ _id: noteId, userId: userId });
    
    if (!note) return res.status(404).json({ message: 'Note not found' });
    await noteModel.deleteOne({ _id: noteId, userId: userId });

    return res.status(200).json({
      message: 'Note deleted successfully'
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error',
      error: error.message
    });
  }
};



module.exports = {
  addNote,
  updateNote,
  getNotes,
  getNote,
  deleteNote
};
