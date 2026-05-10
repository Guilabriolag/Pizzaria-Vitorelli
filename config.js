const sabores = [
    { n: "Mussarela Especial", d: "Molho, Mussarela, Tomate Seco, Parmesão e Pimenta Calabresa", g: 45, b: 33 },
    { n: "Mussarela", d: "Molho, Mussarela, Tomate, Azeitona e Orégano", g: 42, b: 29 },
    { n: "Mussapy", d: "Molho, Mussarela, Tomate, Catupiry, orégano e azeitona", g: 48, b: 35 },
    { n: "Calabresa 1", d: "Molho, Calabresa, Cebola, Azeitona e Orégano", g: 40, b: 29 },
    { n: "Calabresa 2", d: "Molho, Mussarela, calabresa, Cebola, Azeitona e Orégano", g: 44, b: 34 },
    { n: "Calabresa 3", d: "Molho, Calabresa, Pimentão, parmesão, Azeitona e Orégano", g: 43, b: 33 },
    { n: "Calapiry", d: "Molho, Catupiry, Calabresa, Cebola, Azeitona e Orégano", g: 47, b: 34 },
    { n: "Cabrovo pepe", d: "Molho, Calabresa, Ovo, Cebola, Parmesão, Pimenta Calabresa, Azeitona e Orégano", g: 49, b: 35 },
    { n: "Baiana", d: "Molho, Mussarela, calabresa desfiada, cebola, ovo, pimenta calabresa, azeitona e Orégano", g: 47, b: 37 },
    { n: "Quatro Queijos", d: "Molho, Mussarela, Parmesão, Provolone e Gorgonzola", g: 50, b: 38 },
    { n: "Cinco Queijos", d: "Molho, Mussarela, Parmesão, Provolone, Gorgonzola e Catupiry", g: 54, b: 40 },
    { n: "Abobrinha 1", d: "Molho, Mussarela, Abobrinha, Alho Frito e Orégano", g: 44, b: 31 },
    { n: "Abobrinha 2", d: "Molho, Mussarela, Abobrinha, Pimenta Calabresa e Orégano", g: 44, b: 31 },
    { n: "Alho", d: "Molho, Mussarela e Alho frito", g: 43, b: 33 },
    { n: "Aliche", d: "Molho, Mussarela, Aliche e Tomate", g: 49, b: 39 },
    { n: "Aliche 2", d: "Molho, Mussarela, Aliche e Cheiro Verde", g: 50, b: 40 },
    { n: "Americana", d: "Molho, Mussarela, Lombinho, Pimentão, Champignon e Tomate cereja", g: 55, b: 42 },
    { n: "Atum 1", d: "Molho, Atum, Cebola, Oregano e Azeitonas", g: 48, b: 37 },
    { n: "Atum 2", d: "Molho, Mussarela, Atum, Cebola, Oregano e Azeitonas", g: 53, b: 39 },
    { n: "Atum 3", d: "Molho, Catupiry, Atum, Cebola, Oregano e Azeitonas", g: 53, b: 39 },
    { n: "Bacon", d: "Molho, Mussarela e Bacon", g: 47, b: 36 },
    { n: "Bacon 2", d: "Molho, Mussarela, Bacon, Tomate cereja, Alho, Oregano e Azeitonas", g: 49, b: 38 },
    { n: "Frango Catupiry", d: "Molho, Frango e Catupiry", g: 50, b: 39 },
    { n: "Frango Bacon", d: "Molho, Frango, Catupiry, Bacon, Oregano e Azeitonas", g: 54, b: 40 },
    { n: "Gênova", d: "Molho, Mussarela, Provolone, Presunto e Molho Pesto", g: 50, b: 39 },
    { n: "Gênova 2 ", d: "Molho, Mussarela, Lombinho, Provolone,  Molho Pesto, Oregano e Azeitonas ", g: 50, b: 39 },
    { n: "Lombinho", d: "Molho, Mussarela, Lombinho e Provolone", g: 48, b: 38 },
    { n: "Peperonni 1", d: "Molho, Mussarela, Peperonni e azeitona", g: 52, b: 40 },
    { n: "Peperonni 2", d: "Molho, Mussarela, Peperonni, Catupiry, azeitona", g: 56, b: 45 },
    { n: "Romana", d: "Molho, Mussarela, Aliche e Tomate", g: 50, b: 40 },
    { n: "Rústica", d: "Molho, Mussarela, Parmesão, sobre molho, orégano e azeitona", g: 46, b: 33 },
    { n: "Brócolis", d: "Molho, Brócolis, Mussarela, Bacon, azeitona e orégano", g: 50, b: 38 },
    { n: "Brócolis 2", d: "Molho, Brócolis, Mussarela, alho, Bacon, azeitona e orégano", g: 52, b: 39 },
    { n: "Libanese", d: "Molho, Mussarela, Zatar (tempero árabe), Tomate e azeitona", g: 45, b: 31 },
    { n: "Banana", d: "Banana, Açúcar, Doce de leite e Canela", g: 42, b: 31 },
    { n: "Anita e Garibaldi", d: "Parmesão, Mussarela e Goiabada", g: 46, b: 35 },
    { n: "Ovomaltine", d: "Ovomaltine, ovomaltine Rocks", g: 60, b: 45 },
    { n: "Marguerita", d: "Molho, Mussarela, Parmesão Tomate, Manjericão Azeitona e Orégano", g: 46, b: 31 },
    { n: "Marguerita Pesto", d: "Molho, Mussarela, Parmesão Tomate, Molho Pesto Azeitona e Orégano", g: 46, b: 31 },
    { n: "Marguedôro", d: "Molho, Mussarela, Parmesão, Tomate, manjericão, Azeitona, alho e Orégano", g: 47, b: 32 },
    { n: "Palmitôsa", d: "Molho, Palmito, Parmesão, Calabresa, Catupiry, Azeitona e Orégano", g: 48, b: 36 },
    { n: "Potatôsa", d: "Molho, Batata, Parmesão, Calabresa, Catupiry, Azeitona e Orégano", g: 48, b: 36 },
    { n: "Potatôsa 2", d: "Molho, Batata, Parmesão, Bacon, Catupiry, Azeitona e Orégano", g: 48, b: 36 },
    { n: "Portuguesa", d: "Molho, Mussarela, presunto, ovo, ervilha, tomate, cebola e azeitona", g: 53, b: 40 },
    { n: "Pomodoro", d: "Molho, Parmesão, Alho frito, Tomate, Oregano e azeitona", g: 47, b: 35 },
    { n: "Rúcula & Tomate Seco", d: "Molho, Mussarela, Rúcula e Tomate Seco", g: 48, b: 37 },
    { n: "Escarola", d: "Molho, Mussarela, Escarola, Alho, Parmesão, Oregano e Azeitonas ", g: 48, b: 37 },
    { n: "Toscana", d: "Molho, Mussarela, Linguiça calabresa desfiada e Tomate", g: 48, b: 36 },
    { n: "Toscana 2", d: "Molho, Mussarela, Linguiça calabresa desfiada, Provolone, Alecrim, Cebola, oregano e azeitonas", g: 50, b: 37 },
];

