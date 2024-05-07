import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class user extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nick_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "姓名"
    },
    tel: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "手机号"
    },
    gender: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "性别"
    },
    root: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "权限"
    }
  }, {
    sequelize,
    tableName: 'user',
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
