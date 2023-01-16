let currId = 0;

const idMap = new Map();

export function generateId(key: string) {
  if (idMap.has(key)) {
    const id = idMap.get(key);
    const nextId = id + 1;
    idMap.set(key, nextId);
    currId = nextId;
  } else {
    const id = 1;
    idMap.set(key, id);
    currId = id;
  }

  return `${key}-${currId}`;
}
