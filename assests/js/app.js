let cl = console.log;
// let ages = [10, 21, 30, 41, 50, 61, 70, 81, 90]

//last index number = array.length-1
//We have to double the given array as -
//let doubleAges = [20, 42, 60, 82, 100, 122, 140, 162, 180]
//Therefore,
// let doubleAges = [];

//1. for loop - 
// for (let i=0; i<ages.length; i++){
//     // cl(ages[i]*2)
//     // doubleAges.push(ages[i]*2)
// }

//2. forEach loop - 
// ages.forEach(function(age){
//     doubleAges.push(age*2)
// })

//3. Arrow function - 
// ages.forEach((age) => {
//     doubleAges.push(age*2)
// })

// ages.forEach((age => doubleAges.push(age*2)));
// cl(doubleAges)

// Higher Order Function >> A function which accepts another function as a parameter/arguement.
// CallBack function >> A function which is passed as a parameter/arguement inside another function.


//Usecase of map method- usecase meaning when to use map method - 
// 1. When we have a given array.
// 2. When we have to create a new array from the given array.
// 3. When we have to apply same functionality on each and every element of the given array.

// 1. Map -
//  1. It returns a new array.
//  2. The length of new array === length of the given array.
//  3. arrayname.map(callback function(parameter)){
// Parameter - It gives us each and every element of the given array.(arrayName)
// }

// let ages = [10, 21, 30, 41, 50, 61, 70, 81, 90]

// let doubleAges = ages.map(function (age) {
//     return age * 2;
// });
// cl(doubleAges);

// 1. Arrow function -
// let doubleAges = ages.map((age) => {
//     return age * 2; 
// });
// cl(doubleAges);

// let doubleAges = ages.map(age => age * 2);
// cl(doubleAges);

// Example 2 -
// let ages = [10, 21, 30, 41, 50, 61, 70, 81, 90];
// let sqrt = [];

// 1.For loop -
// for (let i=0; i<ages.length; i++){
//     sqrt.push(Math.sqrt(ages[i]));
// }
// cl(sqrt);

// 2. forEach loop - 
// ages.forEach(function(age){
//     sqrt.push(Math.sqrt(age));
// });
// cl(sqrt);

// 3. Arrow function -
// ages.forEach((age) => {
//     sqrt.push(Math.sqrt(age))
// });
// cl(sqrt);

// If only one parameter, then the code can be written as
// ages.forEach(age => sqrt.push(Math.sqrt(age)));
// cl(sqrt);

// 4. Map -
// let sqrt = ages.map(function(age){
//     return Math.sqrt(age);
// })
// cl(sqrt);

// let sqrt = ages.map(age => Math.sqrt(age));
// cl(sqrt);

// let companies = [
//     { name: "Company One", category: "Finance", start: 1981, end: 2003 },
//     { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
//     { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
//     { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
//     { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
//     { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
//     { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
//     { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
//     { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
// ];
// let companiesNamesOnly=[];

// 1. For loop -
// for (i=0; i<companies.length; i++){
//     companiesNamesOnly.push(companies[i].name);
// };
// cl(companiesNamesOnly);

//2. forEach loop - 
// companies.forEach(function(company){
//     companiesNamesOnly.push(company.name);
// });
// cl(companiesNamesOnly);

//3. Arrow function - 
// companies.forEach((company) => {
//     companiesNamesOnly.push(company.name);
// });
// cl(companiesNamesOnly);

// companies.forEach(company => companiesNamesOnly.push(company.name));
// cl(companiesNamesOnly);

// 4. Map -
// let companiesNamesOnly=companies.map(function(company){
//     return companies.name;
// });
// cl(companiesNamesOnly);

// let companiesNamesOnly=companies.map(company => company.name);
// cl(companiesNamesOnly);

// [{companyName: "Company One", start: 1981},
// {companyName: "Company Two", start: 1992}]
// let compStart=[];

