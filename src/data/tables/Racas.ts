import { Raca } from "../constructors/Raca";

/*
    Humano +1 em três atributos diferentes
Anão Con +2, Sab +1, Des –1
Dahllan Sab +2, Des +1, Int –1
Elfo Int +2, Des +1, Con –1
Goblin Des +2, Int +1, Car –1
Lefou +1 em três atributos diferentes
(exceto Car), Car –1
Minotauro For +2, Con +1, Sab –1
Qareen Car +2, Int +1, Sab –1
Golem For +2, Con +1, Car –1
Hynne Des +2, Car +1, For –1
Kliren Int +2, Car +1, For –1
Medusa Des +2, Car +1
Osteon +1 em três atributos diferentes
(exceto Con), Con –1
Sereia/Tritão +1 em três atributos diferentes
Sílfide Car +2, Des +1, For –2
Suraggel Sab +2, Car +1 (aggelus)
ou Des +2, Int +1 (sulfure)
Trog Con +2, For +1, Int –1
*/

export const Racas: Raca[] = [
    {
        nome: "Humano",
        descricao: "",
        atributos: [],
        escolha: true
    },
    {
        nome: "Anão",
        descricao: "",
        atributos: [
            { nome: "Constituição", valor: 2 },
            { nome: "Sabedoria", valor: 1 },
            { nome: "Destreza", valor: -1 }
        ]
    },
    {
        nome: "Dahllan",
        descricao: "",
        atributos: [
            { nome: "Sabedoria", valor: 2 },
            { nome: "Destreza", valor: 1 },
            { nome: "Inteligência", valor: -1 }
        ]
    },
    {
        nome: "Elfo",
        descricao: "",
        atributos: [
            { nome: "Inteligência", valor: 2 },
            { nome: "Destreza", valor: 1 },
            { nome: "Constituição", valor: -1 }
        ]
    },
    {
        nome: "Goblin",
        descricao: "",
        atributos: [
            { nome: "Destreza", valor: 2 },
            { nome: "Inteligência", valor: 1 },
            { nome: "Carisma", valor: -1 }
        ]
    },
    {
        nome: "Lefou",
        descricao: "",
        atributos: [
            { nome: "Carisma", valor: -1 },
        ],
        escolha: true
    },
    {
        nome: "Minotauro",
        descricao: "",
        atributos: [
            { nome: "Força", valor: 2 },
            { nome: "Constituição", valor: 1 },
            { nome: "Sabedoria", valor: -1 }
        ]
    },
    {
        nome: "Qareen",
        descricao: "",
        atributos: [
            { nome: "Carisma", valor: 2 },
            { nome: "Inteligência", valor: 1 },
            { nome: "Sabedoria", valor: -1 }
        ]
    },
    {
        nome: "Golem",
        descricao: "",
        atributos: [
            { nome: "Força", valor: 2 },
            { nome: "Constituição", valor: 1 },
            { nome: "Carisma", valor: -1 }
        ]
    },
    {
        nome: "Hynne",
        descricao: "",
        atributos: [
            { nome: "Destreza", valor: 2 },
            { nome: "Carisma", valor: 1 },
            { nome: "Força", valor: -1 }
        ]
    },
    {
        nome: "Kliren",
        descricao: "",
        atributos: [
            { nome: "Inteligência", valor: 2 },
            { nome: "Carisma", valor: 1 },
            { nome: "Força", valor: -1 }
        ]
    },
    {
        nome: "Medusa",
        descricao: "",
        atributos: [
            { nome: "Destreza", valor: 2 },
            { nome: "Carisma", valor: 1 }
        ]
    },
    {
        nome: "Osteon",
        descricao: "",
        atributos: [
            { nome: "Constituição", valor: -1 },
        ],
        escolha: true
    },
    {
        nome: "Sereia/Tritão",
        descricao: "",
        atributos: [],
        escolha: true
    },
    {
        nome: "Sílfide",
        descricao: "",
        atributos: [
            { nome: "Carisma", valor: 2 },
            { nome: "Destreza", valor: 1 },
            { nome: "Força", valor: -2 }
        ]
    },
    {
        nome: "Suraggel (aggelus)",
        descricao: "",
        atributos: [
            { nome: "Sabedoria", valor: 2 },
            { nome: "Carisma", valor: 1 }
        ]
    },
    {
        nome: "Suraggel (sulfure)",
        descricao: "",
        atributos: [
            { nome: "Destreza", valor: 2 },
            { nome: "Inteligência", valor: 1 }
        ]
    },
    {
        nome: "Trog",
        descricao: "",
        atributos: [
            { nome: "Constituição", valor: 2 },
            { nome: "Força", valor: 1 },
            { nome: "Inteligência", valor: -1 }
        ]
    }
]