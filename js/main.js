var categories = [product, brand, community, industry, entertainment];

function getRandomElementFromArray(arr) {
  var ranNum = Math.floor(Math.random() * arr.length);
  return arr[ranNum];
}

function getRandomCategory() {
  var cat = getRandomElementFromArray(categories);
  return getRandomElementFromArray(cat);
}

var catsHandlers = [
  ["product", () => getRandomElementFromArray(product)],
  ["brand", () => getRandomElementFromArray(brand)],
  ["community", () => getRandomElementFromArray(community)],
  ["industry", () => getRandomElementFromArray(industry)],
  ["entertainment", () => getRandomElementFromArray(entertainment)]
];

var catDict = new Map(catsHandlers);

function genIdea() {
  var sel = document.getElementById('categories');
  var opt = sel.options[sel.selectedIndex].value;

  var func = catDict.get(opt);

  var value = func ? func()
                   : getRandomCategory(categories);

  document.getElementById('newIdeaSection').innerHTML = value;
}