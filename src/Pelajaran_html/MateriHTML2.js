import React from "react";
import { View, Image, SafeAreaView, ScrollView, Text } from "react-native";
import Style from "../styles/Style";
import { Card, Button, Paragraph } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

const MateriHTML2 = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView style={{ backgroundColor: "#0096FF" }}>
        <View style={Style.container}>
          <Image style={Style.logo} source={require("../assets/logo.png")} />
          <Text style={Style.judul}>
            Apa itu Tag, Elemen, dan Atribut dalam HTML
          </Text>
          <Text style={Style.isimateri}>
            Tag, elemen, dan atribut merupakan tiga bagian penting yang ada di
            dalam HTML. Bagi kamu yang baru belajar HTML, wajib hukumnya untuk
            mengetahui ketiga Hal ini. Apa itu Tag? Apa itu Elemen? Apa itu
            Atribut? Serta apa perbedaan Tag, Elemen, dan Atribut?
          </Text>
          <Text style={Style.subjudul}>1. Apa itu Tag?</Text>
          <Text style={Style.isimateri}>
            Tag adalah sebuah penanda awalan dan akhiran dari sebuah elemen di
            HTML. Tag dibuat dengan kurung siku {"(<...>)"}, lalu di dalamnya
            berisi nama tag dan kadang juga ditambahkan dengan atribut. Contoh:{" "}
            {"<p>"}, {"<a>"}, {"<body>"}, {"<head>"}, dan sebagainya. Tag selalu
            ditulis berpasangan. Ada tag pembuka dan ada tag penutupnya. Namun,
            ada juga beberapa tag yang tidak memiliki pasangan penutup. Tag
            penutup ditulis dengan menambahkan garis miring (/) di depan nama
            tag.Setiap tag memiliki fungsi masing-masing. Ada yang digunakan
            untuk membuat judul, membuat link, membuat paragraf, heading, dan
            lain-lain. Masih ingat sejarah HTML? Dulu.. awalnya HTML cuma punya
            18 tag. Sekarang HTML sudah punya sekitar 250 tag.
          </Text>
          <Text style={Style.subjudul}>2. Apa itu elemen?</Text>
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

export default MateriHTML2;
