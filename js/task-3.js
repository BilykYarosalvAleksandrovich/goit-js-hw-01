function getElementWidth(content, padding, border) {
  const contentWidth = parseFloat(content);
  const paddingValue = parseFloat(padding);
  const borderValue = parseFloat(border);

  const borderBox = contentWidth + 2 * paddingValue + 2 * borderValue;
  return borderBox;
}

console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200
