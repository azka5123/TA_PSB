import React from "react";
import { View, Image, SafeAreaView, ScrollView, Text } from "react-native";
import Style from "../styles/Style";
import { Card, Button, Paragraph } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

const Materi2 = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView style={{ backgroundColor:"#0096FF" }}>
        <View style={Style.container}>
          <Image style={Style.logo} source={require("../assets/logo.png")} />
          <Text style={Style.judul}>Output javascript</Text>
          <Text style={Style.isimateri}>
            Output adalah sebuah tampilan program yang biasanya digunakan untuk
            memperlihatkan hasil akhir. Output biasanya ditampilkan dalam bentuk
            teks dengan fungsi print(). Ada 4 cara menampilkan output pada
            Javascript: 1. Menggunakan Fungsi console.log(); {"\n"}
            2. Menggunakan Fungsi alert(); {"\n"}
            3. Menggunakan Fungsi document.write();{"\n"}
            4. Menggunakan innerHTML.{"\n"}
          </Text>
          <Text style={Style.subjudul}>
            1. Menggunakan Fungsi console.log()
          </Text>
          <Text style={Style.isimateri}>
            Fungsi console.log() adalah fungsi untuk menampilkan teks ke console
            Javascript. Contoh penggunaan:
          </Text>
          <Text style={Style.coding}>console.log("Hello World!");</Text>
          <Text style={Style.isimateri}>outputnya</Text>
          <Image source={require("../assets/materi2-1.png")} />
          <Text style={Style.isimateri}>
            Fungsi console.log() biasanya digunakan untuk debugging. Karena
            setiap pesaan error di Javascript selalu ditampilkan di dalam
            Console. Selain console.log(), terdapat juga beberapa fungsi untuk
            debugging seperti console.debug(), console.info(), console.error(),
            console.dir(), dsb.
          </Text>

          <Text style={Style.subjudul}>2. Menggunakan Fungsi alert();</Text>
          <Text style={Style.isimateri}>
            Fungsi alert() adalah fungsi untuk menampilkan jendela dialog.
            Fungsi sebenarnya berada pada objek window. Secara lengkap bisa
            ditulis seperti ini:
          </Text>
          <Text style={Style.coding}>
            window.alert("Hello World!");{"\n"}
            atau bisa juga ditulis seperti ini{"\n"}
            alert("Hello World!");
          </Text>
          <Text style={Style.isimateri}>contoh penggunaan fungsi alert</Text>
          <Image
            style={Style.foto4}
            source={require("../assets/materi2-2.png")}
          />
          <Text style={Style.isimateri}>outputnya</Text>
          <Image
            style={Style.foto5}
            source={require("../assets/materi2-3.png")}
          />

          <Text style={Style.subjudul}>3. Fungsi document.write();</Text>
          <Text style={Style.isimateri}>
            Objek document adalah objek yang mewakili dokumen HTML di dalam
            Javascript.Dalam objek document, terdapat fungsi write() untuk
            menulis sesuatu ke dokumen HTML. contoh:
          </Text>

          <Image
            style={Style.foto4}
            source={require("../assets/materi2-4.png")}
          />
          <Text style={Style.isimateri}>outputnya</Text>
          <Image
            style={Style.foto5}
            source={require("../assets/materi2-5.png")}
          />

          <Text style={Style.subjudul}>4. Menggunakan innerHTML.</Text>
          <Text style={Style.isimateri}>
            innerHTML adalah sebuah atribut di dalam (objek) elemen HTML yang
            berisi string HTML. Dengan innerHTML, kita dapat menampilkan output
            ke elemen yang lebih spesifik. Contoh:
          </Text>

          <Image
            style={Style.foto6}
            source={require("../assets/materi2-6.png")}
          />
          <Image
            style={Style.foto7}
            source={require("../assets/materi2-7.png")}
          />

          <TouchableOpacity>
            <Text style={Style.isimateri}>lanjut ke materi berikutnya</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Materi2;
