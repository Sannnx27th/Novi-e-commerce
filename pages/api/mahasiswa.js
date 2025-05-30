import fs from 'fs';
import path from 'path';

const dataPath = path.resolve(process.cwd(), 'public', 'data.json');

export default function handler(req, res) {
  const method = req.method;
  let mahasiswa = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

  if (method === 'GET') {
    return res.status(200).json(mahasiswa);
  } else if (method === 'POST') {
    const newMahasiswa = { id: mahasiswa.length + 1, ...req.body };
    mahasiswa.push(newMahasiswa);
    fs.writeFileSync(dataPath, JSON.stringify(mahasiswa, null, 2));
    return res.status(201).json(newMahasiswa);
  } else if (method === 'PUT') {
    const { id, nama, nim, kelas } = req.body;
    const index = mahasiswa.findIndex(m => m.id === id);
    if (index !== -1) {
      mahasiswa[index] = { id, nama, nim, kelas };
      fs.writeFileSync(dataPath, JSON.stringify(mahasiswa, null, 2));
      return res.status(200).json(mahasiswa[index]);
    }
  } else if (method === 'DELETE') {
    mahasiswa = mahasiswa.filter(m => m.id !== req.body.id);
    fs.writeFileSync(dataPath, JSON.stringify(mahasiswa, null, 2));
    return res.status(200).json({ message: "Data berhasil dihapus" });
  } else if (method === 'DELETE') {
  mahasiswa = mahasiswa.filter(m => m.id !== req.body.id);
  fs.writeFileSync(dataPath, JSON.stringify(mahasiswa, null, 2));
  return res.status(200).json({ message: "Data berhasil dihapus" });
} else if (method === 'PUT') {
  const { id, nama, nim, kelas } = req.body;
  const index = mahasiswa.findIndex(m => m.id === id);
  if (index !== -1) {
    mahasiswa[index] = { id, nama, nim, kelas };
    fs.writeFileSync(dataPath, JSON.stringify(mahasiswa, null, 2));
    return res.status(200).json(mahasiswa[index]);
  }
} else if (method === 'PUT') {
  const { id, nama, nim, kelas } = req.body;
  const index = mahasiswa.findIndex(m => m.id === id);
  if (index !== -1) {
    mahasiswa[index] = { id, nama, nim, kelas };
    fs.writeFileSync(dataPath, JSON.stringify(mahasiswa, null, 2));
    return res.status(200).json(mahasiswa[index]);
  }
}

  return res.status(405).json({ message: "Metode tidak diizinkan" });
}