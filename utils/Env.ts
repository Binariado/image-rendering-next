/**
 * Environment variables
 */
export const Env = {
  NODE_ENV: process.env.NODE_ENV,
  pusher:{
    appId: process.env.ps_appId,
    key: process.env.ps_key,
    secret: process.env.ps_secret,
    cluster: process.env.ps_cluster,
    useTLS: process.env.ps_useTLS,
  }
}