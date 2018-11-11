{
    "version": 2,
    "builds": [
        { "src": "www/package.json", "use": "@now/next" },
        { "src": "api/properties/*.js", "use": "@now/node" }
    ],
    "routes": [
        { "src": "/api/(.*)", "dest": "/api/$1" },
        { "src": "/(.*)", "dest": "/www/$1" }
    ]
}
