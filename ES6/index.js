let inputArr = ["MA", "SA", "I", "SCH", "OOL"];


let upperToLower = (chr)=>{
    let uper= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowr= "abcdefghijklmnopqrstuvwxyz";
    for(let i=0; i<uper.length; i++){
        if(uper[i]==chr){
            return lowr[i];
        }
    }
    return chr;
}

let upperToLowerWord = (word)=>{
    let bag = "";
    for(let i=0; i<word.length; i++){
        bag += upperToLower(word[i]);
    }
    return bag;
}

outputArr = inputArr.map((element)=>{
    return upperToLowerWord(element);
});

console.log("OutPut:", outputArr);