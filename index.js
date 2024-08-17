const app = require("./app");
const PORT = 3002;
// start the server and listen on port 3001
app.listen(PORT, () => {
  console.log(`Server running at http://127.0.0.1:${PORT}`);
});
