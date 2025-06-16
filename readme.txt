Gemma Chat - AI Assistant menggunakan Model gemma3:1b dari Ollama

Deskripsi:
Proyek ini membangun sebuah UI chatbot berbasis web menggunakan Python Flask. Model AI yang digunakan adalah "gemma3:1b" yang dijalankan melalui Ollama CLI.

Flow Code:
1. Pengguna membuka halaman web dan mengetik pertanyaan di kolom input.
2. Pesan dikirim ke server Flask via HTTP POST.
3. Server menjalankan perintah `ollama run gemma3:1b` melalui subprocess.
4. Hasil dari AI ditampilkan kembali ke pengguna dalam chat bubble.

Langkah Instalasi:
1. Install Python dan pip
2. Install Flask:
   pip install -r requirements.txt
3. Install dan jalankan Ollama: https://ollama.com
4. Download model:
   ollama pull gemma3:1b
5. Jalankan aplikasi:
   python app.py
6. Buka browser di http://127.0.0.1:5000/

Catatan:
- Pastikan `ollama` CLI sudah bisa dijalankan dari terminal sebelum mencoba project.