// 1. For loop -
// for (let i = 0; i < companies.length; i++) {
//     compStart.push({
//         companyName: companies[i].name,
//         start: companies[i].start
//     })
// }
// cl(compStart)

//2. forEach loop - 
// companies.forEach(function(company){
//     compStart.push({
//         companyName: company.name,
//         start: company.start
//         })     
// });
// cl(compStart);

//3. Arrow function - 
// companies.forEach(company => {
//     compStart.push({
//         companyName: company.name,
//         start: company.start
//     })
// });
// cl(compStart);

// companies.forEach(company => compStart.push({companyName: company.name, start: company.start}));
// cl(compStart);

// 4. Map -
// let compStart = companies.map(function(company){
//     return {companyName: company.name,
//         start: company.start}
// });
// cl(compStart)

// let compStart = companies.map(company => ({companyName: company.name, start: company.start}));
// cl(compStart);

// [{companyName: "Company One", duration: "22"}];
// let compDuration = [];

// 1. For loop -
// for (let i = 0; i < companies.length; i++) {
//     compDuration.push({
//         companyName: companies[i].name,
//         duration: companies[i].end - companies[i].start
//     })
// };
// cl(compDuration)

//2. forEach loop - 
// companies.forEach(function(company){
//     compDuration.push({
//         companyName: company.name,
//         duration: company.end - company.start
//     });
// });
// cl(compDuration);

//3. Arrow function - 
// companies.forEach(company => {
//     compDuration.push({
//         companyName: company.name,
//         duration: company.end - company.start
//     })
// });
// cl(compDuration);

// companies.forEach(company => compDuration.push({companyName: company.name, duration: company.end - company.start}));
// cl(compDuration);

// 4. Map -
// let compDuration = companies.map(function(company){
//     return {
//         companyName: company.name, 
//         duration: company.end - company.start
//     }
// });
// cl(compDuration);

// let compDuration = companies.map(company => ({companyName: company.name, duration: company.end - company.start}));
// cl(compDuration);

// 2. Filter -
// Usecase of filter - (usecase meaning - when & where to use)
// We have an array and a condition is provided.
// We have to create a new array of elements (of given array), who pass/satisfy the given condition.
// It returns an array.
// Length of new array may or may not be equal to the length of given array.

let ages = [10, 21, 30, 41, 50, 61, 70, 81, 90] //to check the number of adults in the given array.

// let adultAges = [];

// 1. For loop -
// for(let i = 0; i < ages.length; i++){
//     if(ages[i] >= 18){
//         adultAges.push(ages[i]);
//     }
// };
// cl(adultAges)

//2. forEach loop - 
// ages.forEach(function(age){
//     if(age >= 18){
//         adultAges.push(age);
//     }
// });
// cl(adultAges);

//3. Arrow function - 
// ages.forEach(age => {
//     if(age >= 18){
//         adultAges.push(age);
//     }
// });
// cl(adultAges);

// ages.forEach(age => {if(age >= 18) adultAges.push(age)});
// cl(adultAges);

// 4. Filter -
// let adultAges = ages.filter(function(age){
//     if(age >= 18){
//         return true;
//     }
//     else{
//         return false;
//     }
// });

// let adultAges = ages.filter(function(age){
//     return age >= 18;
// })

let adultAges = ages.filter(age => age >= 18);
cl(adultAges);

let companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

// Create a new array whose category is retail.
// let companiesRetail = [];

// 1. For loop -
// for (let i = 0; i <companies.length; i++){
//     if(companies[i].category.toLowerCase().trim() === 'retail'){
//         companiesRetail.push(companies[i]);
//     }
// };
// cl(companiesRetail);

//2. forEach loop - 
// companies.forEach(function(company){
//     if(company.category.toLowerCase().trim() === 'retail'){
//         companiesRetail.push(company);
//     }
// });
// cl(companiesRetail);

//3. Arrow function - 
// companies.forEach((company) => {
//     if(company.category.toLowerCase().trim() === 'retail'){
//         companiesRetail.push(company);
//     }
// });
// cl(companiesRetail);

