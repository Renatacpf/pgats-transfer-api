const app = require('./app');
const PORT = process.env.GRAPHQL_PORT || 4020;
app.listen(PORT, () => {
  console.log(`GraphQL server running on port ${PORT}`);
});
