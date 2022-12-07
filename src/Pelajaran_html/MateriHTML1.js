import React from "react";
import { View, Image, SafeAreaView, ScrollView, Text } from "react-native";
import Style from "../styles/Style";
import { Card, Button, Paragraph } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

const MateriHTML1 = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView style={{ backgroundColor: "#0096FF" }}>
        <View style={Style.container}>
          <Image style={Style.logo} source={require("../assets/logo.png")} />
          <Text style={Style.judul}>Pengenalan HTML</Text>
          <Text style={Style.isimateri}>
            Mari kita lihat pengertian HTML menurut wikipedia: HTML atau
            HyperText Markup Language merupakan sebuah bahasa markah untuk
            membuat halaman web. 1 Paham kan maksudnya? Kalau belum paham, sini
            saya jelaskan… Jadi, HTML itu adalah sebuah bahasa yang menggunakan
            markup atau penanda untuk membuat halaman web. Penanda atau markup
            ini, nanti akan kita sebut dengan Tag. HTML berperan untuk
            menentukan struktur konten dan tampilan dari sebuah web. Kalau kita
            ibaratkan nih.. HTML itu seperti batu bata untuk membangun rumah.
            Batu bata ini dapat disusun, hingga menjadi fondasi dasar.Dalam
            membuat halaman web, HTML tidak sendirian. Ada bahasa lain lagi yang
            menjadi pelengkapnya, yakni CSS dan Javascript. CSS adalah bahasa
            khusus yang digunakan untuk memperindah tampilan web. Lalu
            Javascript bertugas untuk membuat halaman web menjadi hidup. Karena
            dengan Javascript, kita dapat menentukan fungsi-fungsi maupun efek
            yang akan diterapkan di website.
          </Text>
          <Text style={Style.subjudul}>
            - hal yang diperlukan untuk belajar java script
          </Text>
          <Text style={Style.isimateri}>
            1. Web Browser (Google Chrome, Firefox, dll){"\n"}
            2. Teks Editor(rekomendasi: VS Code){"\n"}
          </Text>
          <Text style={Style.subjudul}>- Mengenal console pada HTML </Text>
          <Text style={Style.isimateri}>
            Ada yang mengatakan, belajar HTML  itu susah, karena saat
            melihat hasilnya di web browser, pesan error-nya tidak tampil.
            Pendapat ini tidak benar. Karena kita bisa melihatnya melalui
            console. Console HTML  dapat kita buka melalui Inspect Element{" "}
            {"->"} Console.{"\n"}
          </Text>
          <Image
            style={Style.foto}
            source={require("../assets/materi1-1.png")}
          />
          <Text style={Style.isimateri}>
            Di dalam console, kita bisa menulis fungsi atau kode-kode HTML 
            dan hasilnya akan langsung ditampilkan. Misalnya, mari kita coba
            kode berikut:
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

export default MateriHTML1;
