import { createClient, createCluster } from 'redis'

export const redisClient = createClient()
export const redisCluster = createCluster({
  rootNodes: [
    {
      url: ''
    },
    {
      url: ''
    },
  ]
})

redisClient.on('error', err => console.error('Redis client Error', err))
redisCluster.on('error', err => console.error('Redis Cluster Error', err))
