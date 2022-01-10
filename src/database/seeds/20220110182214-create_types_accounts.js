module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('type_accounts', [
      {
        name: 'Luz',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Agua',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('type_accounts', null, {});
  },
};
