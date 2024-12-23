"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Artist, ArtistState } from "@/types/Artist";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { Group, GroupState } from "@/types/Group";
import { EventSubGroup, EventSubGroupState } from "@/types/EventSubGroup";
import { Type, TypeState } from "@/types/Type";
import { Language, LanguageState } from "@/types/Language";
import Image from "next/image";
import { apiUrl } from "@/redux/apiConfig";
import placehoderImage from "@/assets/image.png";
import { ImageState, ImageType } from "@/types/ImageType";
import clsx from "clsx";
import { createCard } from "@/redux/slices/card.slice";
import { CardArgs, CardState } from "@/types/Card";
import { toast } from "@/hooks/use-toast";
import { useSearchParams } from "next/navigation";

const CardDetailsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode");
  const id = searchParams.get("id");
  const ids = id ? parseInt(id, 10) : 0;

  // Placeholder data (would typically come from backend/context)
  const cards: CardState = useSelector<RootState, CardState>(
    (state) => state.cards
  );
  const artists: ArtistState = useSelector<RootState, ArtistState>(
    (state) => state.artists
  );
  const groups: GroupState = useSelector<RootState, GroupState>(
    (state) => state.groups
  );
  const subGroups: EventSubGroupState = useSelector<
    RootState,
    EventSubGroupState
  >((state) => state.subGroups);
  const types: TypeState = useSelector<RootState, TypeState>(
    (state) => state.types
  );
  const languages: LanguageState = useSelector<RootState, LanguageState>(
    (state) => state.languages
  );
  const images: ImageState = useSelector<RootState, ImageState>(
    (state) => state.images
  );
  const ItemList: number[] = [1, 2, 3, 4, 5];
  const [item, setItem] = useState(-1);
  const [isModal, setIsModal] = useState(false);
  const [draftImage, setDraftImage] = useState(-1);
  const [disableSubmit, setDisableSubmit] = useState(true);
  const [cardDetails, setCardDetails] = useState<CardArgs>({
    name: "",
    languageId: 0,
    artistId: 0,
    groupId: 0,
    event_sub_groupId: 0,
    typeId: 0,
    scene: "",
    action: "",
    consequence_positive: "",
    consequence_negative: "",
    co2_level_number: 0,
    nature_level_number: 0,
    gdp_level_number: 0,
    qrcode: "0 0 0 0",
    image: "",
  });
  useEffect(() => {
    if (mode === "edit") {
      setItem(
        parseInt(
          cards.cards[ids].qrcode[cards.cards[ids].qrcode.length - 1],
          10
        )
      );
      setCardDetails({
        name: cards.cards[ids].name,
        languageId: cards.cards[ids].languageId,
        artistId: cards.cards[ids].artistId,
        groupId: cards.cards[ids].groupId,
        event_sub_groupId: 0,
        typeId: cards.cards[ids].typeId,
        scene: cards.cards[ids].scene,
        action: cards.cards[ids].action,
        consequence_positive: cards.cards[ids].consequence_positive,
        consequence_negative: cards.cards[ids].consequence_negative,
        co2_level_number: cards.cards[ids].co2_level_number,
        nature_level_number: cards.cards[ids].nature_level_number,
        gdp_level_number: cards.cards[ids].gdp_level_number,
        qrcode: cards.cards[ids].qrcode,
        image: cards.cards[ids].image,
      });
    }
  }, [mode]);
  useEffect(() => {
    const { name, languageId, artistId, typeId, image } = cardDetails;
    if (
      name == "" ||
      languageId == 0 ||
      artistId == 0 ||
      typeId == 0 ||
      image == ""
    ) {
      setDisableSubmit(true);
    } else {
      setDisableSubmit(false);
    }
  }, [cardDetails]);
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCardDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (name: string, value: number) => {
    if (name === "itemId") setItem(value);
    const typeId = name === "typeId" ? value : cardDetails.typeId;
    const artistId = name === "artistId" ? value : cardDetails.artistId;
    const groupId = name === "groupId" ? value : cardDetails.groupId;
    const itemId = name === "itemId" ? value : item;
    const event_sub_groupId =
      name === "event_sub_groupId" ? value : cardDetails.event_sub_groupId;
    if (typeId === 1) {
      setCardDetails((prev) => ({
        ...prev,
        [name]: value,
        event_sub_groupId: 0,
        qrcode:
          artistId + " " + groupId + " " + event_sub_groupId + " " + itemId,
      }));
    } else if (typeId === 2) {
      setCardDetails((prev) => ({
        ...prev,
        [name]: value,
        qrcode:
          artistId + " " + groupId + " " + event_sub_groupId + " " + itemId,
      }));
    } else {
      setCardDetails((prev) => ({
        ...prev,
        [name]: value,
        qrcode:
          artistId + " " + groupId + " " + event_sub_groupId + " " + itemId,
      }));
    }
  };

  const handleSubmit = () => {
    console.log({ cardDetails });
    dispatch(createCard(cardDetails))
      .then(() => {
        toast({ description: "Card was created successfully!" });
        setItem(-1);
        setCardDetails({
          name: "",
          languageId: 0,
          artistId: 0,
          groupId: 0,
          event_sub_groupId: 0,
          typeId: 0,
          scene: "",
          action: "",
          consequence_positive: "",
          consequence_negative: "",
          co2_level_number: 0,
          nature_level_number: 0,
          gdp_level_number: 0,
          qrcode: "0 0 0 0",
          image: "",
        });
      })
      .catch(() => toast({ description: "Failed to create Card!" }));
  };

  return (
    <div className="p-6 h-screen overflow-auto">
      <h1 className="text-3xl mb-6">Card Details</h1>
      <div className="space-y-4 overflow-y-auto">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          {/* Card Name */}
          <div>
            <label className="block text-sm font-medium mb-2">Card Name</label>
            <Input
              name="name"
              value={cardDetails.name}
              onChange={handleInputChange}
              placeholder="Enter card name"
            />
          </div>

          {/* Language Dropdown */}
          <div>
            <label className="block text-sm font-medium mb-2">Language</label>
            <Select
              onValueChange={(value) => {
                const selectedLanguage = languages.languages.find(
                  (language: Language) => language.language === value
                );
                handleSelectChange("languageId", selectedLanguage?.id || -1);
              }}
              value={
                languages.languages.find(
                  (language) => cardDetails.languageId == language.id
                )?.language
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Language" />
              </SelectTrigger>
              <SelectContent>
                {languages.languages.map((lang: Language) => (
                  <SelectItem key={lang.language} value={lang.language}>
                    {lang.language}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Artist Dropdown */}
          <div>
            <label className="block text-sm font-medium mb-2">Artist</label>
            <Select
              onValueChange={(value) => {
                const selectedArtist = artists.artists.find(
                  (artist: Artist) => artist.name === value
                );
                handleSelectChange("artistId", selectedArtist?.id || -1);
              }}
              value={
                artists.artists.find(
                  (artist) => cardDetails.artistId == artist.id
                )?.name
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Artist" />
              </SelectTrigger>
              <SelectContent>
                {artists.artists.map((artist: Artist) => (
                  <SelectItem key={artist.id} value={artist.name}>
                    {artist.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Group Dropdown */}
          <div>
            <label className="block text-sm font-medium mb-2">Group</label>
            <Select
              onValueChange={(value) => {
                const selectedGroup = groups.groups.find(
                  (group: Group) => group.groupName === value
                );
                handleSelectChange("groupId", selectedGroup?.id || -1);
              }}
              value={
                groups.groups.find((group) => cardDetails.groupId == group.id)
                  ?.groupName
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Group" />
              </SelectTrigger>
              <SelectContent>
                {groups.groups.map((group) => (
                  <SelectItem key={group.groupName} value={group.groupName}>
                    {group.groupName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Sub-Group Dropdown */}
          <div>
            <label className="block text-sm font-medium mb-2">Sub-Group</label>
            <Select
              disabled={cardDetails.typeId == 1}
              onValueChange={(value) => {
                const selectedSubGroup = subGroups.eventSubGroups.find(
                  (subGroup: EventSubGroup) => subGroup.subGroupName === value
                );
                handleSelectChange(
                  "event_sub_groupId",
                  selectedSubGroup?.id || -1
                );
              }}
              value={
                subGroups.eventSubGroups.find(
                  (subGroup) => cardDetails.event_sub_groupId == subGroup.id
                )?.subGroupName
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Sub-Group" />
              </SelectTrigger>
              <SelectContent>
                {subGroups.eventSubGroups.map((subGroup) => (
                  <SelectItem key={subGroup.id} value={subGroup.subGroupName}>
                    {subGroup.subGroupName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Item</label>
            <Select
              onValueChange={(value) => {
                handleSelectChange("itemId", Number(value) || -1);
              }}
              value={item.toString()}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Item" />
              </SelectTrigger>
              <SelectContent>
                {ItemList.map((item, index) => (
                  <SelectItem key={index - 1} value={item.toString()}>
                    {item.toString()}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {/* Type */}
          <div>
            <label className="block text-sm font-medium mb-2">Type</label>
            <Select
              onValueChange={(value) => {
                const selectedType = types.types.find(
                  (type: Type) => type.typeName === value
                );
                handleSelectChange("typeId", selectedType?.id || -1);
              }}
              value={
                types.types.find((type) => cardDetails.typeId == type.id)
                  ?.typeName
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Type" />
              </SelectTrigger>
              <SelectContent>
                {types.types.map((type) => (
                  <SelectItem key={type.id} value={type.typeName}>
                    {type.typeName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Scene */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-2">Scene</label>
            <Textarea
              name="scene"
              value={cardDetails.scene}
              onChange={handleInputChange}
              placeholder="Describe the scene"
              rows={3}
            />
          </div>

          {/* Action Description */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-2">
              Action Description
            </label>
            <Textarea
              name="action"
              value={cardDetails.action}
              onChange={handleInputChange}
              placeholder="Describe the action"
              rows={3}
            />
          </div>

          {/* Consequences */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Positive Consequence
            </label>
            <Textarea
              name="consequence_positive"
              value={cardDetails.consequence_positive}
              onChange={handleInputChange}
              placeholder="Describe positive consequences"
              rows={3}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Negative Consequence
            </label>
            <Textarea
              name="consequence_negative"
              value={cardDetails.consequence_negative}
              onChange={handleInputChange}
              placeholder="Describe negative consequences"
              rows={3}
            />
          </div>

          {/* Levels */}
          <div>
            <label className="block text-sm font-medium mb-2">CO2 Level</label>
            <Input
              type="number"
              name="co2_level_number"
              value={cardDetails.co2_level_number}
              onChange={handleInputChange}
              min={0}
              max={100}
              placeholder="CO2 Impact"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Nature Level
            </label>
            <Input
              type="number"
              name="nature_level_number"
              value={cardDetails.nature_level_number}
              onChange={handleInputChange}
              min={0}
              max={100}
              placeholder="Nature Impact"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">GDP Level</label>
            <Input
              type="number"
              name="gdp_level_number"
              value={cardDetails.gdp_level_number}
              onChange={handleInputChange}
              min={0}
              max={100}
              placeholder="GDP Impact"
            />
          </div>

          {/* QR Code */}
          <div>
            <label className="block text-sm font-medium mb-2">QR Code</label>
            <Input
              type="text"
              name="qrCode"
              disabled
              value={cardDetails.qrcode}
            />
          </div>

          {/* Associated Image */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Associated Image
            </label>
            <Image
              width={300}
              height={300}
              className="w-32 h-32 shadow-md cursor-pointer"
              src={
                cardDetails.image
                  ? `${apiUrl}/images/${cardDetails.image}`
                  : placehoderImage
              }
              alt=""
              onClick={() => setIsModal(!isModal)}
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-end">
            <Button
              type="submit"
              onClick={handleSubmit}
              disabled={disableSubmit}
            >
              Save Card
            </Button>
          </div>
        </div>
      </div>
      {isModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-5/6 h-5/6 flex flex-col justify-between">
            <h2 className="text-2xl mb-4">Uploaded Images</h2>
            <div className="grid grid-cols-6 gap-10 overflow-y-auto h-[calc(100vh-300px)]">
              {images.images &&
                images.images.map((image: ImageType, index: number) => (
                  <Image
                    width={300}
                    height={300}
                    className={clsx("cursor-pointer", {
                      "border-4 border-blue-500": draftImage === image.id,
                    })}
                    key={index}
                    src={`${apiUrl}/images/${image.name}`}
                    onClick={() => setDraftImage(image.id)}
                    alt=""
                  />
                ))}
            </div>
            <div className="flex flex-row gap-2 justify-end">
              <Button onClick={() => setIsModal(false)}>Close</Button>
              <Button
                disabled={draftImage == -1}
                onClick={() => {
                  setCardDetails((prev) => ({
                    ...prev,
                    image:
                      images.images.find((image) => image.id === draftImage)
                        ?.name || "",
                  }));
                  setIsModal(false);
                }}
              >
                Choose
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardDetailsPage;
