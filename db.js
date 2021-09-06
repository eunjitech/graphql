export let people = [
  {
    id: "0",
    nickname: "eunji",
    age: "50",
    gender: "female",
  },
  {
    id: "1",
    nickname: "eunju",
    age: "13",
    gender: "female",
  },
  {
    id: "2",
    nickname: "eunki",
    age: "54",
    gender: "male",
  },
  {
    id: "3",
    nickname: "jiji",
    age: "9",
    gender: "male",
  },
  {
    id: "4",
    nickname: "kuku",
    age: "34",
    gender: "male",
  },
  {
    id: "5",
    nickname: "kimc",
    age: "25",
    gender: "female",
  },
  {
    id: "6",
    nickname: "haha",
    age: "70",
    gender: "female",
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === String(id));
  return filteredPeople[0];
};

export const deletePerson = (id) => {
  const cleanPerson = people.filter((person) => person.id !== String(id));
  if (people.length > cleanPerson.length) {
    people = cleanPerson;
    return true;
  } else {
    return false;
  }
};

export const addPerson = (nickname, age, gender) => {
  const newPerson = {
    id: `${people.length + 1}`,
    nickname,
    age,
    gender,
  };
  people.push(newPerson);
  return newPerson;
};
