const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = "false";
let mass = Object.keys(user);

for (let key of mass) {
  console.log(`${key} : ${user[key]}`);
}
