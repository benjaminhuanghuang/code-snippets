function* chunks(nums, n) {
  for (let i = 0; i < nums.length; i += n) {
    yield nums.slice(i, i + n);
  }
}

nums = [];
while (nums.length < 10) {
  var r = Math.floor(Math.random() * 100) + 1;
  if (nums.indexOf(r) === -1) nums.push(r);
}

console.log(nums);
// spread generator 
nums_groups = [...chunks(nums, 4)];

console.log(nums_groups);
