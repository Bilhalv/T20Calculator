import { Close } from "@mui/icons-material";
import { Alert, Collapse, IconButton } from "@mui/material";
import React from "react";
import { Context } from "../pages/Home";
import { Racas } from "../data/tables/Racas";
import { Raca } from "../data/constructors/Raca";
import { Normalize } from "../data/functions/Normalize";

export default function AlertFinal() {
  const { atributos, selected, raca } = React.useContext(Context);

  const [open, setOpen] = React.useState(false);

  const selectedRaca: Raca =
    Racas.find(
      (r) =>
        Normalize(r.nome.toLowerCase()) === Normalize(raca.raca.toLowerCase())
    ) || Racas[0];

    const onOpen = () => {
        if (raca.raca === "") {
            alert("Escolha uma raça");
            return;
        }
        if (selectedRaca.escolha && selected.selected.length < 3) {
            alert("Escolha 3 atributos");
            return;
        }
        setOpen(!open);
    }

  return (
    <>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full bg-opacity-50 hover:bg-opacity-100 transition mt-2 mx-auto block w-1/2 text-center"
        onClick={() => onOpen()}
      >
        Processar Conteúdo
      </button>
      <Collapse in={open}>
        <Alert
          icon={false}
          variant="outlined"
          sx={{
            marginTop: "8px",
            backgroundColor: "rgba(255, 255, 255, 0.6)",
          }}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => setOpen(false)}
            >
              <Close fontSize="inherit" />
            </IconButton>
          }
        >
          <table className="text-center table-fixed w-full">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Padrão</th>
                <th>Raca({raca.raca || 1})</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(atributos).map(([key, value]) => {
                let atributoRaca = selectedRaca.atributos?.find(
                  (r) =>
                    Normalize(r.nome.toLowerCase()) ===
                    Normalize(key.toLowerCase())
                );
                let valorRaca = atributoRaca?.valor || 0;
                valorRaca =
                  selectedRaca.escolha &&
                  selected.selected.find(
                    (r) =>
                      Normalize(r.toLowerCase()) ===
                      Normalize(key.toLowerCase())
                  )
                    ? 1
                    : valorRaca;
                return (
                  <tr key={key}>
                    <td className="text-left capitalize">{key}</td>
                    <td>{value}</td>
                    <td>{valorRaca}</td>
                    <td>{value + valorRaca}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Alert>
      </Collapse>
    </>
  );
}
