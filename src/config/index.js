module.exports = {
  port: process.env.PORT || 3000,
  apiPrefix: '/api',
  database: 'mongodb://localhost:27017/test',
  databasePro: 'mongodb://root:123456@110.110.110.110:27017/blog', // mongodb://用户名:密码@服务器公网IP:端口/库的名称
};
