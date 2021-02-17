/**
 * Environment variables
 */
export const Env = {
  NODE_ENV: process.env.NODE_ENV,
  pusher:{
    ps_appId: process.env.ps_appId,
    ps_key: process.env.ps_key,
    ps_secret: process.env.ps_secret,
    ps_cluster: process.env.ps_cluster,
    ps_useTLS: process.env.ps_useTLS,
  }
}