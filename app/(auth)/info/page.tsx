"use client";
import React, { useEffect, useMemo, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { ArtistState } from "@/types/Artist";
import { AppDispatch, RootState } from "@/redux/store";
import { LanguageState } from "@/types/Language";
import { useDispatch, useSelector } from "react-redux";
import { createLanguage, deleteLanguage } from "@/redux/slices/language.slice";
import { toast } from "@/hooks/use-toast";
import { createArtist } from "@/redux/slices/artist.slice";

const InfoPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const artist: ArtistState = useSelector<RootState, ArtistState>(
    (state) => state.artist
  );
  const language: LanguageState = useSelector<RootState, LanguageState>(
    (state) => state.language
  );
  const [newLanguage, setNewLanguage] = useState("");
  const languages = useMemo(() => language.language, [language]);
  const artists = useMemo(() => artist.artist, [artist]);

  const [newArtist, setNewArtist] = useState({ name: "", link: "" });

  const [variables, setVariables] = useState([
    { name: "CO2 Levels", currentRange: "0-100", threshold: "Max 75" },
    { name: "Nature Impact", currentRange: "0-100", threshold: "Min 50" },
    { name: "GDP Impact", currentRange: "0-100", threshold: "Min 30" },
  ]);

  // Language Management
  const addLanguage = () => {
    if (
      newLanguage &&
      !languages.some((lang) => lang.language === newLanguage)
    ) {
      dispatch(createLanguage(newLanguage))
        .then(() => {
          toast({ description: "Language was created successfully!" });
        })
        .catch(() => {
          toast({ description: "Failed to create Language!" });
        });
      setNewLanguage("");
    }
  };

  const removeLanguage = (languageToRemove: number) => {
    dispatch(deleteLanguage(languageToRemove))
      .then(() => {
        toast({ description: "Language was removed successfully!" });
      })
      .catch(() => {
        toast({ description: "Failed to remove Language!" });
      });
  };

  // Artist Management
  const addArtist = () => {
    if (newArtist.name && newArtist.link) {
      dispatch(createArtist(newArtist))
        .then(() => {
          toast({ description: "Artist was created successfully!" });
        })
        .catch(() => {
          toast({ description: "Failed to create Artist!" });
        });
      setNewArtist({ name: "", link: "" });
    }
  };

  // Variables Management
  const updateVariableThreshold = (index: number, newThreshold: string) => {
    const updatedVariables = [...variables];
    updatedVariables[index].threshold = newThreshold;
    setVariables(updatedVariables);
  };

  return (
    <div className="p-6 h-screen overflow-auto">
      <h1 className="text-3xl mb-6">Game Information Management</h1>
      <Tabs defaultValue="languages">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="languages">
            <span className="py-1">Languages</span>
          </TabsTrigger>
          <TabsTrigger value="artists">
            <span className="py-1">Artists</span>
          </TabsTrigger>
          <TabsTrigger value="variables">
            <span className="py-1">Variables</span>
          </TabsTrigger>
        </TabsList>

        {/* Languages Tab */}
        <TabsContent value="languages">
          <Card>
            <CardContent className="pt-6">
              <div className="flex mb-4">
                <Input
                  placeholder="Enter new language"
                  value={newLanguage}
                  onChange={(e) => setNewLanguage(e.target.value)}
                  className="mr-2"
                />
                <Button onClick={addLanguage}>Add Language</Button>
              </div>
              <div className="w-full border rounded">
                <div className="grid grid-cols-2 bg-gray-100 font-bold p-2 border-b">
                  <div>Language</div>
                  <div className="text-right">Actions</div>
                </div>
                {languages.map((language) => (
                  <div
                    key={language.id}
                    className="grid grid-cols-2 p-2 border-b items-center"
                  >
                    <div>{language.language}</div>
                    <div className="text-right">
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => removeLanguage(language.id)}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Artists Tab */}
        <TabsContent value="artists">
          <Card>
            <CardContent className="pt-6">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="mb-4">Add New Artist</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New Artist</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div>
                      <label className="block mb-2">Artist Name</label>
                      <Input
                        value={newArtist.name}
                        onChange={(e) =>
                          setNewArtist((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                        placeholder="Enter artist name"
                      />
                    </div>
                    <div>
                      <label className="block mb-2">Profile Link</label>
                      <Input
                        value={newArtist.link}
                        onChange={(e) =>
                          setNewArtist((prev) => ({
                            ...prev,
                            link: e.target.value,
                          }))
                        }
                        placeholder="Optional profile link"
                      />
                    </div>
                    <Button onClick={addArtist}>Save Artist</Button>
                  </div>
                </DialogContent>
              </Dialog>
              <div className="w-full border rounded">
                <div className="grid grid-cols-3 bg-gray-100 font-bold p-2 border-b">
                  <div>Name</div>
                  <div>Cards Contributed</div>
                  <div className="text-right">Profile</div>
                </div>
                {artists.map((artist) => (
                  <div
                    key={artist.name}
                    className="grid grid-cols-3 p-2 border-b items-center"
                  >
                    <div>{artist.name}</div>
                    <div>{artist.Card.length}</div>
                    <div className="text-right">
                      <Button
                        variant="link"
                        onClick={() => window.open(`${artist.link}`, "_blank")}
                      >
                        View Profile
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Variables Tab */}
        <TabsContent value="variables">
          <Card>
            <CardContent className="pt-6">
              <div className="w-full border rounded">
                <div className="grid grid-cols-4 bg-gray-100 font-bold p-2 border-b">
                  <div>Variable</div>
                  <div>Current Range</div>
                  <div>Threshold</div>
                  <div className="text-right">Actions</div>
                </div>
                {variables.map((variable, index: number) => (
                  <div
                    key={variable.name}
                    className="grid grid-cols-4 p-2 border-b items-center"
                  >
                    <div>{variable.name}</div>
                    <div>{variable.currentRange}</div>
                    <div>
                      <Input
                        value={variable.threshold}
                        onChange={(e) =>
                          updateVariableThreshold(index, e.target.value)
                        }
                      />
                    </div>
                    <div className="text-right">
                      <Button variant="outline" size="sm">
                        Update
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default InfoPage;
