import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _columns from  "./columns.js";
import _config from  "./config.js";
import _material from  "./material.js";
import _menu from  "./menu.js";
import _template from  "./template.js";
import _user from  "./user.js";

export default function initModels(sequelize) {
  const columns = _columns.init(sequelize, DataTypes);
  const config = _config.init(sequelize, DataTypes);
  const material = _material.init(sequelize, DataTypes);
  const menu = _menu.init(sequelize, DataTypes);
  const template = _template.init(sequelize, DataTypes);
  const user = _user.init(sequelize, DataTypes);


  return {
    columns,
    config,
    material,
    menu,
    template,
    user,
  };
}
