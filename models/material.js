import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class material extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "素材名"
    },
    src: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "素材地址"
    }
  }, {
    sequelize,
    tableName: 'material',
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
