let nickHero = "jarvanRei";
let heroTitle;

for (let heroExperience = 0; heroExperience <= 11000; heroExperience+=1000){
    if(heroExperience >= 10001){
        heroTitle = "Radiante";
    }else if(heroExperience > 9000){
        heroTitle = "Imortal";
    }else if(heroExperience > 8000){
        heroTitle = "Ascendente";
    }else if(heroExperience > 7000){
        heroTitle = "Platina";
    }else if(heroExperience > 6000){
        heroTitle = "Ouro";
    }else if(heroExperience > 2000){
        heroTitle = "Prata";
    }else if(heroExperience > 1000){
        heroTitle = "Bronze";
    }else{
        heroTitle = "Ferro";
    }
    
    console.log("O Herói de nome " + nickHero + " está no nível de " + heroTitle) 
}
