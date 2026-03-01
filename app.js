// ╔══════════════════════════════════════════════════════════════╗
// ║                    VITORELLI — APP.JS                        ║
// ║   Lógica da aplicação. Não precisa editar este arquivo.      ║
// ║   Para mudar cardápio, preços e dados: edite config.js       ║
// ╚══════════════════════════════════════════════════════════════╝

// ─────────────────────────────────────────────
// ESTADO GLOBAL
// ─────────────────────────────────────────────
var categoriaAtual = 'pizza';
var modoMeia       = false;
var meiaLista      = [];   // guarda os 2 sabores da meia-meia
var contadorItens  = 0;
var totalPedido    = 0;

// ─────────────────────────────────────────────
// INICIALIZAÇÃO
// ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
  // Aplica dados do config no header
  document.getElementById('headerNome').textContent = CONFIG.pizzaria.nome;
  document.getElementById('headerSub').textContent  = CONFIG.pizzaria.subtitulo;

  // Popula o select de bairros com CONFIG.bairros
  var sel = document.getElementById('bairroSelect');
  CONFIG.bairros.forEach(function (b) {
    var opt = document.createElement('option');
    opt.value       = b.nome + '|' + b.taxa;
    opt.textContent = b.nome + ' — R$ ' + b.taxa.toFixed(2);
    sel.appendChild(opt);
  });

  // Status inicial e timer
  atualizarStatus();
  setInterval(atualizarStatus, 60000);

  // Exibe categoria inicial
  selecionar('pizza');
});

// ─────────────────────────────────────────────
// HORÁRIO (lê CONFIG.horario)
// ─────────────────────────────────────────────
function estaAberto() {
  var agora   = new Date();
  var dia     = agora.getDay();
  var minutos = agora.getHours() * 60 + agora.getMinutes();
  var abre    = CONFIG.horario.abreHora   * 60 + CONFIG.horario.abreMinuto;
  var fecha   = CONFIG.horario.fechaHora  * 60 + CONFIG.horario.fechaMinuto;

  if (CONFIG.horario.diasFechados.indexOf(dia) !== -1) return false;
  return minutos >= abre && minutos <= fecha;
}

function atualizarStatus() {
  var badge = document.getElementById('statusBadge');
  var texto = document.getElementById('statusTexto');
  if (estaAberto()) {
    badge.className = 'badge aberto';
    texto.textContent = 'ABERTO AGORA';
  } else {
    badge.className = 'badge fechado';
    var dia = new Date().getDay();
    texto.textContent = CONFIG.horario.diasFechados.indexOf(dia) !== -1
      ? 'FECHADO HOJE'
      : 'FECHADO · Abre às ' + CONFIG.horario.abreHora + 'h';
  }
}

// ─────────────────────────────────────────────
// NAVEGAÇÃO
// ─────────────────────────────────────────────
function selecionar(cat) {
  categoriaAtual = cat;
  modoMeia       = false;
  meiaLista      = [];

  // Atualiza botões nav
  document.querySelectorAll('.bnav').forEach(function (b) { b.classList.remove('active'); });
  var btn = document.getElementById('nb-' + cat);
  if (btn) btn.classList.add('active');

  // Subnav visível só para pizza, broto e calzone
  var subnav = document.getElementById('subnav');
  var temSubnav = (cat === 'pizza' || cat === 'broto' || cat === 'calzone');
  subnav.style.display = temSubnav ? 'flex' : 'none';

  // Reset subnav para "inteira"
  document.getElementById('si').classList.add('active');
  document.getElementById('sm').classList.remove('active');
  document.getElementById('bannerMeia').classList.remove('visivel');
  document.getElementById('progMeia').classList.remove('visivel');

  // Renderiza conteúdo
  if      (cat === 'bebidas') renderBebidas();
  else if (cat === 'bairros') renderBairros();
  else                        renderSabores();
}

function alternarModo(tipo) {
  modoMeia  = (tipo === 'meia');
  meiaLista = [];

  document.getElementById('si').classList.toggle('active', tipo === 'inteira');
  document.getElementById('sm').classList.toggle('active', tipo === 'meia');
  document.getElementById('bannerMeia').classList.toggle('visivel', modoMeia);
  document.getElementById('progMeia').classList.remove('visivel');

  renderSabores();
}

