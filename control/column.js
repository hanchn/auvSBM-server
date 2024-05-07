import { modelsConn } from '../utils/conn.js'
const { column } = await modelsConn('column')


/**
 * 查询所有栏目 
 */
const findColumns = async (params) => {
  const data = await column.findAll()
  return data
}

/**
 * 查询栏目 
 */
const findColumn = async (params) => {
  return null
}

/**
 * 更新栏目
 */
const updateColumn = async (params) => {
  return null
}

/**
 * 添加栏目
 */
const addColumn = async (params) => {
  return null
}