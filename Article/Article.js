/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: 'Nov 5th, 2018',
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: 'Javascript and You, ES6',
    date: 'May 7th, 2019',
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: 'React vs Angular vs Vue',
    date: 'June 7th, 2019',
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: 'Professional Software Development in 2019',
    date: 'Jan 1st, 2019',
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  },
  {
    title: 'Why You Should Use GatsbyJS',
    date: 'July 4th, 2019',
    firstParagraph: `GatsbyJS is the best. It's a framework for React that can create super fast websites!`,
    secondParagraph: `You can even connect it with Netlify CMS to create a blog! You should check it out.`,
    thirdParagraph: `Even though I'm brand new to React and Gatsby, I've been working on making my own personal site/blog using GatsbyJS and Netlify CMS. It's challenging with my limited knowledge, but it's awesome!`
  },
  {
    title: 'Avatar: The Last Airbender',
    date: 'April 25th, 2019',
    firstParagraph: `ATLA is one of the greatest cartoons ever. Not only does it create a beautiful world, it has fantastic character development.`,
    secondParagraph: `Zuko has one of the greatest redemption arcs and you can see growth in all of the main characters from when they're first introduced to the end of the final season. The character development isn't limited to one or two people.`,
    thirdParagraph: `I'm so excited for the live-action remake of the series that's coming to Netflix! It better not be as horrendous as the live-action movie...we don't talk about that monstrosity.`
  }
];

/* Step 1: Create a function that creates a component. You will want your component to look like the template below: 
  
  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class='expandButton'></span>
  </div>

  Hint: You will need to use createElement more than once here!

  Your function should take either an object as its one argument, or 5 separate arguments mapping to each piece of the data object above.

  Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div.

  Step 3: return the entire component.

  Step 4: Map over the data, creating a component for each object and add each component to the DOM as children of the 'articles' div.

  Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new article.

*/

function articleComponentCreator(obj) {
  const divArticle = document.createElement('div');
  divArticle.classList.add('article');
  
  const title = document.createElement('h2');
  title.textContent = obj.title;
  divArticle.appendChild(title);

  const objKeys = Object.keys(obj);

  objKeys.forEach(k => {
    if (k === 'date' || k.includes('Paragraph')) {
      let paragraph = document.createElement('p');
      paragraph.textContent = obj[k];

      if (k === 'date') {
        paragraph.classList.add('date');
      }

      divArticle.appendChild(paragraph);
    }
  })
  const span = document.createElement('span');
  span.classList.add('expandButton');
  // initialize span.textContent
  span.textContent = 'Expand';

  span.addEventListener('click', () => {
    divArticle.style.transition = 'all 0.15s ease-in-out';
    divArticle.classList.toggle('article-open');
    if (divArticle.classList.contains('article-open')) {
      span.textContent = 'Close';
    } else {
      span.textContent = 'Expand';
    }
  })

  divArticle.appendChild(span);
  console.log(divArticle);
  return divArticle;
}
console.log(data);
const articles = document.querySelector('.articles');
const dataArray = data.map(article => {
  articles.appendChild(articleComponentCreator(article));
})

// create form for creating new article
const formContainer = document.createElement('div');
const formHeader = document.createElement('h3');
const form = document.createElement('form');
const titleLabel = document.createElement('label');
const titleInput = document.createElement('input');
const contentLabel = document.createElement('label');
const contentInput = document.createElement('textarea');
const submit = document.createElement('input');
// const labelContainer = document.createElement('div');

form.id = 'new-article';
titleInput.id = 'title';
contentInput.id = 'content';
formContainer.classList.add('form-container');

titleInput.type = 'text';
submit.type = 'submit';

titleInput.name = 'title';
contentInput.name = 'content';

titleLabel.for = 'title';
contentLabel.for = 'content';

formHeader.textContent = 'Submit New Article';
titleLabel.textContent = 'Title';
contentLabel.textContent = 'Content';

contentInput.form = 'new-article';
contentInput.rows = '20';
contentInput.cols = '20';

titleLabel.textContent = 'Title:';
contentLabel.textContent = 'Content:';

form.method = 'get';

form.appendChild(formHeader);
form.appendChild(titleLabel);
form.appendChild(titleInput);
form.appendChild(contentLabel);
form.appendChild(contentInput);
form.appendChild(submit);
formContainer.appendChild(form);

// form styles
formContainer.style.display = 'flex';
formContainer.style.flexWrap = 'nowrap';
formContainer.style.justifyContent = 'center';
formContainer.style.alignItems = 'center';
formContainer.style.width = '450px';
formContainer.style.margin = '0 auto 2rem';
formContainer.style.boxShadow = '2px 2px 2px lightgrey';
formContainer.style.borderRadius = '10px';
formContainer.style.border = '1px solid lightgrey';
formContainer.style.padding = '10px 15px';
formContainer.style.backgroundColor = 'white';

form.style.display = 'flex';
form.style.flexDirection = 'column';
form.style.width = '400px';
form.style.height = '400px';

titleInput.style.margin = '1rem 0';
titleInput.style.borderRadius = '4px';
titleInput.style.padding = '8px 15px';
titleInput.style.border = '1px solid #ccc';
titleInput.style.fontSize = '1em';
titleInput.style.backgroundColor = '#fffef7';

contentInput.style.marginBottom = '1rem';
contentInput.style.borderRadius = '4px';
contentInput.style.padding = '8px 15px';
contentInput.style.border = '1px solid #ccc';
contentInput.style.fontSize = '1em';
contentInput.style.backgroundColor = '#fffef7';

submit.style.borderRadius = '4px';
submit.style.fontSize = '1em';
submit.style.backgroundColor = '#fffef7';

submit.addEventListener('mouseenter', () => {
  submit.style.backgroundColor = 'lightgrey';

  submit.addEventListener('mouseleave', () => {
    submit.style.backgroundColor = '#fffef7';
  })
})

const body = document.querySelector('body');
formContainer.appendChild(form);
body.appendChild(formContainer);

// Creates a new article when form is submitted
document.querySelector('form').onsubmit = function(e) {
  e.preventDefault();
  let date = new Date();
  date = date.toLocaleDateString("en-US", {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
  const title = document.getElementById('title').value;
  const contentString = document.getElementById('content').value;

  const newArticle = {
    title,
    date,
  }

  let contentArray = contentString.split("\n");
  contentArray.forEach((item, index) => {
    newArticle[`${index + 1}Paragraph`] = item;
  })
  articles.appendChild(articleComponentCreator(newArticle));
}