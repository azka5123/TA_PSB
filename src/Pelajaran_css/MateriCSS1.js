import React from "react";
import { View, Image, SafeAreaView, ScrollView, Text } from "react-native";
import Style from "../styles/Style";
import { Card, Button, Paragraph } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

const MateriCSS1 = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView style={{ backgroundColor: "#0096FF" }}>
        <View style={Style.container}>
          <Image style={Style.logo} source={require("../assets/logo.png")} />
          <Text style={Style.judul}> Pengenalan Dasar CSS</Text>
          <Text style={Style.isimateri}>
            Setelah belajar HTML, bahasa berikutnya yang harus kita pelajari
            agar menjadi web developer adalah CSS. Pemahaman tentang CSS sangat
            penting, jika kamu ingin fokus pada front-end web development. Kalau
            back-end, yaa sekedar tahu aja sudah cukup. Tugas front-end
            developer biasanya akan membuat halaman web berdasarkan desain dari
            desainer.Tanpa menggunakan CSS, kita tidak mungkin akan bisa membuat
            web berdasarkan desain yang ditentukan desainer. Karena itu, belajar
            CSS sangatlah penting. Pada tutorial ini, kita akan belajar CSS dari
            dasar, mempelajari sejarahnya, hingga nanti bisa membuat CSS
            sendiri.Sebelum adanya CSS, tidak ada bahasa yang dipakai untuk
            memberikan style pada dokumen (web). Tampilan web terasa hambar dan
            kurang tertata. Ide awal tentang style sheet di browser bukan
            sesuatu yang baru. 
          </Text>
          <Text style={Style.subjudul}>- Apa itu CSS</Text>
          <Text style={Style.isimateri}>
            CSS (Cascade Style Sheet) adalah sebuah bahasa untuk mengatur
            tampilan web sehingga terlihat lebih menarik dan indah. Dengan CSS,
            kita dapat mengatur layout (tata letak), warna, font, garis,
            background, animasi, dan lain-lain.Pada tahun 1990, Tim Berners-Lee membuat web
            browser bernama NeXT browser/editor. Pada browser ini, kita bisa
            membuat style sheet. Akan tetapi, sintaks style sheet-nya tidak ia
            publikasikan.Perkembangan Versi CSS Sejak awal dirilis, CSS memiliki
            beberapa versi:{"\n"}
            1. CSS 1 (1996): adalah versi pertama (17 Desember 1996){"\n"}
            2. CSS 2 (1998): adalah versi ke-2 (Mei 1998){"\n"}
            3. CSS 2.1 (2011): dirilis pada 7 juni 2011 {"\n"}
            4. CSS 3 (2012): versi yang banyak digunakan
            saat ini.
          </Text>
          <Text style={Style.isimateri}>
            Ada yang mengatakan, belajar javascript itu susah, karena saat
            melihat hasilnya di web browser, pesan error-nya tidak tampil.
            Pendapat ini tidak benar. Karena kita bisa melihatnya melalui
            console. Console Javascript dapat kita buka melalui Inspect Element{" "}
            {"->"} Console.{"\n"}
          </Text>
          <Image
            style={Style.foto}
            source={require("../assets/materi1-1.png")}
          />
          <Text style={Style.isimateri}>
            Di dalam console, kita bisa menulis fungsi atau kode-kode javascript
            dan hasilnya akan langsung ditampilkan. Misalnya, mari kita coba
            kode berikut:
          </Text>
          <Text style={Style.coding}>
            console.log("Hi apa kabar!"); {"\n"}
            alert("Saya sedang belajar javascript");
          </Text>
          <Image
            style={Style.foto1}
            source={require("../assets/materi1-2.png")}
          />
          <Text style={Style.subjudul}>
            {"\n"}
            {"\n"}- membuat program javascript
          </Text>
          <Text style={Style.isimateri}>
            buka teks editor seperti vscode, sublime, dll, kemudian buat file
            baru bernama hello_world.html dan isi dengan kode berikut:
          </Text>
          <Image
            style={Style.foto2}
            source={require("../assets/materi1-3.png")}
          />
          <Text style={Style.isimateri}>
            setelah itu buka browser dan akan muncul seperti ini, untuk program
            javascriptnya bisa buka console dan lihat hasilnya
          </Text>
          <Image
            style={Style.foto3}
            source={require("../assets/materi1-4.png")}
          />
          <Image
            style={Style.foto3}
            source={require("../assets/materi1-5.png")}
          />
          <Text style={Style.isimateri}>
            dan itulah cara membuat program sederhana menggunakan javascript
          </Text>
          <TouchableOpacity>
            <Text style={Style.isimateri}>lanjut ke materi berikutnya</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MateriCSS1;
