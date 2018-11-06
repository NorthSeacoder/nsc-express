module.exports = {
  apps: [{
    name: 'API',
    script: './server/server.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    instances: 1,
    autorestart: false,
    //log相关配置，禁用/dev/null
    // "log_date_format": "YYYY-MM-DD HH:mm Z",
    // "error_file": "./logs/pm2log/error/node-app.stderr.log",
    // "out_file": "./logs/pm2log/out/node-app.stdout.log",
    // "pid_file": "./logs/pm2log/pids/node-geo-api.pid",
    // disable_logs: true,
    watch: true,
    //实例数量max为根据cpu自动确定
    "instances": 1,
    "exec_mode": "cluster",
    "exec_interpreter": "node",
    "max_restarts": 2,
    "min_uptime": "200s",
    //合并log
    max_memory_restart: '100M',
    //corn表达式每小时重启一次
    "cron_restart": "1 0 * * *",
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],
};