// companies.forEach(company => {if(company.category.toLowerCase().trim() === 'retail') companiesRetail.push(company)});
// cl(companiesRetail);

// 4. Filter -
// let companiesRetail = companies.filter(function(company){
//     return company.category.toLowerCase().trim() === 'retail';
// });
// cl(companiesRetail);

let companiesRetail = companies.filter(company => company.category.toLowerCase().trim() === 'retail');
cl(companiesRetail);

companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

// Create an array of companies which have been working for atleast 10 years.
// duration >= 10;
// let compAtleast10 = [];

// 1. For loop -
// for(let i = 0; i <companies.length; i++){
//     if(companies[i].end - companies[i].start >= 10){
//         compAtleast10.push(companies[i]);
//     }
// };
// cl(compAtleast10);

//2. forEach loop - 
// companies.forEach(function(company){
//     if(company.end - company.start >= 10){
//         compAtleast10.push(company);
//     }
// });
// cl(compAtleast10);

//3. Arrow function - 
// companies.forEach(company => {
//     if(company.end - company.start >= 10){
//         compAtleast10.push(company);
//     }
// });
// cl(compAtleast10);

// companies.forEach(company => {if(company.end - company.start >= 10) compAtleast10.push(company)});
// cl(compAtleast10);

// 4. Filter -
// let compAtleast10 = companies.filter(function(company){
//     return company.end - company.start >= 10;
// });
// cl(compAtleast10);

let compAtleast10 = companies.filter(company => company.end - company.start >= 10);
cl(compAtleast10);

[{ companyName: "Company One", duration: 22 }] //and who started in the 80s (1980 to 1989).
// let comp80s = [];
// 80, 81, 82, 83, 84, 85, 86, 87, 88, 89

// 1. For loop -
// for (let i = 0; i < companies.length; i++) {
//   if(companies[i].start >= 1980 && companies[i].start <= 1989){
//     comp80s.push({
//       companyName: companies[i].name,
//       duration: companies[i].end - companies[i].start
//     });
//   }
// };
// cl(comp80s);

//2. forEach loop - 
// companies.forEach(function(company){
//   if(company.start >= 1980 && company.start <= 1989){
//     comp80s.push({
//       companyName: company.name,
//       duration: company.end - company.start
//     })
//   }
// });
// cl(comp80s);

//3. Arrow function - 
// companies.forEach(company => {
//   if(company.start >= 1980 && company.start <= 1989){
//     comp80s.push({
//       companyName: company.name,
//       duration: company.end - company.start
//     });
//   }
// });
// cl(comp80s);

// companies.forEach(company => {if(company.start >= 1980 && company.start <= 1989) comp80s.push({companyName: company.name, duration: company.end - company.start})});
// cl(comp80s);

// 4. Filter & Map -
// let comp80s = companies.filter(function(company){
//   return company.start >= 1980 && company.start <= 1989;
// }).map(function(company){
//   return{
//     compName: company.name,
//     duration: company.end - company.start
//   }
// });
// cl(comp80s);

let comp80s = companies.filter(company => company.start >= 1980 && company.start <= 1989).map(company => ({ compName: company.name, duration: company.end - company.start }));
cl(comp80s);

//[{companyName: "Company One", lifespan: '1981-2000'}] & company.category === finance
// let compFinance=[]

// 1. For loop -
// for(var i = 0; i < companies.length; i++){
//   if(companies[i].category.toLowerCase().trim() === 'finance'){
//     compFinance.push({
//       companyName: companies[i].name,
//       lifespan: `${companies[i].start} - ${companies[i].end}`
//     });
//   }
// };
// cl(compFinance);

//2. forEach loop - 
// companies.forEach(function(company){
//   if(company.category.toLowerCase().trim() === 'finance'){
//     compFinance.push({
//       companyName: company.name,
//       lifespan: `${company.start} - ${company.end}`
//     })
//   }
// });
// cl(compFinance);

