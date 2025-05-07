const userModel = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const registerUser = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const isUser = await userModel.findOne({ email: email });

    if (isUser) return res.json({
      message: 'User already exists'
    });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      fullName,
      email,
      password: hashedPassword
    });

    const accessToken = jwt.sign({userId: user._id}, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: '1d'
    });

    return res.status(201).json({
      user: {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        createdAt: user.created_at
      },
      accessToken,
      message: 'Registration Successful'
    });

  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({
      message: 'Error registering user'
    })
  }
}


const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email and password are required'
      });
    }

    const user = await userModel.findOne({ email }).select('+password');
    if (!user) {
      return res.status(401).json({ // 401 Unauthorized
        success: false,
        message: 'Invalid credentials' 
      });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    const accessToken = jwt.sign(
      { userId: user._id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '1d' }
    );

    return res.json({
      success: true,
      data: {
        userId: user._id,
        email: user.email,
        accessToken
      },
      message: 'Login successful'
    });

  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({
      success: false,
      message: 'An error occurred during login',
    });
  }
};


module.exports = {
  registerUser,
  loginUser
}
