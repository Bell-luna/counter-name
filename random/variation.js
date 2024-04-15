export function getNumberOfChars(name) {
  return name.length;
}

export function getFirstChar(name) {
  return name[0];
}

export function getLastChar(name) {
  return name[name.length - 1];
}

export function getLower(name) {
  return name.toLowerCase();
}

export function getUpper(name) {
  return name.toUpperCase();
}

export function getCapitalized(name) {
  if (name.length === 0) return name;
  return name[0].toUpperCase() + name.slice(1).toLowerCase();
}
