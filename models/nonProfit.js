module.exports = function(sequelize, DataTypes) {
  var nonProfit = sequelize.define("nonProfit", {
    name: {type: DataTypes.STRING, allowNull: false, validate: {len: [1]}},
  });

  return nonProfit;
};