const bebidas = [
    { n: "Coca-Cola 2L", d: "Refrigerante", p: 18 },
    { n: "Coca-Cola Zero 2L", d: "Refrigerante", p: 18 },
    { n: "Guaraná Antartica 2L", d: "Refrigerante", p: 18 },
    { n: "HEINEKEN (Lata)", d: "Cerveja", p: 8 }
];

let catAtual = 'pizza';
let modoMeia = false;
let meiaLista = [];
let contador = 0;

function selecionar(c) {
    catAtual = c;
    document.querySelectorAll('.btn-nav').forEach(b => b.classList.remove('active'));
    document.getElementById('btn-'+c).classList.add('active');
    
    const subnav = document.getElementById('subnav');
    if (c === 'calzone' || c === 'bebidas') {
        subnav.style.display = 'none';
        mostrar('inteira');
    } else {
        subnav.style.display = 'flex';
        mostrar('inteira');
    }
}

function mostrar(tipo) {
    modoMeia = (tipo === 'meia');
    document.getElementById('btn-inteira').classList.toggle('active', tipo === 'inteira');
    document.getElementById('btn-meia').classList.toggle('active', tipo === 'meia');
    const container = document.getElementById('sabores');
    container.innerHTML = '';
    const lista = (catAtual === 'bebidas') ? bebidas : sabores;

    lista.forEach(s => {
        let preco = (catAtual === 'bebidas') ? s.p : (catAtual === 'pizza' ? s.g : s.b);
        container.innerHTML += `
            <div class="item-card">
                <h3>${s.n}</h3><p>${s.d}</p>
                <div class="price-row">
                    <span style="font-weight:900; font-size:1.5rem">R$ ${preco.toFixed(2)}</span>
                    <button class="btn-add" onclick="adicionar('${s.n}', ${preco})">ADD +</button>
                </div>
            </div>`;
    });
}

