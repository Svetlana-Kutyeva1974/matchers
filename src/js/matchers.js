export default function orderObject(object) {
  const newArray = object.sort((a, b) => a.health-b.health);
  return newArray.reverse();
}
