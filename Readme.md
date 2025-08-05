# Rumahweb Technical Test Project

This prohject is used to text candidate's knowladge about creating API, and JWT Implementation

## Installation

1. Buka project menggunakan code editor,
2. Buka terminal menuju direktori project tersebut, kemudian jalankan

```bash
npm install
```

3. Selanjutnya adalah melakukan setting .env

```bash
# contoh untuk menjalankan dilokal bisa isi
DATABASE_URL= "postgresql://postgres:admin@localhost:6543/postgres?schema=public"
PORT= 8000
JWT_SECRET= #(bebas, se unik mungkin)
```

4. Buka software Docker, buka kembali terminal yang mengarah ke direktori project dan jalankan

```bash
docker compose up
```

maka docker akan dijalankan

5. Untuk menjalankan project buka kembali terminal yang mengarah ke direktori project dan jalankan

```bash
npm run dev
```

6. Pada postman (atau tools consume API lainnya) gunakan http://localhost:{port} misal http://localhost:{8000}

# Postman Documentation

[Postman Documentation](https://documenter.getpostman.com/view/33280052/2sB3BBpX2F)
