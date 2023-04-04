        // cara kerja array
        // urutan array bisa disebut dengan index yang diawali dari angka 0


        // array kosong
        let arrayKosong = [];

        // array dengan kumpulan nama
        let arrayNama = ["Erlang", "Andri", "Yan", "Putra"]; // 0, 1, 2, 3(urutan nama sesuai index)

        // untuk membuat array
        const names = [];
        names.push("Erlang");
        names.push("Andri", "Yan", "Putra", "delete"); // menambahkan data pada array

        // untuk melihat hasil array
        console.table(names);

        // untuk melihat data yang mau kita lihat
        console.info(names[0]);
        console.info(names[3]);

        // untuk mengubah data atau menimpa data lama dengan data yang baru

        names[0] = "Putra";
        names[1] = "Yan";
        names[2] = "Andri";
        names[3] = "Erlang";

        console.table(names);

        // untuk menghapus data pada array
        delete names[4];

        console.table(names);

        // untuk mempush data baru
        names.push("second");

        console.table(names);