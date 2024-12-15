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

const CardDetailsPage = () => {
  // Placeholder data (would typically come from backend/context)
  const languages = ["English", "Spanish", "French", "German"];
  const artists = ["Artist 1", "Artist 2", "Artist 3"];
  const groups = ["Group A", "Group B", "Group C"];
  const subGroups = ["Sub Group 1", "Sub Group 2", "Sub Group 3"];
  const images = ["Image 1", "Image 2", "Image 3"];

  const [cardDetails, setCardDetails] = useState({
    cardId: "", // auto-generated
    cardName: "",
    language: "",
    artist: "",
    group: "",
    subGroup: "",
    type: "",
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

  const handleSelectChange = (name: string, value: string) => {
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
          {/* Card ID (auto-generated, read-only) */}
          <div>
            <label className="block text-sm font-medium mb-2">Card ID</label>
            <Input
              name="cardId"
              value={cardDetails.cardId}
              placeholder="Auto-generated"
              readOnly
            />
          </div>

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
              onValueChange={(value) => handleSelectChange("language", value)}
              value={cardDetails.language}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Language" />
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
                  <SelectItem key={lang} value={lang}>
                    {lang}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Artist Dropdown */}
          <div>
            <label className="block text-sm font-medium mb-2">Artist</label>
            <Select
              onValueChange={(value) => handleSelectChange("artist", value)}
              value={cardDetails.artist}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Artist" />
              </SelectTrigger>
              <SelectContent>
                {artists.map((artist) => (
                  <SelectItem key={artist} value={artist}>
                    {artist}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Group Dropdown */}
          <div>
            <label className="block text-sm font-medium mb-2">Group</label>
            <Select
              onValueChange={(value) => handleSelectChange("group", value)}
              value={cardDetails.group}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Group" />
              </SelectTrigger>
              <SelectContent>
                {groups.map((group) => (
                  <SelectItem key={group} value={group}>
                    {group}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Sub-Group Dropdown */}
          <div>
            <label className="block text-sm font-medium mb-2">Sub-Group</label>
            <Select
              onValueChange={(value) => handleSelectChange("subGroup", value)}
              value={cardDetails.subGroup}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Sub-Group" />
              </SelectTrigger>
              <SelectContent>
                {subGroups.map((subGroup) => (
                  <SelectItem key={subGroup} value={subGroup}>
                    {subGroup}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Type */}
          <div>
            <label className="block text-sm font-medium mb-2">Type</label>
            <Select
              onValueChange={(value) => handleSelectChange("type", value)}
              value={cardDetails.type}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Action">Action</SelectItem>
                <SelectItem value="Event">Event</SelectItem>
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
            <Select
              onValueChange={(value) =>
                handleSelectChange("associatedImage", value)
              }
              value={cardDetails.associatedImage}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Image" />
              </SelectTrigger>
              <SelectContent>
                {images.map((image) => (
                  <SelectItem key={image} value={image}>
                    {image}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-end">
            <Button type="submit">Save Card</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CardDetailsPage;
