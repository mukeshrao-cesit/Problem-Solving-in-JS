let map = new Map();

map.set("samsung", "samsung");
map.set("nokia", "nokia");
map.set("apple", "apple");
function solve(elem) {
  if (map.size < 4) {
    if (map.get(elem)) {
      map.delete(elem);
      map.set(elem, elem);
    } else {
      map.set(elem, elem);
    }
  } else {
    map.delete(map.keys().next().value);
    map.set(elem, elem);
  }
  for (const [key, value] of map) {
    console.log(`${key} = ${value}`);
  }
}

console.log(solve("apple"));
