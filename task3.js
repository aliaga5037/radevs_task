function biggerNumber(num) {
  const bigNum = parseInt(
    num
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );

  return bigNum !== num ? bigNum : -1;
}
