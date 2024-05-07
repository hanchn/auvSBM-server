import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class config extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true,
      comment: "站点id"
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "标题"
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "描述"
    },
    keywords: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "关键词"
    }
  }, {
    sequelize,
    tableName: 'config',
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
