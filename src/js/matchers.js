export default function orderObject(object) {
  const newArray = object.sort((a, b) => b.health - a.health);
  return newArray;
}
