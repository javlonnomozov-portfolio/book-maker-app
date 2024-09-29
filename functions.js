function bookMaker4Pages(pageCount) {
  const r1 = [];
  const r2 = [];
  for (let i = 0; i <= pageCount / 2 - 2; i += 2) {
    r1[i] = i + 2;
    r1[i + 1] = pageCount - i - 1;
    r2[i + 1] = r1[i] - 1;
    r2[i] = r1[i + 1] + 1;
  }
  return [r1, r2];
}

function bookMaker8Pages(pageCount) {
  const r1 = [];
  const r2 = [];
  for (let i = 0; i <= pageCount / 2 - 4; i += 4) {
    r1.push((i / 4 + 1) * 2);
    r1.push(pageCount - (i / 4 + 1) * 2 + 1);
    r1.push((i / 4 + 1) * 2 + pageCount / 4);
    r1.push(pageCount - ((i / 4 + 1) * 2 + pageCount / 4) + 1);

    r2.push(pageCount - (i / 4 + 1) * 2 + 2);
    r2.push((i / 4 + 1) * 2 - 1);
    r2.push(pageCount - ((i / 4 + 1) * 2 + pageCount / 4) + 2);
    r2.push((i / 4 + 1) * 2 + pageCount / 4 - 1);
  }
  return [r1, r2];
}

// console.log(bookMaker8Pages(16));

bookMaker8Pages(16);

function bookMaker4Pages2Sides(pageCount) {
  const result = [];
  for (let i = 0; i <= pageCount / 2 - 2; i += 2) {
    result.push(pageCount - i);
    result.push(i + 1);
    result.push(i + 2);
    result.push(pageCount - (i + 1));
  }
  return result;
}
