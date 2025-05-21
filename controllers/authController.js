const User = require('../models/user');
const Role = require('../models/role');
const { generateToken } = require('../utils/jwt');

const register = async (req, res) => {
  try {
    const { name, family, email, phone } = req.body;

    if (!phone) return res.status(400).json({ error: 'Phone is required' });

    const existing = await User.findOne({ phone });
    if (existing) return res.status(409).json({ error: 'Phone already registered' });

    const role = await Role.findOne({ name: 'user' });
    if (!role) return res.status(500).json({ error: 'Default role not found' });

    const user = await User.create({
      name, family, email, phone, role: role._id
    });

    const token = generateToken(user);
    return res.status(201).json({ token, user: { id: user._id, phone: user.phone } });
  } catch (err) {
    return res.status(500).json({ error: 'Server error' });
  }
};

const login = async (req, res) => {
  try {
    const { phone } = req.body;
    if (!phone) return res.status(400).json({ error: 'Phone is required' });

    const user = await User.findOne({ phone }).populate('role');
    if (!user) return res.status(404).json({ error: 'User not found' });

    const token = generateToken(user);
    return res.json({ token, user: { id: user._id, role: user.role.name } });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { register, login };
