function arrayOfMultiples(num, len) {
let result = [];
let count = num; 
result.push(num);
for(var i = 0; i < len-1; i++){
count += num;
result.push(count);
}
console.log(result);
return result;
}

arrayOfMultiples(2, 10);
//Magic eight ball

function magic8() {
    let magicBall = [
        ["It is certain.", 
        "It is decidedly so.",
        "Without a doubt.",
        "Yes - definitely.", 
        "You may rely on it.", 
        "As I see it, yes.",
        "Most likely.", 
        "Outlook good.", 
        "Yes.", 
        "Signs point to yes."
        ],
        [
            "Reply hazy, try again.",
            "Ask again later.",
            "Better not tell you now.",
            "Cannot predict now",
            "Concentrate and ask again."
        ],
        [
            "Don't count on it.",
            "My reply is no.",
            "My sources say no.",
            "Outlook not so good.",
            "Very doubtful.",
        ]
    ];
    var askQuestion = prompt("Ask a question.");
    if (askQuestion.value == ) {
       alert(Math.floor(Math.random() * magicBall.length));
       return true; 
    }
    return false;
}