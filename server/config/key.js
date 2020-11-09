//express.js의 config 안에 process.env.node_env
//개발과 배포에 따라 분기처리
if (process.env.NODE_ENV === "production") {
  module.exports = require("./prod");
} else {
  module.exports = require("./dev");
}
