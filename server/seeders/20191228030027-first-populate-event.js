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
   return queryInterface.bulkInsert('Events', [
    {
      title:'Rosa',
      category_id: '1',
      startTime: '2019-12-30 18:00:00',
      endTime: '2019-12-30 23:00:00',
      price: '250000',
      description: 'lorem ipsum.........',
      address: 'Aula Bintaro',
      urlMaps: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15863.145812678567!2d106',
      img: 'http://someimage.net/rosa-pamflet.png',
      user_id: '1',
     createdAt: new Date(),
     updatedAt: new Date()
    },
    {
      title:'Isyana',
      category_id: '2',
      startTime: '2019-12-30 18:00:00',
      endTime: '2019-12-30 23:00:00',
      price: '400000',
      description: 'lorem ipsum.........',
      address: 'Komplek Permata bintaro',
      urlMaps: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15863.145812678567!2d106',
      img: 'http://someimage.net/rosa-pamflet.png',
      user_id: '2',
     createdAt: new Date(),
     updatedAt: new Date()
    },
    {
      title:'Payung Teduh',
      category_id: '2',
      startTime: '2019-12-30 18:00:00',
      endTime: '2019-12-30 23:00:00',
      price: '30000',
      description: 'lorem ipsum.........',
      address: 'Komplek Permata bintaro',
      urlMaps: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15863.145812678567!2d106',
      img: 'http://someimage.net/rosa-pamflet.png',
      user_id: '2',
     createdAt: new Date(),
     updatedAt: new Date()
    },{
      title:'Raisa',
      category_id: '3',
      startTime: '2019-12-30 18:00:00',
      endTime: '2019-12-30 23:00:00',
      price: '5000000',
      description: 'lorem ipsum.........',
      address: 'Bintaro Exchange',
      urlMaps: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15863.145812678567!2d106',
      img: 'http://someimage.net/rosa-pamflet.png',
      user_id: '3',
     createdAt: new Date(),
     updatedAt: new Date()
    },
    {
      title:'Maudy Ayunda',
      category_id: '3',
      startTime: '2019-12-30 18:00:00',
      endTime: '2019-12-30 23:00:00',
      price: '2500000',
      description: 'lorem ipsum.........',
      address: 'Bintaro Exchange',
      urlMaps: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15863.145812678567!2d106',
      img: 'http://someimage.net/rosa-pamflet.png',
      user_id: '3',
     createdAt: new Date(),
     updatedAt: new Date()
    },
    {
      title:'Fariz',
      category_id: '3',
      startTime: '2019-12-30 18:00:00',
      endTime: '2019-12-30 23:00:00',
      price: '50000',
      description: 'lorem ipsum.........',
      address: 'Bintaro Exchange',
      urlMaps: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15863.145812678567!2d106',
      img: 'http://someimage.net/rosa-pamflet.png',
      user_id: '3',
     createdAt: new Date(),
     updatedAt: new Date()
    }
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Events', null, {});
  }
};
