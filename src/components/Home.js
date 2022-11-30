import React from "react";
import { View, Image, SafeAreaView, ScrollView, Text } from "react-native";
import Style from "../styles/Style";
import { Card, Button, Paragraph } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView >
      <ScrollView style={{ backgroundColor:"#0096FF" }}>
        <View style={Style.card}>
          <Card>
            <Card.Title title="JavaScript" />
            <Card.Cover source={require("../assets/js.png")} />
            <Card.Content>
              <Paragraph>
                Disini kalian akan belajar dasar-dasar pemrograman JavaScript
              </Paragraph>
            </Card.Content>
            <Card.Actions>
              <Button onPress={() => navigation.navigate("List Pelajaran JS")}>
                Pelajari
              </Button>
            </Card.Actions>
          </Card>
        </View>

        <View style={Style.card}>
          <Card>
            <Card.Title title="JavaScript" />
            <Card.Cover source={require("../assets/js.png")} />
            <Card.Content>
              <Paragraph>
                Disini kalian akan belajar dasar-dasar pemrograman JavaScript
              </Paragraph>
            </Card.Content>
            <Card.Actions>
              <Button>Pelajari</Button>
            </Card.Actions>
          </Card>
        </View>

        <View style={Style.card}>
          <Card>
            <Card.Title title="JavaScript" />
            <Card.Cover source={require("../assets/js.png")} />
            <Card.Content>
              <Paragraph>
                Disini kalian akan belajar dasar-dasar pemrograman JavaScript
              </Paragraph>
            </Card.Content>
            <Card.Actions>
              <Button>Pelajari</Button>
            </Card.Actions>
          </Card>
        </View>

        <View style={Style.card}>
          <Card>
            <Card.Title title="JavaScript" />
            <Card.Cover source={require("../assets/js.png")} />
            <Card.Content>
              <Paragraph>
                Disini kalian akan belajar dasar-dasar pemrograman JavaScript
              </Paragraph>
            </Card.Content>
            <Card.Actions>
              <Button>Pelajari</Button>
            </Card.Actions>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
