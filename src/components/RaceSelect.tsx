import { FormControl, InputLabel, Select } from "@mui/material";
import React, { useContext } from "react";
import { Racas } from "../data/tables/Racas";
import { Context } from "../pages/Home";

export default function RaceSelect() {
  const { raca } = useContext(Context);
  return (
    <FormControl fullWidth>
      <InputLabel id="Seleciona a raça">Raça</InputLabel>
      {/*
        TODO fazer o select ser com a label centralizada e estilizada
      */}
      <Select
        value={raca.raca}
        onChange={(e) => {
          raca.setRaca(e.target.value);
        }}
        size="small"
        labelId="Seleciona a raça"
      >
        {Racas.map((x) => (
          <option value={x.nome}>{x.nome}</option>
        ))}
      </Select>
    </FormControl>
  );
}
