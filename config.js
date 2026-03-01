// ╔══════════════════════════════════════════════════════════════╗
// ║              VITORELLI — ARQUIVO DE CONFIGURAÇÃO             ║
// ║   Edite este arquivo para atualizar o cardápio sem tocar     ║
// ║   no código. Salve e envie para o GitHub. Pronto!            ║
// ╚══════════════════════════════════════════════════════════════╝

const CONFIG = {

  // ─────────────────────────────────────────────
  // INFORMAÇÕES DA PIZZARIA
  // ─────────────────────────────────────────────
  pizzaria: {
    nome:      "VITORELLI",
    subtitulo: "Pizzaria Artesanal",
    whatsapp:  "5511993407322",   // só números, com DDI e DDD
    instagram: "",                // ex: "@vitorellipizza" (deixe "" para ocultar)
  },

  // ─────────────────────────────────────────────
  // HORÁRIO DE FUNCIONAMENTO
  // Dias: 0=Dom 1=Seg 2=Ter 3=Qua 4=Qui 5=Sex 6=Sáb
  // ─────────────────────────────────────────────
  horario: {
    diasFechados: [1],      // [1] = fecha na segunda. Ex: fechar sex e sab = [5,6]
    abreHora:    18,        // hora de abertura (formato 24h)
    abreMinuto:  0,
    fechaHora:   23,        // hora de fechamento
    fechaMinuto: 30,
  },

  // ─────────────────────────────────────────────
  // TAXAS DE ENTREGA POR BAIRRO
  // taxa: valor em reais. 0 = grátis
  // ─────────────────────────────────────────────
  bairros: [
    { nome: "Centro",               taxa: 3  },
    { nome: "Chácara Boavista",     taxa: 3  },
    { nome: "Jd. Bom Jesus",        taxa: 3  },
    { nome: "Parque das Avencas",   taxa: 3  },
    { nome: "Vila Nova",            taxa: 3  },
    { nome: "Morro Branco",         taxa: 4  },
    { nome: "Paiol / KM 50",        taxa: 7  },
    { nome: "Green Hills",          taxa: 10 },
  ],

  // ─────────────────────────────────────────────
  // BEBIDAS
  // ─────────────────────────────────────────────
  bebidas: [
    { nome: "Coca-Cola 2L",      descricao: "Refrigerante", preco: 18 },
    { nome: "Coca-Cola Zero 2L", descricao: "Refrigerante", preco: 18 },
    { nome: "Guaraná Kuat 2L",   descricao: "Refrigerante", preco: 12 },
    { nome: "HEINEKEN (Lata)",   descricao: "Cerveja",      preco: 10 },
  ],

  // ─────────────────────────────────────────────
  // SABORES DE PIZZA / BROTO / CALZONE
  //
  // grande: preço da pizza grande
  // broto:  preço do broto (calzone usa este mesmo preço)
  // novo:   true = exibe faixa "NOVIDADE"  |  false ou omitir = normal
  // ativo:  false = oculta o item do cardápio (sem precisar apagar)
  // ─────────────────────────────────────────────
  sabores: [
    {
      nome:     "Mussarela Especial",
      descricao:"Molho, Mussarela, Tomate Seco, Parmesão e Pimenta Calabresa",
      grande:   43,
      broto:    33,
    },
    {
      nome:     "Mussarela",
      descricao:"Molho, Mussarela, Tomate, Azeitona e Orégano",
      grande:   39,
      broto:    29,
    },
    {
      nome:     "Mussapy",
      descricao:"Molho, Mussarela, Tomate, Catupiry, Orégano e Azeitona",
      grande:   45,
      broto:    35,
    },
    {
      nome:     "Calabresa 1",
      descricao:"Molho, Calabresa, Cebola, Azeitona e Orégano",
      grande:   39,
      broto:    29,
    },
    {
      nome:     "Calabresa 2",
      descricao:"Molho, Mussarela, Calabresa, Cebola, Azeitona e Orégano",
      grande:   44,
      broto:    34,
    },
    {
      nome:     "Calabresa 3",
      descricao:"Molho, Calabresa, Pimentão, Parmesão, Azeitona e Orégano",
      grande:   43,
      broto:    33,
    },
    {
      nome:     "Calapy",
      descricao:"Molho, Catupiry, Calabresa, Cebola, Azeitona e Orégano",
      grande:   44,
      broto:    34,
    },
    {
      nome:     "Cabrovo Pepe",
      descricao:"Molho, Calabresa, Ovo, Cebola, Parmesão, Pimenta Calabresa, Azeitona e Orégano",
      grande:   45,
      broto:    35,
    },
    {
      nome:     "Baiana",
      descricao:"Molho, Mussarela, Calabresa Desfiada, Cebola, Ovo, Pimenta Calabresa, Azeitona e Orégano",
      grande:   47,
      broto:    37,
    },
    {
      nome:     "Quatro Queijos",
      descricao:"Molho, Mussarela, Parmesão, Provolone e Gorgonzola",
      grande:   48,
      broto:    38,
    },
    {
      nome:     "Cinco Queijos",
      descricao:"Molho, Mussarela, Parmesão, Provolone, Gorgonzola e Catupiry",
      grande:   50,
      broto:    40,
    },
    {
      nome:     "Abobrinha 1",
      descricao:"Molho, Mussarela, Abobrinha, Alho Frito e Orégano",
      grande:   41,
      broto:    31,
    },
    {
      nome:     "Abobrinha 2",
      descricao:"Molho, Mussarela, Abobrinha, Pimenta Calabresa e Orégano",
      grande:   41,
      broto:    31,
    },
    {
      nome:     "Alho",
      descricao:"Molho, Mussarela e Alho Frito",
      grande:   45,
      broto:    35,
    },
    {
      nome:     "Aliche",
      descricao:"Molho, Mussarela, Aliche e Tomate",
      grande:   49,
      broto:    39,
    },
    {
      nome:     "Americana",
      descricao:"Molho, Mussarela, Lombinho, Pimentão, Champignon e Tomate Cereja",
      grande:   50,
      broto:    40,
    },
    {
      nome:     "Atum 1",
      descricao:"Molho, Atum e Cebola",
      grande:   46,
      broto:    36,
    },
    {
      nome:     "Atum 2",
      descricao:"Molho, Mussarela, Atum e Cebola",
      grande:   48,
      broto:    38,
    },
    {
      nome:     "Bacon",
      descricao:"Molho, Mussarela e Bacon",
      grande:   45,
      broto:    35,
    },
    {
      nome:     "Frango Catupiry",
      descricao:"Molho, Frango e Catupiry",
      grande:   47,
      broto:    37,
    },
    {
      nome:     "Gênova",
      descricao:"Molho, Mussarela, Provolone, Presunto e Molho Pesto",
      grande:   48,
      broto:    38,
    },
    {
      nome:     "Lombinho",
      descricao:"Molho, Mussarela, Lombinho e Provolone",
      grande:   47,
      broto:    37,
    },
    {
      nome:     "Peperonni 1",
      descricao:"Molho, Mussarela, Peperonni e Azeitona",
      grande:   50,
      broto:    40,
    },
    {
      nome:     "Peperonni 2",
      descricao:"Molho, Mussarela, Peperonni, Catupiry, Azeitona",
      grande:   55,
      broto:    45,
      novo:     true,
    },
    {
      nome:     "Romana",
      descricao:"Molho, Mussarela, Aliche e Tomate",
      grande:   50,
      broto:    40,
    },
    {
      nome:     "Rústica",
      descricao:"Molho, Mussarela, Parmesão, Sobre Molho, Orégano e Azeitona",
      grande:   43,
      broto:    33,
    },
    {
      nome:     "Brócolis",
      descricao:"Molho, Brócolis, Mussarela, Bacon, Azeitona e Orégano",
      grande:   48,
      broto:    38,
    },
    {
      nome:     "Brócolis 2",
      descricao:"Molho, Brócolis, Mussarela, Alho, Bacon, Azeitona e Orégano",
      grande:   49,
      broto:    39,
    },
    {
      nome:     "Libanese",
      descricao:"Molho, Mussarela, Zatar (Tempero Árabe), Tomate e Azeitona",
      grande:   41,
      broto:    31,
      novo:     true,
    },
    {
      nome:     "Banana",
      descricao:"Banana, Açúcar, Doce de Leite e Canela",
      grande:   41,
      broto:    31,
    },
    {
      nome:     "Anita e Garibaldi",
      descricao:"Parmesão, Mussarela e Goiabada",
      grande:   45,
      broto:    35,
    },
    {
      nome:     "Ovomaltine",
      descricao:"Ovomaltine, Ovomaltine Rocks",
      grande:   55,
      broto:    45,
      novo:     true,
    },
    {
      nome:     "Marguerita",
      descricao:"Molho, Mussarela, Parmesão, Tomate, Manjericão, Azeitona e Orégano",
      grande:   41,
      broto:    31,
    },
    {
      nome:     "Marguerita Pesto",
      descricao:"Molho, Mussarela, Parmesão, Tomate, Molho Pesto, Azeitona e Orégano",
      grande:   42,
      broto:    31,
      novo:     true,
    },
    {
      nome:     "Marguedôro",
      descricao:"Molho, Mussarela, Parmesão, Tomate, Manjericão, Azeitona, Alho e Orégano",
      grande:   42,
      broto:    32,
      novo:     true,
    },
    {
      nome:     "Palmitôsa",
      descricao:"Molho, Mussarela, Palmito, Catupiry, Azeitona e Orégano",
      grande:   50,
      broto:    40,
    },
    {
      nome:     "Portuguesa",
      descricao:"Molho, Mussarela, Presunto, Ovo, Ervilha, Tomate, Cebola e Azeitona",
      grande:   50,
      broto:    40,
    },
    {
      nome:     "Rúcula",
      descricao:"Molho, Mussarela, Rúcula e Tomate Seco",
      grande:   47,
      broto:    37,
    },
    {
      nome:     "Toscana",
      descricao:"Molho, Mussarela, Linguiça Calabresa Moída e Tomate",
      grande:   45,
      broto:    35,
    },
  ],

}; // fim CONFIG — não apague esta linha
