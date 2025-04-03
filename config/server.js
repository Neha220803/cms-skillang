module.exports = ({ env }) => ({
  url: env("PUBLIC_URL", "https://skillang.com"),
  proxy: true,
  app: {
    keys: env.array("APP_KEYS"),
  },
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET"),
    },
  },
});
