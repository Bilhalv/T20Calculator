import { Atributo } from "../constructors/Atributo";

export const Atributos: Atributo[] = [
    {
        nome: "Força",
        descricao: "Força é uma medida de quão fisicamente forte seu personagem é. Ele pode ser usado para determinar o dano que seu personagem causa com um ataque corpo a corpo, como um soco, chute ou golpe com uma arma corpo a corpo.",
        pericias: ["Atletismo"]
    },
    {
        nome: "Destreza",
        descricao: "Destreza é uma medida de quão ágil e rápido seu personagem é. Ele pode ser usado para determinar a chance de seu personagem acertar um ataque corpo a corpo, como um soco, chute ou golpe com uma arma corpo a corpo.",
        pericias: ["Acrobacia", "Furtividade", "Prestidigitação"]
    },
    {
        nome: "Constituição",
        descricao: "Constituição é uma medida de quão saudável e resistente seu personagem é. Ele pode ser usado para determinar a quantidade de dano que seu personagem pode suportar antes de ser derrotado.",
        pericias: []
    },
    {
        nome: "Inteligência",
        descricao: "Inteligência é uma medida de quão esperto e instruído seu personagem é. Ele pode ser usado para determinar a quantidade de conhecimento que seu personagem tem sobre um assunto específico.",
        pericias: ["Arcanismo", "História", "Investigação", "Natureza", "Religião"]
    },
    {
        nome: "Sabedoria",
        descricao: "Sabedoria é uma medida de quão perceptivo e sábio seu personagem é. Ele pode ser usado para determinar a quantidade de intuição que seu personagem tem sobre um assunto específico.",
        pericias: ["Intuição", "Medicina", "Percepção", "Sobrevivência"]
    },
    {
        nome: "Carisma",
        descricao: "Carisma é uma medida de quão persuasivo e encantador seu personagem é. Ele pode ser usado para determinar a quantidade de influência que seu personagem tem sobre os outros.",
        pericias: ["Atuação", "Enganação", "Intimidação", "Persuasão"]
    }
]