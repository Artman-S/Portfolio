const models = require("../models");

const login = async (req, res) => {
  const { email, pw } = req.body;
  // TODO validations (length, format...)
  models.user
    .findByEmail(email)
    .then(([user]) => {
      if (!user) {
        return res.status(403).json({ error: "User not found" });
      }
      // vérifier le MDP
      models.user
        .findByPW(user.pw, pw)
        .then((match) => {
          if (match) {
            return res.status(200).json({ sucess: "User logged" });
          }
          return res.status(403).json({ error: "password incorrect" });
        })
        .catch((error) => {
          console.error(error);
        });
      return false;
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  login,
};