// ─────────────────────────────────────────────
// RENDERIZAÇÃO
// ─────────────────────────────────────────────
function renderSabores() {
  var container = document.getElementById('conteudo');
  container.className = 'cards-area';
  container.innerHTML = '';

  // Filtra inativos
  var lista = CONFIG.sabores.filter(function (s) { return s.ativo !== false; });

  lista.forEach(function (s, i) {
    // Calzone usa mesmo preço do broto
    var preco = (categoriaAtual === 'pizza') ? s.grande : s.broto;

    var tagNovo = s.novo
      ? '<div class="tag-novo">NOVIDADE</div>'
      : '';

    var labelPreco = modoMeia
      ? '<span class="preco">R$ ' + preco.toFixed(2) + '<small>por metade</small></span>'
      : '<span class="preco">R$ ' + preco.toFixed(2) + '</span>';

    var labelBtn = modoMeia ? 'ESCOLHER' : 'ADICIONAR';

    container.innerHTML +=
      '<div class="card">' +
        tagNovo +
        '<h3>' + s.nome + '</h3>' +
        '<p>'  + s.descricao + '</p>' +
        '<div class="price-row">' +
          labelPreco +
          '<button class="btn-add" data-idx="' + i + '" data-preco="' + preco + '">' +
            labelBtn +
          '</button>' +
        '</div>' +
      '</div>';
  });

  // Delegação de eventos — sem onclick inline, sem problemas com acentos
  container.addEventListener('click', function (e) {
    var btn = e.target.closest('.btn-add');
    if (!btn) return;
    var idx   = parseInt(btn.getAttribute('data-idx'));
    var preco = parseFloat(btn.getAttribute('data-preco'));
    var nome  = CONFIG.sabores.filter(function(s){ return s.ativo !== false; })[idx].nome;
    adicionar(nome, preco);
  });
}

function renderBebidas() {
  var container = document.getElementById('conteudo');
  container.className = 'cards-area';
  container.innerHTML = '';

  CONFIG.bebidas.forEach(function (b, i) {
    container.innerHTML +=
      '<div class="card">' +
        '<h3>' + b.nome + '</h3>' +
        '<p>'  + b.descricao + '</p>' +
        '<div class="price-row">' +
          '<span class="preco">R$ ' + b.preco.toFixed(2) + '</span>' +
          '<button class="btn-add" data-beb="' + i + '" data-preco="' + b.preco + '">ADICIONAR</button>' +
        '</div>' +
      '</div>';
  });

  container.addEventListener('click', function (e) {
    var btn = e.target.closest('.btn-add');
    if (!btn) return;
    var idx   = parseInt(btn.getAttribute('data-beb'));
    var preco = parseFloat(btn.getAttribute('data-preco'));
    adicionarBebida(CONFIG.bebidas[idx].nome, preco);
  });
}

function renderBairros() {
  var container = document.getElementById('conteudo');
  container.className = '';

  var linhas = CONFIG.bairros.map(function (b) {
    return '<div class="bairro-card">' +
             '<span class="bairro-nome">&#128205; ' + b.nome + '</span>' +
             '<span class="bairro-taxa">+ R$ ' + b.taxa.toFixed(2) + '</span>' +
           '</div>';
  }).join('');

  var horaTexto = CONFIG.horario.abreHora + 'h às ' +
                  CONFIG.horario.fechaHora + 'h' +
                  (CONFIG.horario.fechaMinuto > 0 ? CONFIG.horario.fechaMinuto : '');

  container.innerHTML =
    '<div class="bairros-area">' +
      '<div class="delivery-nota">' +
        '&#128661; <strong>Delivery disponível ' + horaTexto + '</strong><br>' +
        'Pedidos via WhatsApp: <strong>' + formatarWhatsApp(CONFIG.pizzaria.whatsapp) + '</strong><br>' +
        'Taxa de entrega conforme o bairro abaixo.' +
      '</div>' +
      linhas +
      '<div class="bairros-aviso">' +
        'Seu bairro não está na lista? Entre em contato pelo WhatsApp para verificar disponibilidade.' +
      '</div>' +
    '</div>';
}

