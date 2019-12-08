module.exports = lines => {
  const rows = [["o"]];
  let lastPosition;

  lines.forEach(line => {
    lastPosition = findCentralPort(rows);
    line.forEach(path => {
      const [direction, distance] = [path.slice(0, 1), path.slice(1)];
      switch (direction) {
        case "R": {
          if (
            rows[lastPosition[0]][lastPosition[1]] !== "-" &&
            rows[lastPosition[0]][lastPosition[1]] !== "o"
          ) {
            rows[lastPosition[0]][lastPosition[1]] = "+";
          }
          for (let moved = 0; moved < distance; moved++) {
            lastPosition[1] += 1;
            if (rows[0].length < lastPosition[1] + 1) {
              for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
                rows[rowIndex].push(".");
              }
            }
            rows[lastPosition[0]][lastPosition[1]] =
              rows[lastPosition[0]][lastPosition[1]] !== "." ? "X" : "-";
          }
          break;
        }
        case "L": {
          if (
            rows[lastPosition[0]][lastPosition[1]] !== "-" &&
            rows[lastPosition[0]][lastPosition[1]] !== "o"
          ) {
            rows[lastPosition[0]][lastPosition[1]] = "+";
          }
          for (let moved = 0; moved < distance; moved++) {
            if (lastPosition[1] === 0) {
              for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
                rows[rowIndex].unshift(".");
              }
            } else {
              lastPosition[1] -= 1;
            }
            rows[lastPosition[0]][lastPosition[1]] =
              rows[lastPosition[0]][lastPosition[1]] !== "." ? "X" : "-";
          }
          break;
        }
        case "U": {
          if (
            rows[lastPosition[0]][lastPosition[1]] !== "|" &&
            rows[lastPosition[0]][lastPosition[1]] !== "o"
          ) {
            rows[lastPosition[0]][lastPosition[1]] = "+";
          }
          for (let moved = 0; moved < distance; moved++) {
            if (lastPosition[0] === 0) {
              rows.unshift(new Array(rows[0].length).fill("."));
            } else {
              lastPosition[0] -= 1;
            }
            rows[lastPosition[0]][lastPosition[1]] =
              rows[lastPosition[0]][lastPosition[1]] !== "." ? "X" : "|";
          }
          break;
        }
        case "D": {
          if (
            rows[lastPosition[0]][lastPosition[1]] !== "|" &&
            rows[lastPosition[0]][lastPosition[1]] !== "o"
          ) {
            rows[lastPosition[0]][lastPosition[1]] = "+";
          }
          for (let moved = 0; moved < distance; moved++) {
            lastPosition[0] += 1;
            if (rows.length < lastPosition[0] + 1) {
              rows.push(new Array(rows[0].length).fill("."));
            }
            rows[lastPosition[0]][lastPosition[1]] =
              rows[lastPosition[0]][lastPosition[1]] !== "." ? "X" : "|";
          }
          break;
        }
      }
    });
  });

  return `\n${rows.map(row => row.join("")).join("\n")}\n`;
};

function findCentralPort(rows) {
  let result;
  rows.some((row, rowIndex) => {
    const colIndexOfPort = row.indexOf("o");
    if (colIndexOfPort !== -1) {
      result = [rowIndex, colIndexOfPort];
      return true;
    }
    return false;
  });
  return result;
}
