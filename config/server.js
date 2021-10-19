module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 4001),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '1945e538680ba01c49fd05a269c1f917'),
    },
  },
});
