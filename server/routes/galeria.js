const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const db = require('../db');
const requireAuth = require('../middleware/auth');

const router = express.Router();

const uploadDir = path.join(__dirname, '../uploads/galeria');
fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: uploadDir,
  filename: (req, file, cb) => cb(null, `${Date.now()}_${file.originalname}`),
});
const upload = multer({ storage });

router.get('/', (req, res) => {
  res.json(db.getGaleria());
});

router.post('/', requireAuth, upload.single('imagem'), (req, res) => {
  const { titulo, descricao = '', categoria = 'Geral' } = req.body;
  if (!titulo || !req.file) {
    return res.status(400).json({ error: 'Título e imagem são obrigatórios.' });
  }
  const item = db.addGaleria({
    titulo,
    descricao,
    categoria,
    imageUrl: `/uploads/galeria/${req.file.filename}`,
  });
  res.status(201).json(item);
});

router.delete('/:id', requireAuth, (req, res) => {
  const item = db.deleteGaleria(Number(req.params.id));
  if (!item) return res.status(404).json({ error: 'Não encontrado.' });

  if (item.imageUrl) {
    try { fs.unlinkSync(path.join(__dirname, '..', item.imageUrl)); } catch { /* já removido */ }
  }

  res.json({ ok: true });
});

module.exports = router;
