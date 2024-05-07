import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class columns extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "主键"
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "类型"
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "父节点"
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "标题"
    },
    keywords: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "关键词"
    },
    descrption: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "描述"
    },
    jump_url: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "跳转页面地址"
    },
    template_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "关联模板"
    }
  }, {
    sequelize,
    tableName: 'columns',
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
