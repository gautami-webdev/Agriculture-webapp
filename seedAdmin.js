require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const schema = new mongoose.Schema({
  name: String, email: { type: String, unique: true }, password: String,
  role: { type: String, default: 'admin' }, phone: String, location: String
}, { timestamps: true });
const User = mongoose.model('User', schema);

(async () => {
  const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/agriconnect_modern';
  await mongoose.connect(uri);
  const email = (process.env.ADMIN_EMAIL || 'admin@agriconnect.com').toLowerCase();
  const password = process.env.ADMIN_PASSWORD || 'Admin123!';
  let user = await User.findOne({ email });
  if (user) {
    user.role = 'admin';
    user.password = await bcrypt.hash(password, 10);
    user.name = process.env.ADMIN_NAME || 'AgriConnect Admin';
    await user.save();
    console.log('Existing account promoted to admin and password reset.');
  } else {
    await User.create({
      name: process.env.ADMIN_NAME || 'AgriConnect Admin',
      email, password: await bcrypt.hash(password, 10), role: 'admin'
    });
    console.log('Admin account created.');
  }
  console.log(`Admin email: ${email}`);
  console.log(`Admin password: ${password}`);
  await mongoose.disconnect();
})().catch(e => { console.error(e); process.exit(1); });
