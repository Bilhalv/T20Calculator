import React, { createContext, useState } from "react";
import { Atributos } from "../../data/tables/Atributos";
import { Atributo } from "../../data/constructors/Atributo";
import { Button, IconButton, Input } from "@mui/material";
import { Normalize } from "../../data/functions/Normalize.ts";
import RaceSelect from "../../components/RaceSelect.tsx";

type atributos = {
  forca: number;
  destreza: number;
  constituicao: number;
  inteligência: number;
  sabedoria: number;
  carisma: number;
};

type racaProps = {
  raca: string;
  setRaca: Function;
};
interface ContextProps {
  raca: racaProps;
  atributos: atributos;
}

export const Context = createContext<ContextProps>({
  raca: {} as racaProps,
  atributos: {} as atributos,
});

function AtriutoBlock({
  atributo,
  value,
  setValue,
  pontos,
  setPontos,
}: {
  atributo: Atributo;
  value: number;
  setValue: Function;
  pontos: number;
  setPontos: Function;
}) {
  type pontosTableProps = {
    value: number;
    pontos: number;
  };
  const pontosTable: pontosTableProps[] = [
    { value: -1, pontos: -1 },
    { value: 0, pontos: 1 },
    { value: 1, pontos: 1 },
    { value: 2, pontos: 1 },
    { value: 3, pontos: 2 },
    { value: 4, pontos: 3 },
  ];
  function changeValue(x: number) {
    const newPonto = pontosTable.find((ponto) => ponto.value === x);
    const oldPonto = pontosTable.find((ponto) => ponto.value === value);

    if (!newPonto || !oldPonto) return;

    const diff = value < x ? -newPonto.pontos : oldPonto.pontos;
    if (pontos + diff >= 0) {
      setPontos(pontos + diff);
      setValue(x);
    }
  }
  return (
    <div className="bg-white bg-opacity-50 p-4 rounded-2xl flex gap-2 w-56 flex-col items-center select-none">
      <h1 className="font-bold text-center w-full">
        {atributo.nome.substring(0, 3).toUpperCase()}
      </h1>
      <div className="flex justify-between items-center w-full">
        <IconButton
          onClick={() => {
            changeValue(value + 1);
          }}
          disabled={
            value >= 4 ||
            (pontosTable.find((ponto) => ponto.value === value + 1)?.pontos ||
              0) > pontos
          }
          className="h-10 w-10"
          sx={{
            color: "green",
            border: "2px solid green",
            "&:hover": {
              backgroundColor: "green",
              color: "white",
            },
            "&:disabled": {
              borderColor: "gray",
              cursor: "not-allowed",
            },
          }}
        >
          +
        </IconButton>
        <p
          className={`${
            value > 0 ? "text-green-800" : value < 0 && "text-red-600"
          } font-bold transition-all w-full text-center`}
        >
          {value}
        </p>
        <IconButton
          onClick={() => {
            changeValue(value - 1);
          }}
          className="h-10 w-10"
          sx={{
            color: "red",
            border: "2px solid red",
            "&:hover": {
              backgroundColor: "red",
              color: "white",
            },
            "&:disabled": {
              borderColor: "gray",
              cursor: "not-allowed",
            },
          }}
          disabled={value <= -1}
        >
          -
        </IconButton>
      </div>
    </div>
  );
}

const Home = () => {
  const [raca, setRaca] = useState<string>("");
  const [atributos, setAtributos] = useState<atributos>({
    forca: 0,
    destreza: 0,
    constituicao: 0,
    inteligência: 0,
    sabedoria: 0,
    carisma: 0,
  } as atributos);
  const [pontos, setPontos] = useState<number>(10);

  return (
    <>
      <Context.Provider
        value={{
          raca: {
            raca,
            setRaca,
          },
          atributos,
        }}
      >
        <body className="bg-bg-t20 bg-fixed bg-center p-8 font-tormenta flex flex-col gap-10 min-h-screen">
          <div className="bg-white bg-opacity-50 p-8 rounded-2xl">
            <h1 className="text-4xl font-bold text-center">
              Escolha seus atributos
            </h1>
            <div className="flex justify-between items-center">
              <p className="text-gray-600 italic w-full">{pontos} pontos restantes</p>
              <RaceSelect />
            </div>
            <div className="flex flex-wrap gap-2 items-center justify-center mt-5">
              {Atributos.map((atributo) => {
                return (
                  <AtriutoBlock
                    atributo={atributo}
                    value={atributos[Normalize(atributo.nome.toLowerCase())]}
                    setValue={(value: number) => {
                      setAtributos({
                        ...atributos,
                        [Normalize(atributo.nome.toLowerCase())]: value,
                      });
                    }}
                    pontos={pontos}
                    setPontos={setPontos}
                  />
                );
              })}
            </div>
          </div>
        </body>
      </Context.Provider>
    </>
  );
};

export default Home;
