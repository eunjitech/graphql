// Query는 정보를 받아올 때 사용
// Mutation은 서버나, 메모리에서 정보를 변형할 때 사용

import { people, getById, addPerson, deletePerson } from "../db";

const resolvers = {
  Query: {
    people: () => people,
    person: (_, { id }) => getById(id),
  },
  Mutation: {
    addPerson: (_, { nickname, age, gender }) =>
      addPerson(nickname, age, gender),
    deletePerson: (_, { id }) => deletePerson(id),
  },
};

export default resolvers;
