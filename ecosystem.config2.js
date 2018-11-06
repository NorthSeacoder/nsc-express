module.exports = {
    //
    "apps": [{
        //process 名称
        "name": "demo1",
        // "cwd": "/工作/expressDemo/demo",
        //脚本地址
        "script": "./server/server.js",
        //log相关配置，禁用/dev/null
        "log_date_format": "YYYY-MM-DD HH:mm Z",
        "error_file": "logs/pm2log/error/node-app.stderr.log",
        "out_file": "logs/pm2log/out/node-app.stdout.log",
        "pid_file": "logs/pm2log/pids/node-geo-api.pid",
        //设置log格式
        //"log_type": "json",
        //实例数量max为根据cpu自动确定
        "instances": 1,
        "min_uptime": "200s",
        "max_restarts": 10,
        //内存过线则重启
        "max_memory_restart": "100M",
        //corn表达式每小时重启一次
        "cron_restart": "1 0 * * *",
        "watch": [
            "web",
            "server", "config"
        ],
        "ignore_watch": [
            "node_modules",
            "logs",
            "public"
        ],
        "merge_logs": true,
        "exec_interpreter": "node",
        "exec_mode": "cluster_mode",
        "autorestart": false,
        "vizion": true
    }, {
        //process 名称
        "name": "demo2",
        // "cwd": "/工作/expressDemo/demo",
        //脚本地址
        "script": "./server/server.js",
        //log相关配置，禁用/dev/null
        "log_date_format": "YYYY-MM-DD HH:mm Z",
        "error_file": "logs/pm2log/error/node-app.stderr.log",
        "out_file": "logs/pm2log/out/node-app.stdout.log",
        "pid_file": "logs/pm2log/pids/node-geo-api.pid",
        //设置log格式
        //"log_type": "json",
        //实例数量max为根据cpu自动确定
        "instances": 1,
        "min_uptime": "200s",
        "max_restarts": 10,
        //内存过线则重启
        "max_memory_restart": "100M",
        //corn表达式每小时重启一次
        "cron_restart": "1 0 * * *",
        "watch": [
            "web",
            "server", "config"
        ],
        "ignore_watch": [
            "node_modules",
            "logs",
            "public"
        ],
        "merge_logs": true,
        "exec_interpreter": "node",
        "exec_mode": "cluster_mode",
        "autorestart": false,
        "vizion": true
    }]
}