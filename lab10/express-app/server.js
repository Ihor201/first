const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Статичні файли з папки public
app.use(express.static(path.join(__dirname, 'public')));

// Маршрут: головна сторінка
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Маршрут: Float-макет
app.get('/float', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'SobkoLab10-1.htm'));
});

// Маршрут: Flexbox-макет
app.get('/flex', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'SobkoLab10-2.htm'));
});

// Маршрут: Grid-макет
app.get('/grid', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'SobkoLab10-3.htm'));
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущено: http://localhost:${PORT}`);
  console.log('Доступні маршрути:');
  console.log(`  http://localhost:${PORT}/       — головна`);
  console.log(`  http://localhost:${PORT}/float  — Float-макет`);
  console.log(`  http://localhost:${PORT}/flex   — Flexbox-макет`);
  console.log(`  http://localhost:${PORT}/grid   — Grid-макет`);
});
