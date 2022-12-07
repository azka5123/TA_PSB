import React from "react";
import { View, Image, SafeAreaView, ScrollView, Text } from "react-native";
import Style from "../styles/Style";
import { Card, Button, Paragraph } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

const Materi1 = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView style={{ backgroundColor:"#0096FF" }}>
        <View style={Style.container}>
          <Image style={Style.logo} source={require("../assets/logo.png")} />
          <Text style={Style.judul}>Mengenal javascript</Text>
          <Text style={Style.isimateri}>
            Javascript adalah bahasa pemrograman yang awalnya dirancang untuk
            berjalan di atas browser. Namun, seiring perkembangan zaman,
            javascript tidak hanya berjalan di atas browser saja. Javascript
            juga dapat digunakan pada sisi Server, Game, IoT, Desktop, dsb.
            Javascript awalnya bernama Mocha, lalu berubah menjadi LiveScript
            saat browser Netscape Navigator 2.0 rilis versi beta (September
            1995). Namun, setelah itu dinamai ulang menjadi Javascript
            Terinspirasi dari kesuksesan Javascript, Microsoft mengadopsi
            teknologi serupa. Microsoft membuat ‘Javascript’ versi mereka
            sendiri bernama JScript. Lalu di tanam pada Internet Explorer 3.0.
            Hal ini mengakibatkan ‘perang browser’, karena JScript milik
            Microsoft berbeda dengan Javascript racikan Netscape. Akhirnya pada
            tahun 1996, Netscape mengirimkan standarisasi ECMA-262 ke Ecma
            International. Sehingga lahirlah standarisasi kode Javascript
            bernama ECMAScript atau ES. Saat ini ECMAScript sudah mencapai versi
            8 (ES8).
          </Text>
          <Text style={Style.subjudul}>
            - hal yang diperlukan untuk belajar java script
          </Text>
          <Text style={Style.isimateri}>
            1. Web Browser (Google Chrome, Firefox, dll){"\n"}
            2. Teks Editor(rekomendasi: VS Code){"\n"}
          </Text>
          <Text style={Style.subjudul}>- Mengenal console pada javascript</Text>
          <Text style={Style.isimateri}>
            Ada yang mengatakan, belajar javascript itu susah, karena saat
            melihat hasilnya di web browser, pesan error-nya tidak tampil.
            Pendapat ini tidak benar. Karena kita bisa melihatnya melalui
            console. Console Javascript dapat kita buka melalui Inspect Element{" "}
            {"->"} Console.{"\n"}
          </Text>
          <Image style={Style.foto} source={require("../assets/materi1-1.png")}
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
          <Image style={Style.foto1} source={require("../assets/materi1-2.png")}/>
          <Text style={Style.subjudul}>
            {"\n"}{"\n"}- membuat program javascript
          </Text>
          <Text style={Style.isimateri}>
          buka teks editor seperti vscode, sublime, dll, kemudian buat file baru bernama hello_world.html dan isi dengan kode berikut:
          </Text>
          <Image style={Style.foto2} source={require("../assets/materi1-3.png")}/>
          <Text style={Style.isimateri}>
            setelah itu buka browser dan akan muncul seperti ini, untuk program javascriptnya bisa buka console dan lihat hasilnya
          </Text>
          <Image style={Style.foto3} source={require("../assets/materi1-4.png")}/>
          <Image style={Style.foto3} source={require("../assets/materi1-5.png")}/>
          <Text style={Style.isimateri}>
            dan itulah cara membuat program sederhana menggunakan javascript
          </Text>
          <TouchableOpacity>
            <Text style={Style.isimateri}>
            lanjut ke materi berikutnya
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Materi1;
