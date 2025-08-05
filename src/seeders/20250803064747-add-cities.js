'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cities', [
      {
        id: 3,
        name: 'Mumbai',
        createdAt: new Date('2022-12-15 16:27:00'),
        updatedAt: new Date('2022-12-15 16:27:00'),
      },
      {
        id: 4,
        name: 'New Delhi',
        createdAt: new Date('2022-12-15 16:28:34'),
        updatedAt: new Date('2022-12-15 16:28:34'),
      },
      {
        id: 6,
        name: 'Kolkata',
        createdAt: new Date('2022-12-15 16:32:59'),
        updatedAt: new Date('2022-12-15 16:32:59'),
      },
      {
        id: 9,
        name: 'Bengaluru',
        createdAt: new Date('2022-12-15 16:33:11'),
        updatedAt: new Date('2022-12-15 16:33:11'),
      },
      {
        id: 10,
        name: 'Chennai',
        createdAt: new Date('2022-12-15 16:33:15'),
        updatedAt: new Date('2022-12-15 16:33:15'),
      },
      {
        id: 11,
        name: 'Prayagraj',
        createdAt: new Date('2022-12-15 16:33:22'),
        updatedAt: new Date('2022-12-15 16:33:22'),
      },
      {
        id: 12,
        name: 'Ahmedabad',
        createdAt: new Date('2022-12-15 16:33:30'),
        updatedAt: new Date('2022-12-15 16:33:30'),
      },
      {
        id: 13,
        name: 'Pune',
        createdAt: new Date('2022-12-15 16:33:33'),
        updatedAt: new Date('2022-12-15 16:33:33'),
      },
      {
        id: 14,
        name: 'Patna',
        createdAt: new Date('2022-12-15 16:33:42'),
        updatedAt: new Date('2022-12-15 16:33:42'),
      },
      {
        id: 15,
        name: 'Varanasi',
        createdAt: new Date('2022-12-15 16:33:47'),
        updatedAt: new Date('2022-12-15 16:33:47'),
      },
      {
        id: 16,
        name: 'Indore',
        createdAt: new Date('2022-12-15 16:44:56'),
        updatedAt: new Date('2022-12-15 16:44:56'),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cities', {
      id: [3, 4, 5, 9, 10, 11, 12, 13, 14, 15, 16]
    }, {});
  }
};
