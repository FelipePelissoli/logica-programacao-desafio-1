
let nome = "Felipe O Mago"
let xp = 3500
let nivel = ""

switch (true) {
    case xp > 1 && xp <= 1000:
    nivel = "Bronze"
    break

    case xp > 1001 && xp <= 2000:
    nivel = "Prata"
    break

    case xp > 2001 && xp <= 5000:
    nivel = "Ouro"
    break

    case xp > 5001 && xp <= 7000:
    nivel = "Platina"
    break

    case xp > 7001 && xp <= 9000:
    nivel = "Ascendente"
    break

    case xp > 9001 && xp <= 10000:
    nivel = "Imortal"
    break

    case xp >= 10001:
    nivel = "Radiante"
    break
}

console.log("O Herói de nome " + nome + " está no nível de " + nivel)


