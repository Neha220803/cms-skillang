module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  server: {
    https: env.bool("USE_HTTPS", false)
      ? {
          key: "/etc/letsencrypt/live/skillang.com/privkey.pem",
          cert: "/etc/letsencrypt/live/skillang.com/fullchain.pem",
        }
      : undefined,
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
