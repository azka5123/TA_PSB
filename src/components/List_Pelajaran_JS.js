import React from "react";
import { View, ScrollView, Image} from "react-native";
import { Card, Button, Avatar } from "react-native-paper";
import Style from "../styles/Style";

const LeftContent = () => <Avatar.Icon icon="language-javascript" size={45} />;

const List_Pelajaran_JS = ({navigation}) => {
  return (
    <ScrollView style={{ backgroundColor:"#0096FF" }}>
      {/* <Image style={Style.logo} source={require("../assets/logo.png")} /> */}
      <View style={Style.card2}>
        <Card onPress={() => navigation.navigate('Materi1')}>
          <Card.Title title="Mengenal Javascript" left={LeftContent}  />
        </Card>
      </View>

      <View style={Style.card2}>
        <Card onPress={() => navigation.navigate('Materi2')}>
          <Card.Title title="Output Javascript" left={LeftContent}  />
        </Card>
      </View>

      <View style={Style.card2}>
        <Card onPress={() => navigation.navigate('Materi3')}>
          <Card.Title title="Variabel JavaScript" left={LeftContent}  />
        </Card>
      </View>

      <View style={Style.card2}>
        <Card onPress={() => navigation.navigate('Materi4')}>
          <Card.Title title="Input pada JavaScript" left={LeftContent}  />
        </Card>
      </View>

      <View style={Style.card2}>
        <Card onPress={() => navigation.navigate('Materi5')}>
          <Card.Title title="Operator JavaScript" left={LeftContent}  />
        </Card>
      </View>

      <View style={Style.card2}>
        <Card onPress={() => navigation.navigate('Materi6')}>
          <Card.Title title="Percabangan JavaScript" left={LeftContent}  />
        </Card>
      </View>

      <View style={Style.card2}>
        <Card onPress={() => navigation.navigate('Materi7')}>
          <Card.Title title="Perulangan JavaScript" left={LeftContent}  />
        </Card>
      </View>

      <View style={Style.card2}>
        <Card onPress={() => navigation.navigate('Materi8')}>
          <Card.Title title="Array JavaScript" left={LeftContent}  />
        </Card>
      </View>

      
      <View style={Style.card2}>
        <Card onPress={() => navigation.navigate('Materi9')}>
          <Card.Title title="Function JavaScript" left={LeftContent}  />
        </Card>
      </View>
    </ScrollView>
  );
};

export default List_Pelajaran_JS;
