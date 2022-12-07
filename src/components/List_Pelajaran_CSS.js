import React from "react";
import { View, ScrollView, Image} from "react-native";
import { Card, Button, Avatar } from "react-native-paper";
import Style from "../styles/Style";

const LeftContent = () => <Avatar.Icon icon="language-css3" size={45} />;

const List_Pelajaran_HTML = ({navigation}) => {
  return (
    <ScrollView style={{ backgroundColor:"#0096FF" }}>
      {/* <Image style={Style.logo} source={require("../assets/logo.png")} /> */}
      <View style={Style.card2}>
        <Card onPress={() => navigation.navigate('Materi 1 CSS')}>
          <Card.Title title="Pengenalan CSS" left={LeftContent}  />
        </Card>
      </View>

      <View style={Style.card2}>
        <Card onPress={() => navigation.navigate('Materi 2 CSS')}>
          <Card.Title title="Menulis CSS di HTML" left={LeftContent}  />
        </Card>
      </View>

      <View style={Style.card2}>
        <Card onPress={() => navigation.navigate('Materi 3 CSS')}>
          <Card.Title title="CSS" left={LeftContent}  />
        </Card>
      </View>

      <View style={Style.card2}>
        <Card onPress={() => navigation.navigate('Materi 4 CSS')}>
          <Card.Title title="CSS" left={LeftContent}  />
        </Card>
      </View>

      <View style={Style.card2}>
        <Card onPress={() => navigation.navigate('Materi 5 CSS')}>
          <Card.Title title="CSS" left={LeftContent}  />
        </Card>
      </View>

      <View style={Style.card2}>
        <Card onPress={() => navigation.navigate('Materi 6 CSS')}>
          <Card.Title title="CSS" left={LeftContent}  />
        </Card>
      </View>

      <View style={Style.card2}>
        <Card onPress={() => navigation.navigate('Materi 7 CSS')}>
          <Card.Title title="CSS" left={LeftContent}  />
        </Card>
      </View>

      <View style={Style.card2}>
        <Card onPress={() => navigation.navigate('Materi 8 CSS')}>
          <Card.Title title="CSS" left={LeftContent}  />
        </Card>
      </View>

      
      <View style={Style.card2}>
        <Card onPress={() => navigation.navigate('Materi 9 CSS')}>
          <Card.Title title="CSS" left={LeftContent}  />
        </Card>
      </View>
    </ScrollView>
  );
};

export default List_Pelajaran_HTML;
