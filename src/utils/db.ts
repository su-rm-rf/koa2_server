import mysql from 'mysql'

export const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'shopping',
})

export function exec(sql, value=false, cb) {

}