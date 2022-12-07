import React from "react";
import { View, ScrollView, Image} from "react-native";
import { Card, Button, Avatar } from "react-native-paper";
import Style from "../styles/Style";

const LeftContent = () => <Avatar.Icon icon="language-php" size={45} />;

const List_Pelajaran_HTML = ({navigation}) => {
  return (
    <ScrollView style={{ backgroundColor:"#0096FF" }}>
      {/* <Image style={Style.logo} source={require("../assets/logo.png")} /> */}
      <View style={Style.card2}>
        <Card onPress={() => navigation.navigate('Materi1')}>
          <Card.Title title="PHP" left={LeftContent}  />
        </Card>
      </View>

      <View style={Style.card2}>
        <Card onPress={() => navigation.navigate('Materi2')}>
          <Card.Title title="PHP" left={LeftContent}  />
        </Card>
      </View>

      <View style={Style.card2}>
        <Card onPress={() => navigation.navigate('Materi3')}>
          <Card.Title title="PHP" left={LeftContent}  />
        </Card>
      </View>

      <View style={Style.card2}>
        <Card onPress={() => navigation.navigate('Materi4')}>
          <Card.Title title="PHP" left={LeftContent}  />
        </Card>
      </View>

      <View style={Style.card2}>
        <Card onPress={() => navigation.navigate('Materi5')}>
          <Card.Title title="PHP" left={LeftContent}  />
        </Card>
      </View>

      <View style={Style.card2}>
        <Card onPress={() => navigation.navigate('Materi6')}>
          <Card.Title title="PHP" left={LeftContent}  />
        </Card>
      </View>

      <View style={Style.card2}>
        <Card onPress={() => navigation.navigate('Materi7')}>
          <Card.Title title="PHP" left={LeftContent}  />
        </Card>
      </View>

      <View style={Style.card2}>
        <Card onPress={() => navigation.navigate('Materi8')}>
          <Card.Title title="PHP" left={LeftContent}  />
        </Card>
      </View>

      
      <View style={Style.card2}>
        <Card onPress={() => navigation.navigate('Materi9')}>
          <Card.Title title="PHP" left={LeftContent}  />
        </Card>
      </View>
    </ScrollView>
  );
};

export default List_Pelajaran_HTML;
