const limitText = (text, maxChar = 100) => {
  const chars = text.split("");
  if (chars.length < 100) return text;

  const limitedText = chars.slice(0, maxChar).join("");
  return `${limitedText}...`;
};

export { limitText };