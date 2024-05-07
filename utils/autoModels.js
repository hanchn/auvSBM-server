// utils/mysql/sequelize-auto/auto.js
import SequelizeAuto from 'sequelize-auto'
import config from '../config/test.js'
const { host, username, userpwd, database, dialect, port } = config
const options = {
  host,
  dialect,
  directory: 'models',  // 指定输出 models 文件的目录
  port,
  additional: {
    timestamps: true
  },
  lang: "esm"
}
const auto = new SequelizeAuto(database, username, userpwd, options)

auto.run(err => {
  if (err) throw err
})
