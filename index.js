const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorial.map(x => { 
    x = x.split(' ');
    for (i = 0; i < x.length; i++){
     x[i] = x[i].charAt(0).toUpperCase() + x[i].slice(1);
    }
    return x.join(' ');
   });
}



