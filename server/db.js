const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

const DB_PATH = path.join(__dirname, 'data.json');

function load() {
  if (!fs.existsSync(DB_PATH)) {
    return { users: [], galeria: [], membros: [], projetos: [] };
  }
  return JSON.parse(fs.readFileSync(DB_PATH, 'utf8'));
}

function save(data) {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

function nextId(arr) {
  return arr.length === 0 ? 1 : Math.max(...arr.map(i => i.id)) + 1;
}

// Cria admin padrão se não existir
const initial = load();
if (!initial.users.find(u => u.email === 'admin@fraternidade.com')) {
  initial.users.push({
    id: 1,
    email: 'admin@fraternidade.com',
    password_hash: bcrypt.hashSync('admin123', 10),
  });
  save(initial);
  console.log('Usuário admin criado: admin@fraternidade.com / admin123');
  console.log('IMPORTANTE: Troque a senha após o primeiro acesso!');
}

// ── Users ──────────────────────────────────────────────
function getUserByEmail(email) {
  return load().users.find(u => u.email === email);
}

// ── Galeria ────────────────────────────────────────────
function getGaleria() {
  return load().galeria.sort((a, b) => b.createdAt - a.createdAt);
}

function addGaleria(item) {
  const data = load();
  const novo = { ...item, id: nextId(data.galeria), createdAt: Date.now() };
  data.galeria.push(novo);
  save(data);
  return novo;
}

function deleteGaleria(id) {
  const data = load();
  const item = data.galeria.find(i => i.id === id);
  if (!item) return null;
  data.galeria = data.galeria.filter(i => i.id !== id);
  save(data);
  return item;
}

// ── Membros ────────────────────────────────────────────
function getMembros() {
  return load().membros.sort((a, b) => b.createdAt - a.createdAt);
}

function addMembro(item) {
  const data = load();
  const novo = { ...item, id: nextId(data.membros), createdAt: Date.now() };
  data.membros.push(novo);
  save(data);
  return novo;
}

function deleteMembro(id) {
  const data = load();
  const item = data.membros.find(i => i.id === id);
  if (!item) return null;
  data.membros = data.membros.filter(i => i.id !== id);
  save(data);
  return item;
}

// ── Projetos ───────────────────────────────────────────
function getProjetos() {
  return load().projetos.sort((a, b) => b.createdAt - a.createdAt);
}

function addProjeto(item) {
  const data = load();
  const novo = { ...item, id: nextId(data.projetos), createdAt: Date.now() };
  data.projetos.push(novo);
  save(data);
  return novo;
}

function deleteProjeto(id) {
  const data = load();
  const item = data.projetos.find(i => i.id === id);
  if (!item) return null;
  data.projetos = data.projetos.filter(i => i.id !== id);
  save(data);
  return item;
}

module.exports = {
  getUserByEmail,
  getGaleria, addGaleria, deleteGaleria,
  getMembros, addMembro, deleteMembro,
  getProjetos, addProjeto, deleteProjeto,
};
