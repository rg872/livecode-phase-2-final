# livecode-phase-2-final

Disini saya membuat Web SPA untuk review buku. Setiap member dapat mengupload data buku beserta gambar dan me-review buku yang telah di upload (bisa punya dia sendiri dan punya orang lain)

## Fitur yang di sediakan

* Upload buku beserta gambar
* Bisa mengubah data buku yang di upload (tidak dapat mengubah data buku orang lain)
* Bisa hapus data buku (tidak bisa hapus data buku orang lain)
* Me-review buku
* Bisa memberikan rating
* Bisa mengubah dan menghapus ulasan (hanya ulasan orang tsb)

## Cara menggunakan

1. Buka [link ini untuk mengakses aplikasi ini](https://www.amazon.com/b/ref=s9_acss_bw_cg_BHPgrid_2b1_w?node=6323045011&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-5&pf_rd_r=XVFXDRYSG7AP0EFYR28Q&pf_rd_t=101&pf_rd_p=faf4083d-2157-44b3-8985-ca99aa1b4f4a&pf_rd_i=283155)
2. Lakukan registrasi atau langsung login jika sudah memiliki akun
3. Setelah registrasi/login anda akan di suguhkan list buku
4. Anda bisa memilih buku dan melihat detail, pada halaman detail anda bisa me-review buku dan memberi rating
5. Di halaman profile, anda bisa mendapat buku yang telah anda upload. Disitu anda bisa buat, ubah dan hapus data buku

## Endpoint

| Method        | Endpoint      | Fungsi        |
| ------------- |:-------------:| -------------:|
| GET           | '/books'      |               |
| POST          | '/books'      |               |
| PUT           | '/books/id'   |               |
| DELETE        | '/books/id'   |               |

