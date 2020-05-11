function a(b, c) {
  const arr = [];
  for (i = 0; i <= b.length - 1; i++) {
    arr.push(b[i]);
  }
  for (i = 0; i <= c.length - 1; i++) {
    arr.push(c[i]);
  }
  console.log(arr);
  const ty = typeof arr;
  console.log(ty);
}

a([1, 2, 3, 4], ["a", "b", "C"]);
// console.log(a([1, 2, 3, 4], ["a", "b", "C"]));
