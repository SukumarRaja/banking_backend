const Account = require('../models/account');

const getAccounts = async (userId) => {
  return await Account.findAll({ where: { userId } });
};

module.exports = { getAccounts };
