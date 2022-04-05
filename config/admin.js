module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3db815587aa23f926c296a9bb1091ff7'),
  },
});
