# 🍕 Pizzaria Vitorelli — Cardápio Digital

Cardápio interativo para a Pizzaria Vitorelli, desenvolvido para funcionar no navegador sem necessidade de internet (após o primeiro carregamento).

## 📁 Estrutura de Arquivos

```
vitorelli/
├── index.html   → Estrutura da página (não precisa editar)
├── style.css    → Visual e estilos (não precisa editar)
├── app.js       → Lógica da aplicação (não precisa editar)
└── config.js    → ⭐ ARQUIVO DE CONFIGURAÇÃO — edite aqui!
```

---

## ✏️ Como Atualizar o Cardápio

Edite apenas o arquivo **`config.js`**. Ele está dividido em seções:

### 1. Informações da Pizzaria
```js
pizzaria: {
  nome:     "VITORELLI",
  whatsapp: "5511993407322",  // só números, com DDI e DDD
}
```

### 2. Horário de Funcionamento
```js
horario: {
  diasFechados: [1],   // 0=Dom 1=Seg 2=Ter 3=Qua 4=Qui 5=Sex 6=Sáb
  abreHora:    18,
  fechaHora:   23,
  fechaMinuto: 30,
}
```

### 3. Adicionar um novo sabor
```js
{
  nome:     "Nome da Pizza",
  descricao:"Ingredientes aqui",
  grande:   50,      // preço pizza grande
  broto:    40,      // preço broto (calzone usa este mesmo valor)
  novo:     true,    // exibe faixa "NOVIDADE" (remova ou coloque false para ocultar)
},
```

### 4. Ocultar um sabor sem apagar
```js
{
  nome: "Pizza Temporária",
  ...
  ativo: false,   // ← oculta do cardápio sem precisar apagar
},
```

### 5. Atualizar preço
Localize o sabor pelo `nome` e altere o valor de `grande` ou `broto`.

### 6. Adicionar bairro de entrega
```js
{ nome: "Novo Bairro", taxa: 5 },
```

---

## 🚀 Publicar no GitHub Pages

1. Suba os 4 arquivos para um repositório no GitHub
2. Vá em **Settings → Pages**
3. Em **Source**, selecione `main` e pasta `/ (root)`
4. Clique em **Save**

Seu cardápio estará disponível em:  
`https://seu-usuario.github.io/nome-do-repositorio`

---

## 📲 Funcionalidades

- ✅ Pizzas, Brotos, Calzones e Bebidas
- ✅ Meia-Meia (cobra o maior preço entre os 2 sabores)
- ✅ Calzone com preço de Broto
- ✅ Carrinho com total em tempo real
- ✅ Delivery com taxa por bairro
- ✅ Envio do pedido via WhatsApp
- ✅ Status Aberto/Fechado automático por horário
- ✅ Sugestão de bebida automática
- ✅ Funciona offline (após primeiro carregamento)
