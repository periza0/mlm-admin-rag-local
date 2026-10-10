const bcrypt = require("bcryptjs");
require("dotenv").config();

const connectDB = require("./config/db");
const Admin = require("./models/Admin");

async function createAdmin() {
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    throw new Error("ADMIN_PASSWORD must be set in backend/.env");
  }

  await connectDB();

  const hashedPassword = await bcrypt.hash(adminPassword, 10);

  await Admin.create({
    name: "Maninder",
    password: hashedPassword,
  });

  console.log("Admin Created");

  process.exit();
}

createAdmin();
