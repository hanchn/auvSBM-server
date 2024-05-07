import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class template extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "标题"
    },
    content: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "内容"
    }
  }, {
    sequelize,
    tableName: 'template',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
