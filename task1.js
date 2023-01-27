function sortString(str) {
  return str
    .split(" ")
    .sort((a, b) => a.match(/\d/) - b.match(/\d/))
    .join(" ");
}

sortString("g5et ski3lls on6 use1 your2 to4 7top");
