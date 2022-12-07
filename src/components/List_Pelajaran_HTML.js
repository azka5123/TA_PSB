import React from "react";
import { View, ScrollView, Image} from "react-native";
import { Card, Button, Avatar } from "react-native-paper";
import Style from "../styles/Style";

const LeftContent = () => <Avatar.Icon icon="language-html5" size={45} />;

const List_Pelajaran_HTML = ({navigation}) => {
  return (
    <ScrollView style={{ backgroundColor:"#0096FF" }}>
      {/* <Image style={Style.logo} source={require("../assets/logo.png")} /> */}
      <View style={Style.card2}>
        <Card onPress={() => navigation.navigate('Materi 1 HTML')}>
          <Card.Title title="Pengenalan Dasar HTML" left={LeftContent}  />
        </Card>
      </View>

      <View style={Style.card2}>
        <Card onPress={() => navigation.navigate('Materi 2 HTML')}>
          <Card.Title title="Apa itu Tag, Elemen, dan Atribut" left={LeftContent}  />
        </Card>
      </View>

      <View style={Style.card2}>
        <Card onPress={() => navigation.navigate('Materi 3 HTML')}>
          <Card.Title title="Membuat Paragraf pada HTML" left={LeftContent}  />
        </Card>
      </View>

      <View style={Style.card2}>
        <Card onPress={() => navigation.navigate('Materi 4 HTML')}>
          <Card.Title title="Membuat Komentar di HTML" left={LeftContent}  />
        </Card>
      </View>

      <View style={Style.card2}>
        <Card onPress={() => navigation.navigate('Materi 5 HTML')}>
          <Card.Title title="Text Formatting HTML" left={LeftContent}  />
        </Card>
      </View>

      <View style={Style.card2}>
        <Card onPress={() => navigation.navigate('Materi 6 HTML')}>
          <Card.Title title="Membuat Link HTML" left={LeftContent}  />
        </Card>
      </View>

      <View style={Style.card2}>
        <Card onPress={() => navigation.navigate('Materi 7 HTML')}>
          <Card.Title title="Menampilkan Gambar di HTML" left={LeftContent}  />
        </Card>
      </View>

      <View style={Style.card2}>
        <Card onPress={() => navigation.navigate('Materi 8 HTML')}>
          <Card.Title title="Membuat List di HTML" left={LeftContent}  />
        </Card>
      </View>

      
      <View style={Style.card2}>
        <Card onPress={() => navigation.navigate('Materi 9 HTML')}>
          <Card.Title title="Membuat Tabel di HTML" left={LeftContent}  />
        </Card>
      </View>

      <View style={Style.card2}>
        <Card onPress={() => navigation.navigate('Materi 10 HTML')}>
          <Card.Title title="Membuat Form pada HTML" left={LeftContent}  />
        </Card>
      </View>
    </ScrollView>
  );
};

export default List_Pelajaran_HTML;
