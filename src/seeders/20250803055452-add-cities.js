'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cities', [
      {
        id: 3,
        name: 'Mumbai',
       createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        id: 4,
        name: 'New Delhi',
       createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        id: 6,
        name: 'Kolkata',
       createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        id: 9,
        name: 'Bengaluru',
        createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        id: 10,
        name: 'Chennai',
        createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        id: 11,
        name: 'Prayagraj',
        createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        id: 12,
        name: 'Ahmedabad',
       createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        id: 13,
        name: 'Pune',
        createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        id: 14,
        name: 'Patna',
        createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        id: 15,
        name: 'Varanasi',
        createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        id: 16,
        name: 'Indore',
        createdAt: new Date(),
      updatedAt: new Date()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Cities', null, {});
  }
};
