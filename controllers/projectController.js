const Project = require('../models/project');

const createProject = async (req, res) => {
  try {
    const { title, desc, icon, tags } = req.body;

    const project = await Project.create({
      title,
      desc,
      icon,
      tags,
      createdBy: req.user._id
    });

    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ error: 'Error creating project' });
  }
};

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().populate('createdBy', 'name family');
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching projects' });
  }
};

const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ error: 'Project not found' });
    res.json(project);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching project' });
  }
};

const updateProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ error: 'Project not found' });

    const isOwner = project.createdBy.toString() === req.user._id.toString();
    const isAdmin = req.user.role.name === 'admin';
    if (!isOwner && !isAdmin) {
      return res.status(403).json({ error: 'Access denied' });
    }

    const updates = req.body;
    Object.assign(project, updates);
    await project.save();

    res.json(project);
  } catch (err) {
    res.status(500).json({ error: 'Error updating project' });
  }
};

const deleteProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ error: 'Project not found' });

    if (req.user.role.name !== 'admin') {
      return res.status(403).json({ error: 'Only admin can delete' });
    }

    await project.remove();
    res.json({ message: 'Project deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Error deleting project' });
  }
};

module.exports = {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject
};
