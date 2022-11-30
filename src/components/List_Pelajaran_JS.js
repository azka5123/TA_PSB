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
        <Card>
          <Card.Title title="JavaScript" left={LeftContent}  />
        </Card>
      </View>

      <View style={Style.card2}>
        <Card>
          <Card.Title title="JavaScript" left={LeftContent}  />
        </Card>
      </View>

      <View style={Style.card2}>
        <Card>
          <Card.Title title="JavaScript" left={LeftContent}  />
        </Card>
      </View>

      <View style={Style.card2}>
        <Card>
          <Card.Title title="JavaScript" left={LeftContent}  />
        </Card>
      </View>

      <View style={Style.card2}>
        <Card>
          <Card.Title title="JavaScript" left={LeftContent}  />
        </Card>
      </View>

      <View style={Style.card2}>
        <Card>
          <Card.Title title="JavaScript" left={LeftContent}  />
        </Card>
      </View>

      <View style={Style.card2}>
        <Card>
          <Card.Title title="JavaScript" left={LeftContent}  />
        </Card>
      </View>

      
      <View style={Style.card2}>
        <Card>
          <Card.Title title="JavaScript" left={LeftContent}  />
        </Card>
      </View>

      <View style={Style.card2}>
        <Card>
          <Card.Title title="JavaScript" left={LeftContent}  />
        </Card>
      </View>

      <View style={Style.card2}>
        <Card>
          <Card.Title title="JavaScript" left={LeftContent}  />
        </Card>
      </View>
    </ScrollView>
  );
};

export default List_Pelajaran_JS;
