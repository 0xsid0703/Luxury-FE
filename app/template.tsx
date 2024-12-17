"use client";
import React, { PropsWithChildren, useEffect } from "react";
import { setArtist } from "@/redux/slices/artist.slice";
import store, { AppDispatch } from "@/redux/store";
import { Provider, useDispatch } from "react-redux";
import { setCard } from "@/redux/slices/card.slice";
import { setCardStack } from "@/redux/slices/cardstack.slice";
import { setLanguage } from "@/redux/slices/language.slice";
import { setUser } from "@/redux/slices/user.slice";
import { apiUrl } from "@/redux/apiConfig";
import axios from "axios";
import { Artist } from "@/types/Artist";
import { Card } from "@/types/Card";
import { ImageType } from "@/types/ImageType";
import { Language } from "@/types/Language";
import { Type } from "@/types/Type";
import { User } from "@/types/User";
import { CardStack } from "@/types/CardStack";
import { setImages } from "@/redux/slices/images.slice";
import { Group } from "@/types/Group";
import { EventSubGroup } from "@/types/EventSubGroup";
import { setGroups } from "@/redux/slices/group.slice";
import { setSubGroups } from "@/redux/slices/subGroup.slice";
import { setTypes } from "@/redux/slices/type.slice";

type StatsResponse = {
  artists: Artist[];
  cards: Card[];
  cardStacks: CardStack[];
  images: ImageType[];
  languages: Language[];
  types: Type[];
  user: User[];
  groups: Group[];
  subGroups: EventSubGroup[];
};

const RootTemplate = ({ children }: PropsWithChildren) => {
  return (
    <Provider store={store}>
      <MainComponent />
      {children}
    </Provider>
  );
};

export default RootTemplate;

const MainComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${apiUrl}/api/`);
      const res: StatsResponse = response.data;
      console.log({ res });
      dispatch(setArtist(res.artists));
      dispatch(setCard(res.cards));
      dispatch(setCardStack(res.cardStacks));
      dispatch(setLanguage(res.languages));
      dispatch(setUser(res.user));
      dispatch(setImages(res.images));
      dispatch(setGroups(res.groups));
      dispatch(setSubGroups(res.subGroups));
      dispatch(setTypes(res.types));
      console.log("Received Success");
    };
    fetchData();
  }, [dispatch]);
  return <></>;
};
