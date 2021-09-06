export const people = [
  {
    id: "0",
    name: "eunji",
    age: "50",
    gender: "female",
  },
  {
    id: "1",
    name: "eunju",
    age: "13",
    gender: "female",
  },
  {
    id: "2",
    name: "eunki",
    age: "54",
    gender: "male",
  },
  {
    id: "3",
    name: "jiji",
    age: "9",
    gender: "male",
  },
  {
    id: "4",
    name: "kuku",
    age: "34",
    gender: "male",
  },
  {
    id: "5",
    name: "kimc",
    age: "25",
    gender: "female",
  },
  {
    id: "6",
    name: "haha",
    age: "70",
    gender: "female",
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === String(id));
  return filteredPeople[0];
};
