"use client";
import { AppDispatch, RootState } from "@/redux/store";
import { ArtistState } from "@/types/Artist";
import { CardStackState } from "@/types/CardStack";
import { Language, LanguageState } from "@/types/Language";
import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createCardStack,
  updateCardStack,
  deleteCardStack,
} from "@/redux/slices/cardstack.slice";
import { toast } from "@/hooks/use-toast";
type ChangeCardStackState = {
  name: string;
  languageId: number;
  artistId: number;
};
const CardStacksPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cardstacks: CardStackState = useSelector<RootState, CardStackState>(
    (state) => state.cardstacks
  );
  const artists: ArtistState = useSelector<RootState, ArtistState>(
    (state) => state.artists
  );
  const languages: LanguageState = useSelector<RootState, LanguageState>(
    (state) => state.languages
  );
  const cardStacks = useMemo(() => {
    return cardstacks.cardstacks;
  }, [cardstacks.cardstacks]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedArtist, setSelectedArtist] = useState("");
  console.log({ cardStacks });
  // Filtering logic
  const filteredStacks = cardStacks?.filter(
    (stack) =>
      (searchTerm === "" ||
        stack.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedLanguage === "" ||
        stack.language.language === selectedLanguage) &&
      (selectedArtist === "" || stack.artist.name === selectedArtist)
  );

  // Modal for creating/editing stack
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStack, setCurrentStack] = useState(0);
  const [changeCardStack, setChangeCardStack] =
    useState<ChangeCardStackState>();

  const handleEditStack = (index: number) => {
    setCurrentStack(index);
    const stack = {
      name: filteredStacks[index].name,
      languageId: filteredStacks[index].languageId,
      artistId: filteredStacks[index].artistId,
    };
    setChangeCardStack(stack);
    setIsModalOpen(true);
  };

  const handleDeleteStack = (stackId: number) => {
    if (window.confirm("Are you sure you want to delete this card stack?")) {
      dispatch(deleteCardStack(stackId))
        .then(() => {
          toast({ description: "Card Stack was deleted successfully!" });
        })
        .catch(() => {
          toast({ description: "Failed to delete Card Stack!" });
        });
    }
  };

  const handleCreateNewStack = () => {
    setCurrentStack(-1);
    const stack = {
      name: "",
      languageId: -1,
      artistId: -1,
    };
    setChangeCardStack(stack);
    setIsModalOpen(true);
  };

  const handleSaveStack = () => {
    setIsModalOpen(false);
    if (currentStack == -1) {
      changeCardStack &&
        dispatch(createCardStack(changeCardStack))
          .then(() => {
            toast({ description: "Card Stack was created successfully!" });
          })
          .catch(() => {
            toast({ description: "Failed to create Card Stack!" });
          });
    } else {
      changeCardStack &&
        dispatch(
          updateCardStack({
            ...changeCardStack,
            id: filteredStacks[currentStack].id,
          })
        )
          .then(() => {
            toast({ description: "Card Stack was updated successfully!" });
          })
          .catch(() => {
            toast({ description: "Failed to update Card Stack!" });
          });
    }
    setCurrentStack(-1);
  };

  return (
    <div className="p-6 h-screen overflow-auto">
      <h1 className="text-3xl mb-6">Card Stacks Management</h1>

      {/* Filters and Search */}
      <div className="mb-6 flex space-x-4">
        <input
          type="text"
          placeholder="Search by stack name"
          className="border p-2 rounded flex-grow"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="border p-2 rounded"
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
        >
          <option value="">All Languages</option>
          {languages.languages.map((lang: Language) => (
            <option key={lang.id} value={lang.language}>
              {lang.language}
            </option>
          ))}
        </select>
        <select
          className="border p-2 rounded"
          value={selectedArtist}
          onChange={(e) => setSelectedArtist(e.target.value)}
        >
          <option value="">All Artists</option>
          {artists.artists.map((art) => (
            <option key={art.id} value={art.name}>
              {art.name}
            </option>
          ))}
        </select>
      </div>

      {/* Create New Stack Button */}
      <div className="mb-4">
        <button
          className="bg-green-500 text-white p-2 rounded"
          onClick={handleCreateNewStack}
        >
          Create New Stack
        </button>
      </div>

      {/* Card Stacks Table */}
      <table className="w-full bg-white shadow rounded">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Stack Name</th>
            <th className="p-3 text-left">Languages</th>
            <th className="p-3 text-left">Assigned Artist</th>
            <th className="p-3 text-left">Number of Cards</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStacks?.map((stack, index) => (
            <tr key={stack.id} className="border-b">
              <td className="p-3">{stack.name}</td>
              <td className="p-3">{stack.language.language}</td>
              <td className="p-3">{stack.artist.name}</td>
              <td className="p-3">{40}</td>
              <td className="p-3">
                <button
                  className="bg-blue-500 text-white p-1 rounded mr-2"
                  onClick={() => handleEditStack(index)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white p-1 rounded"
                  onClick={() => handleDeleteStack(stack.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for Create/Edit Stack */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-2xl mb-4">
              {currentStack == -1 ? "Create New Stack" : "Edit Stack"}
            </h2>
            <div className="mb-4">
              <label className="block mb-2">Stack Name</label>
              <input
                type="text"
                className="w-full border p-2 rounded"
                value={changeCardStack?.name}
                onChange={(e) =>
                  changeCardStack &&
                  setChangeCardStack({
                    ...changeCardStack,
                    name: e.target.value,
                  })
                }
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Languages</label>
              <select
                className="w-full border p-2 rounded"
                value={changeCardStack?.languageId}
                onChange={(e) => {
                  changeCardStack &&
                    setChangeCardStack({
                      ...changeCardStack,
                      languageId: Number(e.target.value),
                    });
                }}
              >
                <option value="">Select Language</option>
                {languages.languages.map((lang) => (
                  <option key={lang.id} value={lang.id}>
                    {lang.language}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2">Assigned Artist</label>
              <select
                className="w-full border p-2 rounded"
                value={changeCardStack?.artistId}
                onChange={(e) =>
                  changeCardStack &&
                  setChangeCardStack({
                    ...changeCardStack,
                    artistId: Number(e.target.value),
                  })
                }
              >
                <option value="">Select Artist</option>
                {artists.artists.map((art) => (
                  <option key={art.id} value={art.id}>
                    {art.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                className="bg-gray-300 p-2 rounded"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-green-500 text-white p-2 rounded"
                onClick={handleSaveStack}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardStacksPage;
