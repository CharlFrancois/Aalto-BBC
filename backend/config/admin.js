module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '32759afd8ff0b38c7e02e9f37bed5b9c'),
  },
});
