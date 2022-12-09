import React from "react";
import { View, Image, SafeAreaView, ScrollView, Text } from "react-native";
import Style from "../styles/Style";
import { Card, Button, Paragraph } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

const MateriCSS3 = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView style={{ backgroundColor: "#0096FF" }}>
        <View style={Style.container}>
          <Image style={Style.logo} source={require("../assets/logo.png")} />
          <Text style={Style.judul}>Sintaks Dasar CSS</Text>
          <Text style={Style.isimateri}>
            CSS punya sintaks atau tata cara penulisan kode yang harus diikuti.
            Jika kita salah tulis, bisa jadi CSS yang kita buat tidak akan
            menghasilkan apa-apa di tampilan web. Karena itu, kita wajib
            memahami sintaks dasar CSS agar tidak salah tulis.
          </Text>
          <Text style={Style.subjudul}>- Struktur dasar CSS</Text>
          <Text style={Style.isimateri}>
            Struktur kode CSS terdiri dari tiga bagian:{"\n"}
            1. Selektor;{"\n"}
            2. Blok Deklarasi;{"\n"}
            3. Properti dan nilanya.{"\n"}
            Selektor adalah kata kunci untuk memilih elemen HTML yang akan kita
            beri style.Selektor dapat berupa nama tag, class, id, dan
            atribut.Blok deklarasi adalah tempat kita menuliskan atribut atau
            properti CSS yang akan diberikan ke pada elemen yang telah
            diseleksi.Satu blok deklarasi, bisa dipakai oleh lebih dari satu
            selektor.Properti adalah sekumpulan aturan yang akan diberikan
            kepada elemen yang dipilih.Properti harus ditulis di dalam blok
            deklarasi.Nilai untuk properti kadang diapit tanda petik, kadang
            juga tidak. Biasanya yang diapit dengan tanda petik adalah nilai
            yang berupa teks.Komentar biasanya dipakai untuk memberikan
            informasi tambahan di kode CSS. Cara menulis komentar di CSS
            dilakukan dengan tanda /* dan diakhiri dengan */.
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

export default MateriCSS3;
