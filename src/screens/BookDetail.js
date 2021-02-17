import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import StarRating from "react-native-star-rating-new";
import Comment from "../components/Comment";
import TopBar from "../components/TopBar";
import UserContext from "../contexts/UserContext";

const BookDetail = (props) => {
  const [comment, setComment] = useState([]);
  const navigation = useNavigation();
  const state = useContext(UserContext);

  if (!props.route.params.item) {
    return;
  }

  const {
    _id,
    cover,
    category,
    description,
    isbn,
    publisher,
    rating,
    release_date,
    title,
  } = props.route.params.item;

  const { isForeign } = props.route.params;

  useEffect(() => {
    if (isForeign) {
      try {
        axios
          .get(
            `https://bookappapi.herokuapp.com/api/v1/books/${_id}/foreignbookComments`,
            {
              headers: { Authorization: `Bearer ${state.token}` },
            }
          )
          .then((res) => {
            res.data.data.forEach((el) => {
              setComment((comment) => [...comment, el]);
            });
          })
          .catch((err) => console.log("err", err));
      } catch (error) {
        console.log("error", error);
      }
    }
  }, []);

  return (
    <>
      <TopBar
        leftIconName="arrow-back-outline"
        middleText="Номын дэлгэрэнгүй"
        leftIconEvent={() => navigation.goBack()}
      />
      <ScrollView style={css.container}>
        <View style={css.top}>
          <Image
            source={{ uri: cover }}
            style={css.image}
            resizeMode="center"
          />
          <View style={css.info}>
            <Text style={css.title}>{title}</Text>
            <Text style={css.title}>{publisher.name}</Text>
            <Text style={css.title}>
              {category.includes(",") ? category.split(", ")[1] : category}
            </Text>
            <Text style={css.title}>{isbn ? isbn : "ISBN:"}</Text>
            <Text style={css.title}>{release_date.slice(0, 10)}</Text>
            <Text style={css.title}>Үнэлгээ:</Text>
            <StarRating
              disabled={true}
              rating={rating}
              fullStarColor={"#E8BD0D"}
              starSize={20}
            />
          </View>
        </View>
        <View style={css.desc}>
          <Text style={css.title}>Тайлбар</Text>
          <Text style={css.description}>{description}</Text>
        </View>
        <Comment comments={comment} id={_id} isForeign={isForeign} />
      </ScrollView>
    </>
  );
};

export default BookDetail;

const css = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  info: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "55%",
  },
  image: {
    width: 100,
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontFamily: "MonCricket",
    fontSize: 15,
    paddingVertical: 5,
  },
  desc: {
    paddingTop: 10,
  },
  description: {
    textAlign: "justify",
  },
});
