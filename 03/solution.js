module.exports = lines => {
  const rows = [["o"]];
  const lastPosition = [0, 0];

  lines.forEach(line => {
    line.forEach(path => {
      const [direction, distance] = [path.slice(0, 1), path.slice(1)];
      switch (direction) {
        case "R": {
          for (let moved = 0; moved < distance; moved++) {
            lastPosition[1] += 1;
            if (rows[0].length !== lastPosition[1] + 1) {
              for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
                rows[rowIndex].push(".");
              }
            }
            rows[lastPosition[0]][lastPosition[1]] = "-";
          }
          break;
        }
        case "L": {
          for (let moved = 0; moved < distance; moved++) {
            lastPosition[1] -= 1;
            rows[lastPosition[0]].unshift("-");
          }
          break;
        }
        case "U": {
          for (let moved = 0; moved < distance; moved++) {
            lastPosition[0] -= 1;
            rows.unshift(["|"]);
          }
          break;
        }
        case "D": {
          for (let moved = 0; moved < distance; moved++) {
            lastPosition[0] += 1;
            if (rows.length !== lastPosition[0] + 1) {
              rows.push(new Array(rows[0].length).fill("."));
            }
            rows[lastPosition[0]][lastPosition[1]] = "|";
          }
          break;
        }
      }
    });
  });

  return `\n${rows.map(row => row.join("")).join("\n")}\n`;
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
