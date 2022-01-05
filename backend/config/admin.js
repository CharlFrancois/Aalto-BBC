module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fa2d5dd1fc2fc5eec37cc5f74a834e40'),
  },
});
