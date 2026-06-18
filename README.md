
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Neymar Jr</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    font-family:Arial, sans-serif;
    background:linear-gradient(135deg, #009739, #ffdf00);
    color:#333;
    line-height:1.6;
    min-height:100vh;
}

header{
    background:linear-gradient(to right,#009739,#ffdf00);
    color:white;
    text-align:center;
    padding:40px;
}

nav{
    background:#222;
    text-align:center;
    padding:15px;
}

nav a{
    color:white;
    text-decoration:none;
    margin:0 15px;
    font-weight:bold;
    transition:0.3s;
}

nav a:hover{
    color:#ffdf00;
}

main{
    width:90%;
    max-width:1000px;
    margin:20px auto;
}

section{
    background: linear-gradient(135deg, #ffffff, #d9f99d);
    margin-bottom:20px;
    padding:25px;
    border-radius:10px;
    box-shadow:0 0 10px rgba(0,0,0,0.1);
}

h2{
    margin-bottom:15px;
    color:#009739;
}

figure{
    text-align:center;
}

img{
    width:300px;
    max-width:100%;
    border-radius:10px;
    box-shadow:0 4px 10px rgba(0,0,0,0.2);
}

ul{
    margin-left:20px;
}

table{
    width:100%;
    border-collapse:collapse;
    margin-top:10px;
}

table, th, td{
    border:1px solid #ccc;
}

th{
    background:#009739;
    color:white;
}

th, td{
    padding:10px;
    text-align:center;
}

button{
    background:#009739;
    color:white;
    border:none;
    padding:10px 20px;
    border-radius:5px;
    cursor:pointer;
    margin:5px;
    transition:0.3s;
}

button:hover{
    background:#006d2a;
}

#resultado{
    margin-top:15px;
    font-weight:bold;
    color:#009739;
}

#infoTime{
    margin-top:20px;
    background:#f4f4f4;
    padding:15px;
    border-radius:8px;
    border-left:5px solid #009739;
}

footer{
    background:#222;
    color:white;
    text-align:center;
    padding:20px;
}
</style>
</head>
<body>

<header>
    <h1>Neymar Jr</h1>
    <p>Um dos maiores jogadores brasileiros da história</p>
</header>

<nav>
    <a href="#sobre">Sobre</a>
    <a href="#carreira">Carreira</a>
    <a href="#times">Times</a>
    <a href="#curiosidades">Curiosidades</a>
</nav>

<main>

<section id="sobre">
    <h2>Sobre Neymar</h2>

    <figure>
        <img src="https://images.ctfassets.net/3mv54pzvptwz/55YLwKPDnRXkqMBITRpWbC/0c2aefc04afa455c20e9ca0d209698e0/53174188191_42d4c831ae_o.jpg" alt="Neymar Jr">
    </figure>

    <p>
        Neymar da Silva Santos Júnior nasceu em 5 de fevereiro de 1992.
        É conhecido mundialmente por sua habilidade, velocidade,
        criatividade e capacidade de decidir partidas importantes.
    </p>
</section>

<section id="carreira">
    <h2>Clubes</h2>

    <ul>
        <li>Santos FC</li>
        <li>Barcelona</li>
        <li>Paris Saint-Germain (PSG)</li>
        <li>Al-Hilal</li>
        <li>Seleção Brasileira</li>
    </ul>
</section>

<section>
    <h2>Conquistas</h2>

    <table>
        <tr>
            <th>Título</th>
            <th>Ano</th>
        </tr>

        <tr>
            <td>Libertadores</td>
            <td>2011</td>
        </tr>

        <tr>
            <td>Champions League</td>
            <td>2015</td>
        </tr>

        <tr>
            <td>Ouro Olímpico</td>
            <td>2016</td>
        </tr>
    </table>
</section>

<section id="times">
    <h2>Times em que Neymar Jogou</h2>

    <button onclick="mostrarTime('santos')">Santos FC</button>
    <button onclick="mostrarTime('barcelona')">Barcelona</button>
    <button onclick="mostrarTime('psg')">PSG</button>
    <button onclick="mostrarTime('alhilal')">Al-Hilal</button>
    <button onclick="mostrarTime('selecao')">Seleção Brasileira</button>

    <article id="infoTime">
    Clique em um time para ver informações.
</article>
</section>

<section id="curiosidades">
    <h2>Curiosidades</h2>

    <button onclick="mostrarCuriosidade()">
        Mostrar Curiosidade
    </button>

    <p id="resultado"></p>
</section>

</main>

<footer>
    <p>Site desenvolvido para Neymar jr</p>
</footer>

<script>

function mostrarCuriosidade(){

    const curiosidades = [
        "Neymar estreou profissionalmente aos 17 anos.",
        "Foi campeão da Libertadores pelo Santos em 2011.",
        "Marcou o gol do ouro olímpico do Brasil em 2016.",
        "Foi a transferência mais cara da história em 2017.",
        "É um dos maiores artilheiros da Seleção Brasileira."
    ];

    let sorteio = Math.floor(Math.random() * curiosidades.length);

    document.getElementById("resultado").textContent =
    curiosidades[sorteio];
}

function mostrarTime(time){

    const info = {

        santos: `
            <h3>Santos FC</h3>
            <p>
                Clube onde Neymar iniciou sua carreira profissional.
                Conquistou a Libertadores de 2011 e encantou o mundo
                com seus dribles e gols.
            </p>
        `,

        barcelona: `
            <h3>Barcelona</h3>
            <p>
                Jogou ao lado de Messi e Suárez no famoso trio MSN.
                Conquistou a Champions League em 2015.
            </p>
        `,

        psg: `
            <h3>Paris Saint-Germain (PSG)</h3>
            <p>
                Tornou-se a contratação mais cara da história do futebol
                em 2017. Conquistou vários títulos franceses.
            </p>
        `,

        alhilal: `
            <h3>Al-Hilal</h3>
            <p>
                Clube da Arábia Saudita que contratou Neymar em 2023.
                Representou uma das maiores transferências do futebol árabe.
            </p>
        `,

        selecao: `
            <h3>Seleção Brasileira</h3>
            <p>
                Defendeu o Brasil em diversas competições internacionais
                e conquistou a medalha de ouro olímpica em 2016.
            </p>
        `
    };

    document.getElementById("infoTime").innerHTML = info[time];
}

</script>

</body>
</html>
```