function adicionar(n, p) {
    const cart = document.getElementById('pedido');
    if(modoMeia) {
        meiaLista.push({n, p});
        showCustomAlert("METADE 1/2", Sabor: ${n}. Escolha a segunda.);
        if(meiaLista.length === 2) {
            let finalP = Math.max(meiaLista[0].p, meiaLista[1].p);
            let label = catAtual === 'pizza' ? "Pizza Meia-a-meia" : "Broto Meia-a-meia";
            cart.value += ${label}: ${meiaLista[0].n} & ${meiaLista[1].n} - R$ ${finalP.toFixed(2)}\n;
            meiaLista = [];
            finalizar();
        }
    } else {
        let label = catAtual === 'bebidas' ? "Bebida" : (catAtual === 'pizza' ? "Pizza Inteira" : (catAtual === 'broto' ? "Broto Inteira" : "Calzone"));
        cart.value += ${label}: ${n} - R$ ${p.toFixed(2)}\n;
        finalizar();
        showCustomAlert("SUCESSO", n + " adicionado!");
    }
}

function finalizar() { contador++; document.getElementById('cart-count').innerText = contador; }
function toggleCarrinho() { document.getElementById('carrinho').classList.toggle('open'); }
function mostrarDados(t) {
    document.getElementById('pedidoDetalhes').style.display = 'block';
    document.getElementById('entregaCampos').style.display = (t==='delivery') ? 'block' : 'none';
    document.getElementById('btn-retirar').classList.toggle('active', t==='retirar');
    document.getElementById('btn-delivery').classList.toggle('active', t==='delivery');
}
function mostrarTroco() { document.getElementById('trocoArea').style.display = (document.getElementById('pagamento').value === 'Dinheiro') ? 'block' : 'none'; }

function enviarPedido() {
    const itens = document.getElementById('pedido').value;
    const pag = document.getElementById('pagamento').value;
    if(!itens || !pag) return showCustomAlert("ATENÇÃO", "Preencha itens e pagamento!");
    let local = document.getElementById('entregaCampos').style.display === 'block' ? Delivery: ${document.getElementById('endereco').value} - ${document.getElementById('bairro').value} : "Retirada Balcão";
    window.open(https://wa.me/5511993407322?text=${encodeURIComponent("*PEDIDO VITORELLI*\n\n"+itens+"\n📍 "+local+"\n💳 Pagamento: "+pag)});
}

function showCustomAlert(t, m) { document.getElementById('custom-alert-title').innerText = t; document.getElementById('custom-alert-message').innerText = m; document.getElementById('custom-alert-overlay').style.display = 'flex'; }
function hideCustomAlert() { document.getElementById('custom-alert-overlay').style.display = 'none'; }

selecionar('pizza');
