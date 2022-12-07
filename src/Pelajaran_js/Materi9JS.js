import React from "react";
import { View, Image, SafeAreaView, ScrollView, Text } from "react-native";
import Style from "../styles/Style";
import { Card, Button, Paragraph } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

const Materi9 = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView style={{ backgroundColor: "#0096FF" }}>
        <View style={Style.container}>
          <Image style={Style.logo} source={require("../assets/logo.png")} />
          <Text style={Style.judul}>Function Javascript</Text>
          <Text style={Style.isimateri}>
            Dalam pemrograman, fungsi/function sering digunakan untuk membungkus
            program menjadi bagian-bagian kecil. Logika program yang ada di
            dalam fungsi/function dapat kita gunakan kembali dengan
            memanggilnya. Sehingga tidak perlu menulis ulang. Pada kesempatan
            ini, kita akan belajar tentang fungsi/function di Javascript. Mulai
            dari cara membuat, memanggil, hingga membuat program CRUD sederhana
            dengan fungsi/function.
          </Text>
          <Text style={Style.subjudul}>Apa itu Fungsi/function?</Text>
          <Text style={Style.isimateri}>
            Fungsi adalah sub-program yang bisa digunakan kembali baik di dalam
            program itu sendiri, maupun di program yang lain. Fungsi di dalam
            Javascript adalah sebuah objek. Karena memiliki properti dan juga
            method. Bagi pemula konsep ini cukup membingungkan. Apalagi yang
            belum mengenal konsep OOP. Tapi tentang saja… Kita pelajari dulu
            tentang fungsi, nanti saya akan bahas tentang objek di kesempatan
            yang berbeda.
          </Text>
          <Image
            style={Style.foto}
            source={require("../assets/materi4-1.png")}
          />
          <Text style={Style.subjudul}>2. Dialog Confirm</Text>
          <Text style={Style.isimateri}>
            Dialog confirm() digunakan untuk melakukan konfirmasi dalam
            melakukan tindakan tertentu. Misalnya: Saat kita menghapus sesuatu,
            maka ada baiknya menampilkan dialog confirm(). Karena tindakan
            tersebut cukup berbahaya. Dialog confirm dapat dibuat dengan fungsi
            confirm(). Contoh:
          </Text>
          <Text style={Style.coding}>
            confirm("are you sure wanna delete it?");
          </Text>
          <Text style={Style.isimateri}>
            Dialog confirm() akan mengembalikan nilai true apabila kita memilih
            tombol OK dan akan mengembalikan nilai false apabila kita memilih
            Cancel. Nilai kembalian ini dapat kita tampung dalam variabel untuk
            diproses.
          </Text>
          <Text style={Style.subjudul}>3. Dialog Prompt</Text>
          <Text style={Style.isimateri}>
            Dialog prompt() berfungsi untuk mengambil sebuah inputan dari
            pengguna. Dialog prompt() akan mengembalikan sebuah nilai string
            dari apa yang diinputkan oleh pengguna. contoh:
          </Text>
          <Image
            style={Style.foto}
            source={require("../assets/materi4-2.png")}
          />
          <Text style={Style.isimateri}>
            Dialog prompt() memiliki beberapa parameter yang harus diberikan:
            Teks yang akan ditampilkan pada form; Nilai default untuk field
            input. Pada contoh di atas, kita memberikan nilai default-nya berupa
            string kosong dengan tanda petik ""
          </Text>
          <Text style={Style.subjudul}>
            Kapan Waktu yang Tepat Menggunakan Alert, Confirm, dan Prompt?
          </Text>
          <Text style={Style.isimateri}>
            Berdasarkan contoh-contoh di atas, kita bisa mengetahui… Kapan waktu
            yang tepat untuk menggunakan alert(), confirm() dan prompt(). Saat
            kita hanya ingin menampilkan informasi saja, maka gunakan alert().
            Saat kita ingin jawaban konfirmasi dari pengguna, maka gunakan
            confirm(). …dan apabila kita ingin mengambil data teks dari
            pengguna, maka gunakan prompt().
          </Text>
          <TouchableOpacity>
            <Text style={Style.isimateri}>lanjut ke materi berikutnya</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Materi9;
