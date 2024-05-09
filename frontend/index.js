function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here
  const widgets = document.querySelectorAll('section>div');
  widgets.forEach((element, i) => {
    element.classList.add("widget")
    element.setAttribute('tabindex', i + 1)
  });
  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here
  
  const randomIndex = Math.floor(Math.random() * quotes.length); //eslint-disable-line
  const quotesArray = quotes[randomIndex]; //eslint-disable-line
  const quote = document.createElement('div');
  const quoteText = quotesArray.quote;
  quote.textContent = quoteText;

  const quoteOfDay = document.querySelector('.quoteoftheday')
  quoteOfDay.appendChild(quote)

  const authorDate = document.createElement('div');
  const {author, date} = quotesArray;
  authorDate.textContent = `${author} in ${date || "an unknown date"}`;
  quoteOfDay.appendChild(authorDate)

  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here
const randomVerb1 =verbs[Math.floor(Math.random() * verbs.length)];
const randomVerb2 =verbs[Math.floor(Math.random() * verbs.length)];

const randomAdverb1 =adverbs[Math.floor(Math.random() * adverbs.length)];
const randomAdverb2 =adverbs[Math.floor(Math.random() * adverbs.length)];

const randomNoun1 =nouns[Math.floor(Math.random() * nouns.length)];
const randomNoun2 =nouns[Math.floor(Math.random() * nouns.length)];

const words = `We need to ${randomVerb1} our ${randomNoun1} ${randomAdverb1} in order to ${randomVerb2} our ${randomNoun2} ${randomAdverb2}.`
const paragraph = document.createElement('p');
paragraph.textContent = words;
document.querySelector('.corporatespeak').appendChild(paragraph)

// 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here
  const countdownWidget = document.querySelector('.countdown');
  let count = 5;
  const countdown = document.createElement('p')
  countdown.textContent = `T-minus ${count}...`
  countdownWidget.appendChild(countdown)

  const id = setInterval(() => {
    if(count === 1){
      countdown.textContent = 'Liftoff! 🚀'
      clearInterval(id)
    } else {
    countdown.textContent = `T-minus ${--count}...`
    }
  },1000)
  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here
  
  const person = people[Math.floor(Math.random() * people.length)]
  const personParagraph = document.createElement('p')
  document.querySelector('.friends').appendChild(personParagraph)
  let year = person.dateOfBirth.split('-')[0]
  let sentence = `${person.fname} ${person.lname} was born in ${year} and `

  if(!person.friends.length){
    sentence += `has no friends.`
  } else {
    sentence += 'is friends with '
    for(let i = 0; i < person.friends.length; i++){
      const friendId = person.friends[i]
      const friend = people.find(p => p.id === friendId)
      const fullName = `${friend.fname} ${friend.lname}`
      
      let lastindex = i === person.friends.length - 1;
      let isNextToLast = i === person.friends.length - 2;

      if(lastindex){
        sentence += ` ${fullName}.`
      } else if(isNextToLast){
        sentence += ` ${fullName} and `
      } else {
        sentence += ` ${fullName}, `
      }
    }
  }
  personParagraph.textContent = sentence;
  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here
    
  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
