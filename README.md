
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
    background:white;
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
}

button:hover{
    background:#00782f;
}

#resultado{
    margin-top:15px;
    font-weight:bold;
    color:#009739;
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
    <a href="#curiosidades">Curiosidades</a>
</nav>

<main>

<section id="sobre">
    <h2>Sobre Neymar</h2>

    <figure>
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Neymar_2018.jpg" alt="Neymar Jr">
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
            <td>Olimpíadas</td>
            <td>2016</td>
        </tr>
    </table>
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
    <p>Site desenvolvido com HTML, CSS e JavaScript.</p>
</footer>

<script>
function mostrarCuriosidade(){

    const curiosidades = [
        "Neymar estreou profissionalmente aos 17 anos.",
        "Foi campeão da Libertadores pelo Santos.",
        "Marcou o gol do ouro olímpico do Brasil em 2016.",
        "Já atuou em grandes clubes da Europa.",
        "É um dos maiores artilheiros da Seleção Brasileira."
    ];

    let sorteio = Math.floor(Math.random() * curiosidades.length);

    document.getElementById("resultado").textContent =
    curiosidades[sorteio];
}
</script>

</body>
</html>