function formatarWhatsApp(num) {
  // 5511993407322 → (11) 99340-7322
  var n = num.replace(/\D/g, '');
  if (n.length === 13) {
    return '(' + n.slice(2,4) + ') ' + n.slice(4,9) + '-' + n.slice(9);
  }
  return n;
}

// ─────────────────────────────────────────────
// LÓGICA DE ADICIONAR AO CARRINHO
// ─────────────────────────────────────────────
function adicionar(nome, preco) {
  var ped = document.getElementById('pedido');

  // ── MODO MEIA-MEIA ──────────────────────────
  if (modoMeia) {
    meiaLista.push({ nome: nome, preco: preco });

    if (meiaLista.length === 1) {
      // Primeiro sabor selecionado
      document.getElementById('meiaNome1').textContent = nome;
      document.getElementById('progMeia').classList.add('visivel');
      mostrarAlerta('METADE 1 DE 2 ✅',
        '"' + nome + '" selecionado!\nAgora escolha o 2º sabor.');

    } else {
      // Segundo sabor — cobra o maior
      var s1 = meiaLista[0];
      var s2 = meiaLista[1];
      var precoFinal = Math.max(s1.preco, s2.preco);

      var label = categoriaAtual === 'pizza'   ? 'Pizza ½+½'
                : categoriaAtual === 'broto'   ? 'Broto ½+½'
                : 'Calzone ½+½';

      ped.value += label + ': ' + s1.nome + ' / ' + s2.nome +
                   ' — R$ ' + precoFinal.toFixed(2) + '\n';
      totalPedido += precoFinal;

      meiaLista = [];
      document.getElementById('progMeia').classList.remove('visivel');

      atualizarContador();
      atualizarTotal();
      verificarSugestaoCombo();

      mostrarAlerta('ADICIONADO! &#127829;',
        s1.nome + ' + ' + s2.nome + '\nCobrado o maior: R$ ' + precoFinal.toFixed(2));
    }
    return;
  }

  // ── MODO NORMAL ─────────────────────────────
  var label = categoriaAtual === 'bebidas' ? 'Bebida'
            : categoriaAtual === 'pizza'   ? 'Pizza'
            : categoriaAtual === 'broto'   ? 'Broto'
            : 'Calzone';

  ped.value += label + ': ' + nome + ' — R$ ' + preco.toFixed(2) + '\n';
  totalPedido += preco;

  atualizarContador();
  atualizarTotal();

  if (categoriaAtual !== 'bebidas') verificarSugestaoCombo();

  mostrarAlerta('ADICIONADO ✅', '"' + nome + '" foi para o seu carrinho!');
}

function adicionarBebida(nome, preco) {
  var catAntes   = categoriaAtual;
  categoriaAtual = 'bebidas';
  adicionar(nome, preco);
  categoriaAtual = catAntes;
}

// ─────────────────────────────────────────────
// HELPERS DO CARRINHO
// ─────────────────────────────────────────────
function atualizarContador() {
  contadorItens++;
  document.getElementById('cartCount').textContent = contadorItens;
}

function atualizarTotal() {
  document.getElementById('totalValor').textContent =
    'R$ ' + totalPedido.toFixed(2).replace('.', ',');
}

function verificarSugestaoCombo() {
  var texto   = document.getElementById('pedido').value;
  var temPiza = /Pizza|Broto|Calzone/.test(texto);
  var temBeb  = /Bebida/.test(texto);
  if (temPiza && !temBeb) {
    setTimeout(function () {
      if (confirm('🥤 Que tal uma bebida gelada para acompanhar?')) {
        selecionar('bebidas');
        document.getElementById('carrinho').classList.remove('aberto');
      }
    }, 900);
  }
}

// ─────────────────────────────────────────────
// PAINEL CARRINHO
// ─────────────────────────────────────────────
function toggleCarrinho() {
  document.getElementById('carrinho').classList.toggle('aberto');
}

function limparPedido() {
  if (confirm('Remover todos os itens do carrinho?')) {
    document.getElementById('pedido').value = '';
    contadorItens = 0;
    totalPedido   = 0;
    document.getElementById('cartCount').textContent = '0';
    atualizarTotal();
  }
}

