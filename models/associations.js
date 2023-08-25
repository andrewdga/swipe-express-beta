// models/associations.js
const User = require('./User');
const Account = require('./Account');
const Invoice = require('./Invoice');
const Transaction = require('./Transaction');

// Associations
User.hasMany(Account, { foreignKey: 'user_id', onDelete: 'CASCADE' });
Account.belongsTo(User, { foreignKey: 'user_id' });

Account.hasMany(Invoice, { foreignKey: 'account_id', onDelete: 'CASCADE' });
Invoice.belongsTo(Account, { foreignKey: 'account_id' });

Account.hasMany(Transaction, { foreignKey: 'account_id', onDelete: 'CASCADE' });
Transaction.belongsTo(Account, { foreignKey: 'account_id' });

Invoice.hasMany(Transaction, { foreignKey: 'invoice_id', onDelete: 'CASCADE' });
Transaction.belongsTo(Invoice, { foreignKey: 'invoice_id' });
