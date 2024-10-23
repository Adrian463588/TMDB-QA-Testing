# TMDB-QA-Testing
Repository ini digunakan untuk pengujian manual pada website [The Movie Database (TMDB)](https://www.themoviedb.org).

## Manual Testing Web TMDB

Test case, bug report, dan test report dapat diakses melalui link berikut:  
[Google Spreadsheet - TMDB Testing](https://docs.google.com/spreadsheets/d/1gccDyNH5z10r6LChsOeaRbHhPmGV0qrwgtctzPtbu4U/edit?usp=sharing)

## Penjelasan Umum

Pengujian manual terhadap website TMDB melibatkan 13 test case yang mencakup berbagai fitur seperti registrasi, login, perubahan bahasa, pengelolaan film favorit, dan logout. Pengujian ini bertujuan untuk memastikan bahwa fitur-fitur tersebut berfungsi dengan baik sesuai ekspektasi. Pada fitur registrasi dan login, pengujian memastikan pengguna dapat mendaftar dengan data yang valid serta melakukan verifikasi email, sementara fitur login diuji untuk memeriksa validasi data login. Fitur perubahan bahasa diuji untuk memastikan seluruh situs dapat beralih ke Bahasa Indonesia secara penuh. Selain itu, pengelolaan film favorit diuji dalam kondisi login dan non-login, mencakup penandaan, penghapusan, serta pengurutan film favorit dalam dua bahasa, dan fitur logout diuji untuk memastikan proses keluar berjalan lancar.

Dari pengujian ini, ditemukan 5 bug yang memengaruhi beberapa fitur. Bug pertama terkait dengan terjemahan situs yang tidak sepenuhnya menggunakan Bahasa Indonesia setelah perubahan bahasa. Bug kedua adalah fitur terjemahan yang tidak berfungsi sepenuhnya, sehingga beberapa bagian situs tetap dalam Bahasa Inggris. Pengelolaan film favorit juga menemui masalah, di mana pengguna tidak dapat menghapus film dari daftar favorit secara langsung melalui halaman favorit. Selain itu, terdapat bug pada pesan tooltip ikon favorit yang tidak berubah setelah tindakan pengguna. Bug terakhir serupa dengan penghapusan film dari daftar favorit yang gagal, menyebabkan kesulitan dalam pengelolaan daftar favorit secara efektif.
