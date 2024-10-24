function main(event){
    event.preventDefault();

    let nome = document.getElementById('name').value;
    let experiencia = parseInt(document.getElementById('xp').value);
    let rankImagem = document.getElementById('rankImg');
    let rankText = document.getElementById('rankText');
    let classifier = document.getElementById('classic')
    
    let hasError = false

    if (!nome) {
        rankText.textContent = "Por favor insira um nome";
        rankText.style.color = "red";
        return;
    }
    if (isNaN(experiencia) || experiencia < 0){
        rankText.textContent = "Por favor insira um valor válido de XP";
        rankText.style.color = "red";
        return;
    }

    let nivel;

    if(experiencia < 1000){
        nivel = "Ferro";
        rankImagem.src = "src/style/assests/Iron_1_Rank.png";
    } else if(experiencia <= 2000){
        nivel = "Bronze";
        rankImagem.src = "src/style/assests/Bronze_1_Rank.png";
    } else if (experiencia <= 5000) {
        nivel = "Prata";
        rankImagem.src = "src/style/assests/Silver_1_Rank.png";
    } else if (experiencia <= 7000) {
        nivel = "Ouro";
        rankImagem.src = "src/style/assests/Gold_1_Rank.png";
    } else if (experiencia <= 8000) {
        nivel = "Platina";
        rankImagem.src = "src/style/assests/Platinum_1_Rank.png";
    } else if (experiencia <= 9000) {
        nivel = "Ascendente";
        rankImagem.src = "src/style/assests/Ascendant_1_Rank.png";
    } else if (experiencia <= 10000) {
        nivel = "Imortal";
        rankImagem.src = "src/style/assests/Immortal_1_Rank.png";
    } else {
        nivel = "Radiante";
        rankImagem.src = "src/style/assests/Radiant_Rank.png";
        classifier.style.backgroundColor = "#gold";
        rankImagem.style.border = "3px solid #000000"
        rankImagem.style.borderRadius = "30px"
        rankImagem.style.backgroundColor = "#000000"
    }

    rankText.textContent = `O herói  ${nome} está com o rank ${nivel}`;
    rankText.style.color = "black";
    rankImagem.style.display = "inline";
    fundo(nivel);
}

function fundo(nivel) {
    let corpo = document.body;
    switch (nivel){
        case "Ferro":
            corpo.style.backgroundColor = "#3d3d3d";
            rankText.style.textDecoration = "underline 3px #a9a9a9"
            break;
        case "Bronze":
            corpo.style.backgroundColor = "#cd7f32"; 
            rankText.style.textDecoration = "underline 3px #cd7f32";
            break;
        case "Prata":
            corpo.style.backgroundColor = "#c0c0c0"; 
            rankText.style.textDecoration = "underline 3px #c0c0c0";
            break;
        case "Ouro":
            corpo.style.backgroundColor = "#ffd700";
            rankText.style.textDecoration = "underline 3px #ffd700";
            break;
        case "Platina":
            corpo.style.backgroundColor = "#13cde6";
            rankText.style.textDecoration = "underline 3px #13cde6";
             break;
        case "Ascendente":
            corpo.style.backgroundColor = "#13e61e";
            rankText.style.textDecoration = "underline 3px #13e61e";
            break;
        case "Imortal":
            corpo.style.backgroundColor = "#f30505"; 
            rankText.style.textDecoration = "underline 3px #f30505";
            break;
        case "Radiante":
            corpo.style.backgroundColor = "#ffff00";
            rankText.style.textDecoration = "underline 3px #ffff00";
            break;
        default:
            corpo.style.backgroundColor = "#FFFFFF";
            rankText.style.textDecoration = "none";
    }
}

/*document.getElementById('name').addEventListener('input', () => {
    document.getElementById('resultado').textContent = ''; // Limpa o resultado ao digitar
});
document.getElementById('xp').addEventListener('input', () => {
    document.getElementById('resultado').textContent = ''; // Limpa o resultado ao digitar
});*/