const { UserModel } = require("../model/user.model");

// const AddUser = async (req,res)=>{
//       try {
//         const userDetail = await UserModel.findOne({ email : req.body.email})
//         if(userDetail){
//             res.status(200).json({"msg" : "User Already exists"})
//         }
//         const user = new UserModel(req.body);
//         await user.save();
//         res.status(200).json(user);
//       } catch (error) {
//         res.status(500).json({"msg" : "Error in saving user", error : error})
//       }
// }

const AddUser = async (req, res) => {
   const { email, name, picture, sub } = req.body;
  try {
    const userbody = await UserModel.findOne({ email });
    if (userbody) {
      res.send({ msg: "User Already Exists ." });
    } else {
      console.log(req.body)
      const Newuser = new UserModel({ email, name, picture, sub });
      await Newuser.save();
      res.status(200).json({ msg: "User Registered Successfully" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error in saving user", error : error });
  }
};

module.exports = {
  AddUser,
};
