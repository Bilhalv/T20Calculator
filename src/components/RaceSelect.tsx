import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useContext } from "react";
import { Racas } from "../data/tables/Racas";
import { Context } from "../pages/Home";

export default function RaceSelect() {
  const { raca } = useContext(Context);
  return (
    <FormControl fullWidth className="">
      <InputLabel id="Seleciona a raça">Raça</InputLabel>
      <Select
        color="error"
        value={raca.raca}
        onChange={(e) => {
          raca.setRaca(e.target.value);
        }}
        size="medium"
        labelId="Seleciona a raça"
      >
        {Racas.map((x) => (
          <MenuItem value={x.nome}>{x.nome}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
