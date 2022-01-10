module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('accounts_users', [
      {
        discount: 30,
        user_id: 1,
        type_id: 1,
        value: 300.0,
        status: false,
        register_date: new Date(),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('accounts_users', null, {});
  },
};
