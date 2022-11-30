import React from "react";
import { View, Image, SafeAreaView, ScrollView, Text } from "react-native";
import Style from "../styles/Style";
import { Card, Button, Paragraph } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

const Materi3 = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView style={{ backgroundColor:"#0096FF" }}>
        <View style={Style.container}>
          <Image style={Style.logo} source={require("../assets/logo.png")} />
          <Text style={Style.judul}>Variabel javascript</Text>
          <Text style={Style.isimateri}>
            Apa itu variabel? …dan apa pula itu tipe data? Apapun bahasa
            pemrograman yang digunakan. Dua hal ini akan selalu ada. Lalu apa
            sebenarnya variabel itu? Variabel adalah sebuah nama yang mewakili
            sebuah nilai. Variabel bisa diisi dengan berbagai macam nilai
            seperti string (teks), number (angka), objek, array, dan sebagainya.
            jika sebuah variabel tidak didefiinisikan isinya maka variabel
            tersebut akan bernilai undefined (belum ditentukan) dan kita bisa
            mengisinya nanti. Kita bisa ibaratkan, variabel itu seperti wadah
            untuk menyimpan sesuatu.{"\n"}
            cara membuat variabel di javascript bisa Menggunakan "var" atau
            "let" contoh :
          </Text>
          <Text style={Style.coding}>
            var nama = "azka";{"\n"}
            let umur = 20;{"\n"}
            var status;
          </Text>
          <Text style={Style.isimateri}>
            dan untuk menggunakannya kita bisa menggunakan console.log() dan
            jika ingin menampilkannya di dalam HTML kita bisa menggunakan
            document.write(). contoh:
          </Text>
          <Image
            style={Style.foto8}
            source={require("../assets/materi2-8.png")}
          />
          <Image
            style={Style.foto8}
            source={require("../assets/materi2-9.png")}
          />

          <Text style={Style.subjudul}>-Mengisi ulang variabel</Text>
          <Text style={Style.isimateri}>
            Variabel bersifat mutable, artinya nilai yang tersimpan di dalamnya
            dapat kita isi ulang (berubah)
          </Text>
          <Text style={Style.coding}>
            // pertama buat variabel dengan isi seperti ini{"\n"}
            var age = 18;{"\n"}
            // lalu kita isi ulang{"\n"}
            age = 21;
          </Text>
          <Text style={Style.isimateri}>
            Kenapa saat mengisi ulang nilai variabel tidak menggunakan kata
            kunci var? Karena kata kunci var dibutuhkan saat membuat variabel
            saja. Sedangkan untuk mengisi ulang, kita cukup tulis seperti di
            atas. Apabila kita menggunakan kata kunci var, berarti jadinya kita
            membuat variabel baru donk, bukan mengisi ulang.{"\n"}
          </Text>

          <Text style={Style.subjudul}>- Tipe data</Text>
          <Text style={Style.isimateri}>
            Tipe data adalah jenis-jenis data yang bisa kita simpan di dalam
            variabel. Ada beberapa tipe data dalam pemrograman Javascript:{"\n"}
            1. String (teks){"\n"}
            2.Integer atau Number (bilangan bulat){"\n"}
            3. Float (bilangan Pecahan){"\n"}
            4. Boolean{"\n"}
            5. Object{"\n"}
            Javascript adalah bahasa yang bersifat dynamic typing, artinya kita
            tidak harus menuliskan tipe data pada saat pembuatan variabel
            seperti pada bahasa C, C++, Java, dsb. yang bersifat static
            typing.Variabel dan tipe data merupakan dua hal dasar yang wajib di
            pelajari dalam bahasa pemrograman apapun. Pada Javascript, kita
            tidak harus menuliskan tipe data saat pembuatan variabel, karena
            Javascript bersifat dynamic typing. Sedangkan pada bahasa
            pemrograman yang lain seperti C, C++, C#, Java, dan lain-lain, kita
            harus menuliskan atau mendefinisikan tipe data pada variabel yang
            dibuat.
          </Text>

          <TouchableOpacity>
            <Text style={Style.isimateri}>lanjut ke materi berikutnya</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Materi3;
