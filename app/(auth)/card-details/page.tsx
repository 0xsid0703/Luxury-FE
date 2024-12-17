"use client";
import React, { useState } from "react";
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
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Group, GroupState } from "@/types/Group";
import { EventSubGroup, EventSubGroupState } from "@/types/EventSubGroup";
import { TypeState } from "@/types/Type";
import { Language, LanguageState } from "@/types/Language";
import Image from "next/image";
import { apiUrl } from "@/redux/apiConfig";
import placehoderImage from "@/assets/image.png";
import { ImageState, ImageType } from "@/types/ImageType";
import clsx from "clsx";

const CardDetailsPage = () => {
  // Placeholder data (would typically come from backend/context)
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
  const [isModal, setIsModal] = useState(false);
  const [draftImage, setDraftImage] = useState(-1);
  const [cardDetails, setCardDetails] = useState({
    cardId: "", // auto-generated
    cardName: "",
    language: -1,
    artist: -1,
    group: -1,
    subGroup: -1,
    type: -1,
    scene: "",
    actionDescription: "",
    consequencePositive: "",
    consequenceNegative: "",
    co2Level: 0,
    natureLevel: 0,
    gdpLevel: 0,
    qrCode: null,
    associatedImage: "",
  });

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
    setCardDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validation and submission logic
    console.log("Card Details Submitted:", cardDetails);
  };

  return (
    <div className="p-6 h-screen overflow-auto">
      <h1 className="text-3xl mb-6">Card Details</h1>
      <form onSubmit={handleSubmit} className="space-y-4 overflow-y-auto">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          {/* Card Name */}
          <div>
            <label className="block text-sm font-medium mb-2">Card Name</label>
            <Input
              name="cardName"
              value={cardDetails.cardName}
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
                handleSelectChange("language", selectedLanguage?.id || -1);
              }}
              value={
                languages.languages.find(
                  (language) => cardDetails.language == language.id
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
                handleSelectChange("artist", selectedArtist?.id || -1);
              }}
              value={
                artists.artists.find(
                  (artist) => cardDetails.artist == artist.id
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
                handleSelectChange("group", selectedGroup?.id || -1);
              }}
              value={
                groups.groups.find((group) => cardDetails.group == group.id)
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
              onValueChange={(value) => {
                const selectedSubGroup = subGroups.eventSubGroups.find(
                  (subGroup: EventSubGroup) => subGroup.subGroupName === value
                );
                handleSelectChange("subGroup", selectedSubGroup?.id || -1);
              }}
              value={
                subGroups.eventSubGroups.find(
                  (subGroup) => cardDetails.subGroup == subGroup.id
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

          {/* Type */}
          <div>
            <label className="block text-sm font-medium mb-2">Type</label>
            <Select
              onValueChange={(value) => {
                const selectedType = subGroups.eventSubGroups.find(
                  (subGroup: EventSubGroup) => subGroup.subGroupName === value
                );
                handleSelectChange("subGroup", selectedType?.id || -1);
              }}
              value={
                types.types.find((type) => cardDetails.type == type.id)
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
              name="actionDescription"
              value={cardDetails.actionDescription}
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
              name="consequencePositive"
              value={cardDetails.consequencePositive}
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
              name="consequenceNegative"
              value={cardDetails.consequenceNegative}
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
              name="co2Level"
              value={cardDetails.co2Level}
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
              name="natureLevel"
              value={cardDetails.natureLevel}
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
              name="gdpLevel"
              value={cardDetails.gdpLevel}
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
              type="file"
              name="qrCode"
              accept="image/*"
              onChange={handleInputChange}
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
                cardDetails.associatedImage
                  ? `${apiUrl}/images/${cardDetails.associatedImage}`
                  : placehoderImage
              }
              alt=""
              onClick={() => setIsModal(!isModal)}
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-end">
            <Button type="submit">Save Card</Button>
          </div>
        </div>
      </form>
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
                    associatedImage:
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
