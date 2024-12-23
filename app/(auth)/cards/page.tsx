"use client";
import { AppDispatch, RootState } from "@/redux/store";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "@/hooks/use-toast";
import { Group, GroupState } from "@/types/Group";
import { EventSubGroupState } from "@/types/EventSubGroup";
import { useRouter } from "next/navigation";
import { Card, CardState } from "@/types/Card";
import { DeleteIcon, Edit, Eye, X } from "lucide-react";
import Image from "next/image";
import { apiUrl } from "@/redux/apiConfig";
import QRCodeGenerator from "@/components/QRCodeGenerator";
import { Button } from "@/components/ui/button";
import { deleteCard } from "@/redux/slices/card.slice";
const CardStacksPage = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const groups: GroupState = useSelector<RootState, GroupState>(
    (state) => state.groups
  );
  const cards: CardState = useSelector<RootState, CardState>(
    (state) => state.cards
  );
  const subGroups: EventSubGroupState = useSelector<
    RootState,
    EventSubGroupState
  >((state) => state.subGroups);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("");
  const [selectedSubGroup, setSelectedSubGroup] = useState("");
  const [viewModal, setViewModal] = useState(-1);
  // Filtering logic
  const handleDelete = (id: number) => {
    dispatch(deleteCard(id))
      .then(() => {
        toast({ description: "Card was deleted successfully!" });
      })
      .catch(() => {
        toast({ description: "Failed to delete Card!" });
      });
  };
  return (
    <div className="p-6 h-screen overflow-auto">
      <h1 className="text-3xl mb-6">Cards Management</h1>

      {/* Filters and Search */}
      <div className="mb-6 flex space-x-4">
        <input
          type="text"
          placeholder="Search by Card name"
          className="border p-2 rounded flex-grow"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="border p-2 rounded"
          value={selectedGroup}
          onChange={(e) => setSelectedGroup(e.target.value)}
        >
          <option value="">Group</option>
          {groups.groups.map((group: Group) => (
            <option key={group.id} value={group.groupName}>
              {group.groupName}
            </option>
          ))}
        </select>
        <select
          className="border p-2 rounded"
          value={selectedSubGroup}
          onChange={(e) => setSelectedSubGroup(e.target.value)}
        >
          <option value="">All SubGroup</option>
          {subGroups.eventSubGroups.map((subGroup) => (
            <option key={subGroup.id} value={subGroup.subGroupName}>
              {subGroup.subGroupName}
            </option>
          ))}
        </select>
      </div>

      {/* Create New Stack Button */}
      <div className="mb-4">
        <button
          className="bg-green-500 text-white p-2 rounded"
          onClick={() => router.push("/card-details")}
        >
          Create New Card
        </button>
      </div>

      {/* Card Stacks Table */}
      <table className="w-full bg-white shadow rounded">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Card</th>
            <th className="p-3 text-left">Group</th>
            <th className="p-3 text-left">Sub Group</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        {cards.cards && (
          <tbody>
            {cards.cards.map((card: Card, index) => (
              <tr>
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{card.group.groupName}</td>
                <td className="p-3">
                  {card.event_sub_groupId
                    ? card.event_sub_group.subGroupName
                    : ""}
                </td>
                <td className="p-3">
                  <button
                    className="text-black p-1 rounded mr-2"
                    onClick={() => setViewModal(index)}
                  >
                    <Eye size={20} />
                  </button>
                  <button
                    className="text-black p-1 rounded mr-2"
                    onClick={() =>
                      router.push(`/card-details?mode=edit&id=${index}`)
                    }
                  >
                    <Edit size={20} />
                  </button>
                  <button
                    className="text-black p-1 rounded mr-2"
                    onClick={() => handleDelete(card.id)}
                  >
                    <DeleteIcon size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
      {viewModal != -1 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg w-2/3 h-5/6 relative p-5">
            <button
              onClick={() => setViewModal(-1)}
              className="absolute right-5"
            >
              <X />
            </button>
            <div className="flex flex-col lg:flex-row gap-5 w-full h-full p-5">
              <div className="w-full lg:w-1/3 h-full bg-[#00A89D] shadow-2xl">
                <div className="w-full py-12 h-full flex flex-col">
                  <Image
                    src={`${apiUrl}/images/${cards.cards[viewModal].image}`}
                    width={300}
                    height={300}
                    className="w-full"
                    alt=""
                  />
                  <div className="w-full bg-white h-full py-3">
                    <QRCodeGenerator text={cards.cards[viewModal].qrcode} />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between w-2/3">
                <div className="flex flex-col text-md gap-5">
                  <div className="text-xl">{cards.cards[viewModal].name}</div>
                  <div className="grid grid-cols-2 gap-20">
                    <div className="flex flex-row justify-between">
                      <div className="font-bold">Language: </div>
                      <div>{cards.cards[viewModal].language.language}</div>
                    </div>
                    <div className="flex flex-row justify-between">
                      <div className="font-bold">Artist: </div>
                      <div>{cards.cards[viewModal].artist.name}</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2  gap-20">
                    <div className="flex flex-row justify-between">
                      <div className="font-bold">Group: </div>
                      <div>{cards.cards[viewModal].group.groupName}</div>
                    </div>
                    <div className="flex flex-row justify-between">
                      <div className="font-bold">Sub Group: </div>
                      <div>
                        {cards.cards[viewModal].event_sub_group?.subGroupName}
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2  gap-20">
                    <div className="flex flex-row justify-between">
                      <div className="font-bold">Type: </div>
                      <div>{cards.cards[viewModal].type.typeName}</div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="font-bold">Scene: </div>
                    <div>{cards.cards[viewModal].scene || "N/A"}</div>
                  </div>
                  <div className="flex flex-col">
                    <div className="font-bold">Action Description: </div>
                    <div>{cards.cards[viewModal].action || "N/A"}</div>
                  </div>
                  <div className="flex flex-col">
                    <div className="font-bold">Positive Consequence: </div>
                    <div>
                      {cards.cards[viewModal].consequence_positive || "N/A"}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="font-bold">Negative Consequence: </div>
                    <div>
                      {cards.cards[viewModal].consequence_negative || "N/A"}
                    </div>
                  </div>
                  <div className="grid grid-cols-2  gap-20">
                    <div className="flex flex-row justify-between">
                      <div className="font-bold">CO2 Level: </div>
                      <div>{cards.cards[viewModal].co2_level_number}</div>
                    </div>
                    <div className="flex flex-row justify-between">
                      <div className="font-bold">Nature Level: </div>
                      <div>{cards.cards[viewModal].nature_level_number}</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2  gap-20">
                    <div className="flex flex-row justify-between">
                      <div className="font-bold">GDP Level: </div>
                      <div>{cards.cards[viewModal].gdp_level_number}</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-5 justify-end">
                  <Button className="bg-yellow-500">Edit</Button>
                  <Button className="bg-red-500">Delete</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardStacksPage;
