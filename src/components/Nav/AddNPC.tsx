import { Add, AddCircle } from "@mui/icons-material";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useContext } from "react";
import { NPCs } from "../../data/tables/NPCs";
import { NavModal } from "./NavModal";
import { NPCsContext } from "../../pages/Home";
import NPCBlock from "../Fichas/NPC";

export function AddNpc() {
  const { npcsShown, setNpcsShown } = useContext(NPCsContext);

  const [selectedNpc, setSelectedNpc] = React.useState<string>(NPCs[0].nome);
  const addNpc = () => {
    const npc = NPCs.find((item) => item.nome === selectedNpc);
    if (npc) {
      setNpcsShown([...npcsShown, npc]);
      localStorage.setItem("npcs", JSON.stringify([...npcsShown, npc]));
    }
  };
  return (
    <>
      <NavModal icon={<Add />} tooltip="Adicionar NPC">
        <FormControl fullWidth>
          <InputLabel>NPC</InputLabel>
          <Select
            label="NPC"
            value={selectedNpc}
            onChange={(e) => {
              setSelectedNpc(e.target.value as string);
            }}
          >
            {NPCs.map((item, index) => (
              <MenuItem key={index} value={item.nome}>
                {item.nome}
              </MenuItem>
            ))}
          </Select>

          <NPCBlock
            NPC={NPCs.find((item) => item.nome === selectedNpc) || NPCs[0]}
            isModal
            />
          <button
            onClick={addNpc}
            className="bg-green-600 p-2 rounded-full hover:scale-110 hover:bg-green-400 transition-all"
          >
            <AddCircle />
          </button>
        </FormControl>
      </NavModal>
    </>
  );
}
