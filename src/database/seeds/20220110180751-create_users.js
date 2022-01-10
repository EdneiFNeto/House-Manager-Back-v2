const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Ednei',
          password_has: await bcryptjs.hash('123456', 8),
          email: 'ed@gmail.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Arthur',
          password_has: await bcryptjs.hash('123456', 8),
          email: 'ar@gmail.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Rodrigo',
          password_has: await bcryptjs.hash('123456', 8),
          email: 'ro@gmail.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
