//Foi criado 3 variaveis um vector
let nome = "Raony"
let experiencia = 10500
let texto = ("O Herói de nome " + nome + " está no nível ")
const nivel = ["Ferro" , "Bronze" , "Prata" , "Ouro" , "Platina" , "Ascendente" , "Imortal" , "Radiante"]

//Foi criado a estrutura condicional
//se a experiencia do menor ou igual a 1000 o heroi vai ter o nivel de'Ferro'
if(experiencia <= 1000){
        console.log (texto + nivel[0] + " com " + experiencia + " pontos de experiência.")
}   //se a experiencia do menor ou igual a 2000 o heroi vai ter o nivel de'Bronze'
    else if (experiencia <=2000){
    console.log (texto + nivel[1] + " com " + experiencia + " pontos de experiência.")
}   //se for 2001 ate 5000 o heroi vai ter o nivel de'Prata'
    else if (experiencia <= 5000){
        console.log (texto + nivel[2] + " com " + experiencia + " pontos de experiência.")
}   //se for 5001 ate 7000 o heroi vai ter o nivel de'Ouro'
    else if (experiencia <= 7000){
        console.log (texto + nivel[3] + " com " + experiencia + " pontos de experiência.")
}   //se for 7001 ate 8000 o heroi vai ter o nivel de'Platina'
    else if (experiencia <= 8000){
        console.log (texto + nivel[4] + " com " + experiencia + " pontos de experiência.")
}   //se for 8001 ate 9000 o heroi vai ter o nivel de'Ascedente'
    else if (experiencia<= 9000){
        console.log (texto + nivel[5] + " com " + experiencia + " pontos de experiência.")
}   //se for 9001 ate 10000 o heroi vai ter o nivel de'Imortal'
    else if (experiencia<= 10000){
    console.log (texto + nivel[6] + " com " + experiencia + " pontos de experiência.")
}   //se for 10001 ou mais o heroi vai ter o nivel de'Radiante'
else{
    console.log (texto + nivel[7] + " com " + experiencia + " pontos de experiência.")
    }