import userModel from "../models/user.model.js";

export function userRegisteration(res, req) {
  const { username, email, password } = req.body;

  userModel
    .find({
      $or: [{ username }, { email }],
    })
    .then((user) => {
      if (user) {
        res.status(409).json({ message: "user already exist" });
      }
      new userModel({
        username,
        email,
        password,
      })
        .save()
        .then((newUser) => {
          res.status(200).json({ message: "user registered", user: newUser });
        })
        .catch((error) => {
          res
            .status(500)
            .json({
              message: "user not registered something went wrong",
              error: error,
            });
        });
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: "error in find username or email", error: error });
    });
}
