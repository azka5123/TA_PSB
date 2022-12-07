import React from "react";
import { View, Image, SafeAreaView, ScrollView, Text } from "react-native";
import Style from "../styles/Style";
import { Card, Button, Paragraph } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

const MateriHTML7 = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView style={{ backgroundColor: "#0096FF" }}>
        <View style={Style.container}>
          <Image style={Style.logo} source={require("../assets/logo.png")} />
          <Text style={Style.judul}>Menampilkan Gambar di HTML</Text>
          <Text style={Style.isimateri}>
            Setelah belajar tentang apa itu HTML, Tag, Elemen, dan Atribut.
            Berikutnya, kita akan belajar tentang elemen-elemen dasar pada HTML
            yang sering digunakan dalam membuat web.
          </Text>
          <Text style={Style.subjudul}></Text>
          <Text style={Style.isimateri}>
            Paragraf adalah kumpulan dari beberapa kalimat. Pada web, Paragraf
            biasanya digunakan untuk menampilkan teks atau artikel. Paragraf
            pada HTML dibuat dengan tag {"<p>"}. Selain tag ini, ada juga tag
            pendukung lain seperti {"<div>"}, {"<hr>"}, {"<br>"}, dan {"<pre>"}.
            Biasanya paragraf ditambahkan dengan beberapa atribut seperti align,
            id, class, dll.Atribut align merupakan atribut yang digunakan untuk
            pertaan teks pada paragraf. Namun, menurut validator W3C..
            penggunaan tag ini sebaiknya diganti dengan CSS. Mengapa demikian?
            Karena atribut align dapat merubah tampilan dari web. Ini sebenarnya
            tigas dari CSS. Tugas utama dari HTML adalah membuat struktur dasar
            dari web.Tag {"<br>"} sebenarnya bukanlah tag untuk membuat
            paragraf. Tapi tag ini, biasanya digunakan untuk membantu tag{" "}
            {"<p>"}. Fungsi utama tag {"<br>"} adalah untuk membuat baris
            baru.Oh iya, tag {"<br>"} adalah tag yang tidak memiliki pasangan
            penutup. Cara menutupnya, tambahkan saja garis miring seperti ini{" "}
            {"<br />"}. Tag {"<br>"} boleh ditutup, boleh juga tidak. Namun,
            sebaiknya ditutup agar valid menurut validator W3C.
          </Text>

          <Text style={Style.isimateri}>
            Elemen dalam HTML adalah sebuah komponen yang menyusun dokumen HTML.
            Elemen kadang juga disebut sebagai node, karena ia merupakan salah
            satu jenis node yang menyusun dokumen HTML dalam diagram HTML tree.
            Elemen dibentuk dari tag pembuka, isi tag, dan tag penutup. Kadang
            juga ditambahkan beberapa atribut.Elemen tidak selalu berisi teks,
            kadan ia juga akan berisi elemen lain. Ini biasanya kita sebut
            dengan nested element atau elemen di dalam elemen. Elemen HTML ada
            banyak jenisnya. Ada elemen khusus untuk teks, ada elemen untuk
            multimedia, script, tabel, metadata, dll. Nanti kita akan pelajari
            ini secara bertahap.
          </Text>
          <Text style={Style.subjudul}>- Mengenal console pada HTML </Text>
          <Text style={Style.isimateri}>
            Ada yang mengatakan, belajar HTML itu susah, karena saat melihat
            hasilnya di web browser, pesan error-nya tidak tampil. Pendapat ini
            tidak benar. Karena kita bisa melihatnya melalui console. Console
            HTML dapat kita buka melalui Inspect Element {"->"} Console.{"\n"}
          </Text>
          <Image
            style={Style.foto}
            source={require("../assets/materi1-1.png")}
          />
          <Text style={Style.isimateri}>
            Di dalam console, kita bisa menulis fungsi atau kode-kode HTML dan
            hasilnya akan langsung ditampilkan. Misalnya, mari kita coba kode
            berikut:
          </Text>
          <Text style={Style.coding}>
            console.log("Hi apa kabar!"); {"\n"}
            alert("Saya sedang belajar HTML ");
          </Text>
          <Image
            style={Style.foto1}
            source={require("../assets/materi1-2.png")}
          />
          <Text style={Style.subjudul}>
            {"\n"}
            {"\n"}- membuat program HTML
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
            HTML nya bisa buka console dan lihat hasilnya
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
            dan itulah cara membuat program sederhana menggunakan HTML
          </Text>
          <TouchableOpacity>
            <Text style={Style.isimateri}>lanjut ke materi berikutnya</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MateriHTML7;
