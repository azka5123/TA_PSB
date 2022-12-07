import React from "react";
import { View, Image, SafeAreaView, ScrollView, Text } from "react-native";
import Style from "../styles/Style";
import { Card, Button, Paragraph } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

const MateriCSS2 = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView style={{ backgroundColor: "#0096FF" }}>
        <View style={Style.container}>
          <Image style={Style.logo} source={require("../assets/logo.png")} />
          <Text style={Style.judul}>Menulis CSS di HTML</Text>
          <Text style={Style.isimateri}>
            Pada tutorial sebelumnya, kita sudah berkenalan dengan CSS.
            Berikutnya, kita akan belajar gimana cara menulis CSS di HTML. Ada
            tiga cara menulis CSS di HTML:{"\n"}
            1. Internal CSS ditulis di dalam tag{"<style>"};{"\n"} 
            2. Inline CSS ditulis di atribut elemen HTML;{"\n"}
            3. External CSS ditulis di file CSS terpisah dengan HTML.
          </Text>
          <Text style={Style.subjudul}>- Internal CSS</Text>
          <Text style={Style.isimateri}>
          Internal CSS adalah kode CSS yang ditulis di dalam tag {"<style>"}.
            Intarnal CSS juga dikenal dengan sebutan Embeded CSS. Tag{" "}
            {"<style>"} bisa ditulis di dalam tag {"<head>"}, bisa juga ditulis
            di dalam tag {"<body>"}. Namun kebanyakan orang menulisnya di dalam{" "}
            {"<head>"}.
            CSS (Cascade Style Sheet) adalah sebuah bahasa untuk mengatur
            tampilan web sehingga terlihat lebih menarik dan indah. Dengan CSS,
            kita dapat mengatur layout (tata letak), warna, font, garis,
            background, animasi, dan lain-lain.Pada tahun 1990, Tim Berners-Lee
            membuat web browser bernama NeXT browser/editor. Pada browser ini,
            kita bisa membuat style sheet. Akan tetapi, sintaks style sheet-nya
            tidak ia publikasikan.Perkembangan Versi CSS Sejak awal dirilis, CSS
            memiliki beberapa versi:{"\n"}
            1. CSS 1 (1996): adalah versi pertama (17 Desember 1996){"\n"}
            2. CSS 2 (1998): adalah versi ke-2 (Mei 1998){"\n"}
            3. CSS 2.1 (2011): dirilis pada 7 juni 2011 {"\n"}
            4. CSS 3 (2012): versi yang banyak digunakan saat ini.
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

export default MateriCSS2;
