const checkForSpam = function(message) {
  message = message.toLowerCase();
  let result;
  if (message.includes("spam")) {
    result = true;
  } else if (message.includes("sale")) {
    result = true;
  } else {
    result = false;
  }
  return result;
};

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
