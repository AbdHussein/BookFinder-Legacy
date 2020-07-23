const model = require('../resources/model');
const UserModel = model.UserModel;
const UserSessionModel = model.UserSessionModel;

exports.login = function(req, res){
  const { body } = req;
  const { password } = body;
  let { email } = body;

  if(!password){
    return res.status(403).send({
      success: false,
      message: 'Error: password cannot be blank'
    })
  }

  if(!email){
    return res.status(403).send({
      success: false,
      message: 'Error: email cannot be blank'
    })
  }

  email = email.toLowerCase();

  UserModel.find({ email:email })
            .then(users => {
              if(users.length !== 1){
                return res.send({
                  success: false,
                  message: 'This user does not exist. Sign up'
                })
              }
          const user = users[0];
          if(!user.validPassword(password)){
            return res.status(403).send({
              success: false,
              message: 'Error: password is incorrect'
            })
          }
          const newSession = new UserSessionModel();
          newSession.userId = user._id;
          newSession.save().then(session => {
            return res.send({
              success: true,
              message: 'Logged in successfully',
              token: user._id
            })
          }).catch(err => {
            console.log(err);
          })
            })
            .catch(err => {
                    console.log(err);
                    })

}
