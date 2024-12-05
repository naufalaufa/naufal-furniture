REACT + REDUX NAUFAL

REDUX PRINCIPLE

SINGLE SOURCE OF TRUTH
state global di simpan di sebuah object tree dengan single store

STATE IS READ ONLY
state hanya bisa dibaca atau ditampilkan saja

CHANGE ARE MADE WITH A FUNCTION
salah satu cara merubah state adalah dengan membuat function / action yang berada dalam reducer

WHAT U NEED TO USE REDUX

- REDUX
- INITIALSTATE
  - bisa dalam bentuk tipe data apapun , data yang bersifat global yang dibutuhkan aplikasi kita
  - dispatch
    - yang menerima parameter berupa object berisi type dan payload (optional) untuk diteruskan dan dikonsumsi oleh reducer
  - Reducer
    - sebuah function yang terdiri dari state dan action. initialstate adalah parameter state yang akan dimasukan , dan action adalah function untuk
      mengupdate state tersebut
  - CreateStore
    - paramater sebuah reducer untuk menginisiasistore
  - Subscribe (opsional)
    - untuk bisa mendaftarkan sebuah aksi yang akan di trigger secara otomatis ketika ada perubahan state
