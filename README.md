
# 💬 Gemma Chat - AI Assistant

Gemma Chat adalah antarmuka chatbot berbasis web yang menggunakan model AI `gemma3:1b` dari Ollama untuk merespons pertanyaan pengguna secara real-time.

---

## 📌 Fitur
- UI chat interaktif berbasis web
- Integrasi dengan model AI lokal `gemma3:1b` melalui CLI `ollama`
- Respon langsung dalam bentuk percakapan manusia

---

## 🧠 Teknologi yang Digunakan
- Python 3
- Flask
- HTML + CSS (Frontend)
- [Ollama](https://ollama.com) untuk menjalankan model AI `gemma3:1b`

---

## 📁 Struktur Folder

```
gemma_chat_ai_project/
│
├── app.py                  # Backend Python (Flask)
├── requirements.txt        # Daftar dependencies
├── readme.md               # Dokumentasi project (ini file-nya)
└── templates/
    └── index.html          # UI Web untuk chat
```

---

## 🚀 Cara Instalasi & Menjalankan

### 1. Clone Repository
```bash
git clone <repository-url>
cd gemma_chat_ai_project
```

### 2. Setup Virtual Environment
```bash
python3 -m venv venv
source venv/bin/activate      # Linux/macOS
# atau
venv\Scripts\activate         # Windows
```

### 3. Install Dependencies
```bash
pip install -r requirements.txt
```

### 4. Install Ollama dan Model
- Download dan install Ollama: [https://ollama.com](https://ollama.com)
- Jalankan perintah berikut untuk mengunduh model:
```bash
ollama pull gemma3:1b
```

### 5. Jalankan Aplikasi Flask
```bash
python app.py
```
- Buka browser dan kunjungi: `http://127.0.0.1:5000/`

---

## 🧪 Contoh Penggunaan

1. Ketik pertanyaan seperti:
   > Apa itu machine learning?

2. Bot akan merespons menggunakan AI model:
   > Machine learning adalah cabang dari kecerdasan buatan...

---

## ⚠️ Catatan
- Pastikan perintah `ollama run gemma3:1b` bisa dijalankan di terminal.
- Model `gemma3:1b` harus sudah tersedia sebelum memulai aplikasi Flask.

---

## 📃 Lisensi
Project ini dikembangkan untuk keperluan tugas integrasi AI Model. Bebas digunakan untuk pembelajaran dan modifikasi.