//3. Arrow function - 
// companies.forEach((company) => {
//   if(company.category.toLowerCase().trim() === 'finance'){
//     compFinance.push({
//       companyName: company.name,
//       lifespan: `${company.start} - ${company.end}`
//     })
//   }
// });
// cl(compFinance);

// companies.forEach(company => {if(company.category.toLowerCase().trim() === 'finance') compFinance.push({companyName: company.name, lifespan: `${company.start} - ${company.end}`})});
// cl(compFinance);

// 4. Filter & Map -
let compFinance = companies.filter(company => company.category.toLowerCase().trim() === 'finance').map(company => ({ companyName: company.name, lifespan: `${company.start} - ${company.end}` }));
cl(compFinance);

// [{companyName: "Company One", category: 'finance}] & company which have run atleast for 10 years.
// let comRunAtleast10 = [];

// 1. For loop -
// for (let i = 0; i < companies.length; i++){
//   if(companies[i].end - companies[i].start >= 10){
//     comRunAtleast10.push({
//       companyName: companies[i].name,
//       category: companies[i].category
//     })
//   }
// };
// cl(comRunAtleast10);

//2. forEach loop -
// companies.forEach(function(company){
//   if(company.end - company.start >= 10){
//     comRunAtleast10.push({
//       companyName: company.name,
//       category: company.category
//     })
//   }
// });
// cl(comRunAtleast10);

//3. Arrow function - 
// companies.forEach((company) => {
//   if(company.end - company.start >= 10){
//         comRunAtleast10.push({
//           companyName: company.name,
//           category: company.category
//         })
//   }
// });
// cl(comRunAtleast10);

// companies.forEach(company => {if(company.end - company.start >= 10) comRunAtleast10.push({companyName: company.name, category: company.category})});
// cl(comRunAtleast10);

// 4. Filter & Map -
// let comRunAtleast10 = companies.filter(company => (company.end - company.start) >= 10).map(company => ({companyName: company.name, category: company.category}));
// cl(comRunAtleast10);

let comRunAtleast10 = companies.filter((company) => {
  return (company.end - company.start >= 10)
}).map((company) => {
  return {
    companyName: company.name,
    category: company.category
  }
});
cl(comRunAtleast10);

// 3. Find -
// Usecase of find method -
// We have a given array with a condition provided.
// We have to find an object which passes or satisfies the given condition.

companies = [
  { name: "Company One", id: "1", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", id: "2", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", id: "3", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", id: "4", category: "RetAil", start: 1989, end: 2010 },
  { name: "Company Five", id: "5", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", id: "6", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", id: "7", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", id: "8", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", id: "9", category: " retail ", start: 1981, end: 1989 }
];

let givenId = 4;
let getObj; // we want object as the result.

// companies.forEach(comp => {
//   if(Number(comp.id) === givenId){
//     getObj = comp
//   }
// })
// cl(getObj);

// getObj = companies.find(comp => {
//   return +comp.id === givenId;
// });
// cl(getObj);

getObj = companies.find(comp => +comp.id === givenId);
cl(getObj);

// 4. Reduce -
ages = [10, 21, 30, 41, 50, 61, 70, 81, 90];
// let totalAges = 0; // undefined
// ages.forEach(age => {
// totalAges = totalAges + age;
//  totalAges += age;
// });
// cl(totalAges); // NaN

let totalAges = ages.reduce((accum, nextValue) => accum = nextValue)
cl(totalAges);

// let multiAges = 1;
// ages.forEach(age => multiAges *= age);

let multiAges = ages.reduce((multi, nextAge) => multi *= nextAge);
cl(multiAges);

companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

// [{companyName: "Company One", duration: 22}];
let compNamesDur = companies.reduce((accu, comp) => {
  accu.push({
    companyName: comp.name,
    duration: comp.end - comp.start
  })
  return accu
}, [])
cl(compNamesDur);

let totalAgeOfComp = companies.reduce((total, comp) => {
  return total += comp.end - comp.start
}, 0);
cl(totalAgeOfComp);