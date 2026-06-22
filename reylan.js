function mostrarCuriosidade() {

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

function mostrarTime(time) {

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
