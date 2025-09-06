#!/usr/bin/env node

import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5173;

// Serve the static HTML file
app.get('/', (req, res) => {
  try {
    const htmlPath = path.join(__dirname, 'index.html');
    if (fs.existsSync(htmlPath)) {
      res.sendFile(htmlPath);
    } else {
      res.status(404).send('Website file not found');
    }
  } catch (error) {
    console.error('Error serving file:', error);
    res.status(500).send('Server error');
  }
});

// Handle all static assets
app.use(express.static(__dirname));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 JJM Technology website is now live at http://0.0.0.0:${PORT}`);
  console.log(`📱 Website ready for viewing`);
});