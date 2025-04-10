const accountsService = require('../services/accountService');

const getAccounts = async (req, res) => {
  try {
    const accounts = await accountsService.getAccounts(req.userId); // From token middleware
    res.json(accounts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getAccounts };
