/*
 * conn database
 */
import Sequelize from 'sequelize'
import config from '../config/config.js'
import initModels from '../models/init-models.js'
const { database, username, userpwd, dialect, host, port, logging } = config
export const conn =  () => new Promise(async (reslove, reject) => {
    const sequelize = new Sequelize(
        database,
        username,
        userpwd, {
        dialect,
        host,
        port,
        logging
    }
    )
    try {
        await sequelize.authenticate();
        return reslove(sequelize)
    } catch (error) { 
        return reject(`Unable to connect to the database: ${error}`)
    }
})

export const modelsConn = async (key = null) => { 
    const sequelize = await conn()
    const models = initModels(sequelize)
    return key ? {[key] : models[key]} : models
}

/**
 * 创建模型 
 * args: {
 *   table 表名
 *   params 传参
 * }
 */
export const sequelize = (sequelize, table, params) => sequelize.define(`${table}`, {...params }, { freezeTableName: true, table, timestamps: false })


export default conn