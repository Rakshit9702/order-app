const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = 5000;
const FILE_PATH = "./emails.json";

app.use(express.json());
app.use(cors());

// Load existing emails
const loadEmails = () => {
  if (!fs.existsSync(FILE_PATH)) return [];
  return JSON.parse(fs.readFileSync(FILE_PATH, "utf8"));
};

// Save emails to JSON file
const saveEmails = (emails) => {
  fs.writeFileSync(FILE_PATH, JSON.stringify(emails, null, 2), "utf8");
};

// API to store email
app.post("/api/subscribe", (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: "Email is required" });

  let emails = loadEmails();
  
  // Prevent duplicate emails
  if (emails.includes(email)) {
    return res.status(400).json({ message: "Email already subscribed" });
  }

  emails.push(email);
  saveEmails(emails);

  res.json({ message: "Email saved successfully" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
