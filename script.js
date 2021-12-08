const avg=(a,b,c) => (a+b+c) /3;

const mgmgofAVG=avg(96,50,35);
const agagofAVG=avg(84,78,98);

if(mgmgofAVG >= 2 * agagofAVG){
    console.log(`Mgmg is winner (${mgmgofAVG} vs ${agagofAVG})`)

}else if(agagofAVG >= 2 * mgmgofAVG){
    console.log(`Ag Ag is winner (${agagofAVG} vs ${mgmgofAVG})`)
}

else{
    console.log("They are falier")
}