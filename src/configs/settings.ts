import fs from 'fs'
import path from 'path'

export const whiteList = {
  development: [
    'http://localhost:5350', 
    'http://localhost:4240',
  ],
  test: [
    'http://localhost:5351', 
    'http://localhost:4241',
  ],
  production: [
    'http://localhost:5352', 
    'http://localhost:4242',
  ],
}
export const privateKey = fs.readFileSync(path.resolve(__dirname, '../../keys/private.key'))
export const publicKey = fs.readFileSync(path.resolve(__dirname, '../../keys/public.key'))