// ─────────────────────────────────────────────
// ENTREGA
// ─────────────────────────────────────────────
function mostrarEntrega(tipo) {
  document.getElementById('formEntrega').style.display    = 'block';
  document.getElementById('camposDelivery').style.display = tipo === 'del' ? 'block' : 'none';
  document.getElementById('btn-ret').classList.toggle('active', tipo === 'ret');
  document.getElementById('btn-del').classList.toggle('active', tipo === 'del');
  if (tipo !== 'del') document.getElementById('taxaInfo').style.display = 'none';
}

function atualizarTaxa() {
  var val    = document.getElementById('bairroSelect').value;
  var taxaEl = document.getElementById('taxaInfo');
  if (!val) { taxaEl.style.display = 'none'; return; }
  var taxa = parseFloat(val.split('|')[1] || 0);
  document.getElementById('taxaValor').textContent = 'R$ ' + taxa.toFixed(2);
  taxaEl.style.display = 'block';
}

function toggleTroco() {
  var pag = document.getElementById('pagamento').value;
  document.getElementById('trocoArea').style.display = pag === 'Dinheiro' ? 'block' : 'none';
}

// ─────────────────────────────────────────────
// ENVIAR PEDIDO VIA WHATSAPP
// ─────────────────────────────────────────────
function enviarPedido() {
  if (!estaAberto()) {
    mostrarAlerta('FECHADO 🔴',
      'Atendemos ' +
      CONFIG.horario.abreHora + 'h às ' +
      CONFIG.horario.fechaHora + 'h' +
      (CONFIG.horario.fechaMinuto > 0 ? CONFIG.horario.fechaMinuto : '') +
      '.\nMonte seu pedido e envie quando abrirmos!');
    return;
  }

  var itens = document.getElementById('pedido').value.trim();
  var pag   = document.getElementById('pagamento').value;

  if (!itens) { mostrarAlerta('CARRINHO VAZIO', 'Adicione itens antes de finalizar.'); return; }
  if (!pag)   { mostrarAlerta('PAGAMENTO', 'Selecione a forma de pagamento.'); return; }

  var isDelivery = document.getElementById('camposDelivery').style.display !== 'none';
  var localStr;

  if (isDelivery) {
    var end  = document.getElementById('endereco').value.trim();
    var bVal = document.getElementById('bairroSelect').value;
    var bNom = bVal ? bVal.split('|')[0] : '';
    var bTax = bVal ? parseFloat(bVal.split('|')[1] || 0) : 0;
    if (!end)  { mostrarAlerta('ENDEREÇO', 'Informe o endereço para delivery.'); return; }
    if (!bNom) { mostrarAlerta('BAIRRO',   'Selecione o bairro.'); return; }
    localStr = 'Delivery: ' + end + ' - ' + bNom + ' (Taxa: R$ ' + bTax.toFixed(2) + ')';
  } else {
    localStr = 'Retirada no Balcão';
  }

  var trocoStr = '';
  if (document.getElementById('trocoArea').style.display !== 'none') {
    var tv = document.getElementById('troco').value;
    if (tv) trocoStr = '\nTroco para: R$ ' + tv;
  }

  var totalStr = document.getElementById('totalValor').textContent;

  var mensagem = encodeURIComponent(
    '🍕 *NOVO PEDIDO — ' + CONFIG.pizzaria.nome.toUpperCase() + '*\n\n' +
    itens + '\n' +
    '📍 *Local:* ' + localStr + '\n' +
    '💳 *Pagamento:* ' + pag + trocoStr + '\n' +
    '💰 *Total:* ' + totalStr
  );

  window.open('https://wa.me/' + CONFIG.pizzaria.whatsapp + '?text=' + mensagem);
}

// ─────────────────────────────────────────────
// ALERTA
// ─────────────────────────────────────────────
function mostrarAlerta(titulo, mensagem) {
  document.getElementById('alertTitulo').textContent  = titulo;
  document.getElementById('alertMensagem').textContent = mensagem;
  document.getElementById('alertOverlay').classList.add('visivel');
}

function fecharAlerta() {
  document.getElementById('alertOverlay').classList.remove('visivel');
}
