let obj = {
  Key1: "value1",
  key2: "value2",
  key3: "value3",
};

Object.keys(obj).forEach((key) => {
  console.log(key, obj[key]);
});

// using for in - same output as above
for (let key in obj) {
  let value = obj[key];
  console.log(key, value);
}
