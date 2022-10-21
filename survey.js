
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let paragraph = "";

rl.question('What is your name? ', (answer) => {

  console.log(`name: ${answer}`);
  paragraph += `My name is ${answer}.`;

  rl.question('What is an activity you like doing? ', (answer) => {

    console.log(`activity: ${answer}`);
    paragraph += ` I like ${answer}.`;
    rl.question('What do you listen to while doing that? ', (answer) => {

      console.log(`listening: ${answer}`);
      paragraph += ` I like to listen to ${answer}.`;
      rl.question('Which meal is your favourite? ', (answer) => {

        console.log(`favourite meal: ${answer}`);
        paragraph += ` My favourite meal is ${answer}.`;
        rl.question('Whats your favourite thing to eat for that meal? ', (answer) => {

          console.log(`favourite thing to eat for a meal: ${answer}`);
          paragraph += ` My favourite thing to eat for a meal is ${answer}.`;

          rl.question('Which sport is your absolute favourite? ', (answer) => {

            console.log(`favourite sport: ${answer}`);
            paragraph += ` My favourite sport is ${answer}.`;
            rl.question('What is your superpower? ', (answer) => {

              console.log(`superpower: ${answer}`);
              paragraph += ` My superpower is ${answer}.`;
              rl.close();
              console.log(paragraph);
  
  
            });
          });
        });
      });
    });
  });
});




