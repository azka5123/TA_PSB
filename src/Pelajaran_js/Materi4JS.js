import React from "react";
import { View, Image, SafeAreaView, ScrollView, Text } from "react-native";
import Style from "../styles/Style";
import { Card, Button, Paragraph } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

const Materi4 = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView style={{ backgroundColor: "#0096FF" }}>
        <View style={Style.container}>
          <Image style={Style.logo} source={require("../assets/logo.png")} />
          <Text style={Style.judul}>Input pada Javascript</Text>
          <Text style={Style.isimateri}>
            Pada tutorial sebelumnya, kita sudah belajar 4 cara menampilkan
            output pada Javascript Salah satunya dengan menggunakan fungsi
            alert(). Fungsi merupakan sebuah fungsi yang akan menampikan jendela
            dialog. Lalu pertanyaanya: Bagaimana cara mengambil input? Ada dua
            cara yang bisa kita lakukan: Menggunakan form; dan menggunakan
            jendela dialog. Pada artikel ini, kita akan membahas yang nomer 2.
            Yaitu: jendela dialog. Jendela dialog merupakan jendela yang
            digunakan untuk berinteraksi dengan pengguna. Ada tiga macam jendela
            dialog pada Javascript: Jendela dialog alert(); Jendela dialog
            confirm(); Jendela dialog promp(); Ketiga dialog ini memiliki
            perilaku dan kegunaan yang berbeda-beda.
          </Text>
          <Text style={Style.subjudul}>1. Dialog Alert</Text>
          <Text style={Style.isimateri}>
            Dialog alert() biasanya digunakan untuk menampilkan sebuah pesan
            peringatan atau informasi. Fungsi alert() berada dalam objek window.
            Dialog alert() memiliki satu perameter yang harus diberikan, yaitu:
            teks yang akan ditampilkan pada dialog.Bagaimana cara menampilkan
            dialog alert() pada event tertentu, misalnya saat sebuah tombol
            diklik? Ini bisa kita lakukan dengan menambahkan fungsi dialog pada
            event listener. Pada HTML, kita bisa masukan fungsi alert() pada
            atribut onClick agar nanti ditampilkan saat sebuah elemen diklik.
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
            Berdasarkan contoh-contoh di atas, kita bisa mengetahui??? Kapan waktu
            yang tepat untuk menggunakan alert(), confirm() dan prompt(). Saat
            kita hanya ingin menampilkan informasi saja, maka gunakan alert().
            Saat kita ingin jawaban konfirmasi dari pengguna, maka gunakan
            confirm(). ???dan apabila kita ingin mengambil data teks dari
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

export default Materi4;
