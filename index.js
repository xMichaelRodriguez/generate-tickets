const express = require('express');
const path = require('path');
const app = express();
const puppeteer = require('puppeteer');
const fs = require('fs');
const getInfo = require('./template');

const productos = [
  { name: 'GALLETAS PRINCIPE', cantidad: 2, gravada: 3 },
  { name: 'GALLETAS PICNIC', cantidad: 2, gravada: 3 },
  { name: 'COCA COLA', cantidad: 2, gravada: 2 },
  { name: 'YOGURT YESS', cantidad: 2, gravada: 1.5 },
];
const generatePDF = async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  // Crear un archivo temporal con el contenido del template HTML

  // Leer el contenido del archivo HTML
  const htmlContent = getInfo(productos);
  // Establecer el contenido HTML en la página
  await page.setContent(htmlContent);
  // Generar el PDF a partir del contenido de la página
  const pdfBuffer = await page.pdf({ format: 'A4' });
  await browser.close();
  return pdfBuffer;
  // Eliminar el archivo temporal
  //   fs.unlinkSync(tempFilePath);
};
app.get('/', async (req, res) => {
  const buffer = await generatePDF();
  res.contentType('application/pdf');
  res.send(buffer);
});

app.listen(3000, () => {
  console.log('http://localhost:3000/');
});
