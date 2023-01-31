export default function createObject(item, position) {
  const { name, units, value, total } = item;

  return {
    name: name,
    units: units,
    value: value,
    total: total,
    position: position,
  };
}
