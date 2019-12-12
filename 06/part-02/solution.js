module.exports = map => {
  const objects = map.reduce((accumulator, orbit) => {
    const [target, object] = orbit.split(")");
    return { ...accumulator, [object]: target };
  }, {});

  const youOrbits = 

  return Object.keys(objects).reduce((accumulator, object) => {
    return accumulator + countOrbits(objects, object);
  }, 0);
};

function countOrbits(objects, object) {
  if (!(object in objects)) {
    return 0;
  }
  return 1 + countOrbits(objects, objects[object]);
}

function countOrbits(objects, object) {
  if (!(object in objects)) {
    return 0;
  }
  return 1 + countOrbits(objects, objects[object]);
}
