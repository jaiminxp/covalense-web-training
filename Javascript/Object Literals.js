let pokemon = {
  name: "Pikachu",
  color: "yellow",
  power: 22000,
  211: "electric",
  null: "blah",
  masters: ["ash", "zippa", "kametsku"],
};

let prop = "color";

pokemon[prop] = "gray";

pokemon.isDead = false;

// alert(pokemon.isDead);

alert(pokemon["masters"][1]);
