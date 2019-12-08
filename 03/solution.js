module.exports = lines => {
  const rows = [["o"]];
  const lastPosition = [0, 0];

  lines.forEach(line => {
    line.forEach(path => {
      const [direction, distance] = [path.slice(0, 1), path.slice(1)];
      switch (direction) {
        case "R": {
          // if(rows[lastPosition[0]][lastPosition[1]] === undefined)
          for (let index = 0; index < distance; index++) {
            lastPosition[1] = lastPosition[1] + 1;
            rows[lastPosition[0]].push("-");
          }
          break;
        }
        case "L": {
          for (let index = 0; index < distance; index++) {
            lastPosition[1] = lastPosition[1] - 1;
            rows[lastPosition[0]].unshift("-");
          }
          break;
        }
        case "U": {
          for (let index = 0; index < distance; index++) {
            lastPosition[0] = lastPosition[0] - 1;
            rows.unshift(["|"]);
          }
          break;
        }
        case "D": {
          for (let index = 0; index < distance; index++) {
            lastPosition[0] = lastPosition[0] + 1;
            rows.push(["|"]);
          }
          break;
        }
      }
    });
  });

  return rows.map(row => row.join("")).join("\n");
};

// ...........
// ...........
// ...........
// ....+----+.
// ....|....|.
// ....|....|.
// ....|....|.
// .........|.
// .o-------+.
// ...........
