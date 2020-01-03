'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Users', [
     {
      name: 'John Doe',
      username: 'johneffingdoe',
      phone: '081234567890',
      email: 'doe@mail.com',
      password: 'asdasdasd',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      name: 'Albert',
      username: 'alberto',
      phone: '081234567890',
      email: 'albert@mail.com',
      password: 'asdasdasd',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      name: 'Habsyah',
      username: 'sultan',
      phone: '081234567890',
      email: 'akusultan@mail.com',
      password: 'asdasdasd',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Users', null, {});

  }
};
