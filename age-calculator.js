function ageCalculator (name, yearOfBirth, currentYear) {
  let age = currentYear - yearOfBirth
  return name + ' is ' + age + ' years old.'
}
console.log(ageCalculator('Jim', 1993, 2019))