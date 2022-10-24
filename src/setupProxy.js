import proxy from 'http-proxy-middleware';

module.exports = function(app) {
    const headers  = {
        "Content-Type": "application/json",
    }
    app.use(proxy("/api/execute/", { target: "http://127.0.0.1:8000",changeOrigin: true,secure: false,headers: headers}));  
};