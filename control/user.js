
import { modelsConn } from '../utils/conn.js'
const { user } = await modelsConn('user')

/**
 * 查询所有用户 
 */
export const findAllUser = async (params) => { 
  const data = await user.findAll()
  return data
}

/**
 * 查询用户 
 */
export const findUser = async (params) => { 
  return null
}


/**
 * 更新用户 
 */
export const updateUser = async (params) => {
  return null
}

/**
 * 添加用户 
 */
export const addUser = async (params) => {
  return null
}