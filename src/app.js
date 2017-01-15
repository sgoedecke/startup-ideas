const ideaDisplay = document.getElementById('idea');
const newIdeaButton = document.getElementById('generate');

const concepts = [
  'tacos',
  'pizza',
  'taxis',
  'water',
  'beer',
  'bananas',
  'eggs',
  'walking',
  'sleep',
  'coffee',
  'bicycling',
  'cafes',
  'dogs',
  'cats',
  'donuts',
  'vacuuming',
  'ironing',
  'investing'
];

const unicorns = [
  'Uber',
  'Facebook',
  'Twitter',
  'Instagram',
  'Snapchat'
]

const randomElement = (array) => (
  array[
    Math.floor((Math.random() * array.length))
  ]
)

const generateNewIdea = () => {
  let generatedIdea, concept, method, unicorn;
  concept = randomElement(concepts)

  switch(Math.floor((Math.random() * 3))) {
    case 0:
      generatedIdea = `crowdsourced ${concept}`;
      break;
    case 1:
      generatedIdea = `${concept} as a service`;
      break;
    case 2:
      unicorn = randomElement(unicorns)
      generatedIdea = `${unicorn} for ${concept}`
      break;
  }
  generatedIdea = `Disrupt the ${concept} industry with ${generatedIdea}`

  ideaDisplay.innerHTML = generatedIdea;
}

newIdeaButton.addEventListener("click", generateNewIdea);
generateNewIdea();
