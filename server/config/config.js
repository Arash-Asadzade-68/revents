const config = {
  production: {
    SECRET: process.env.SECRET,
    DATABASE: process.env.MONGODB_URL
  },
  default: {
    SECRET: "secretPassword123456",
    DATABASE: "mongodb://localhost:27017/Revents"
  }
};

exports.get = get = (env) => {
  return config[env] || config.default;
}