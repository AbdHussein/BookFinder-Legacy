const model = require('../resources/model');
const middlewares = require('../resources/middlewares')
const generateAccessToken = middlewares.generateAccessToken;
const UserModel = model.UserModel;

// module.exprts = (app) => {
  // app.post('/signup',
exports.signup = function (req, res){
    const { body } = req;
    const { firstName,
            lastName,
            password
          } = body;

    let { email } = body;
    if(!firstName){
      return res.send({
        success: false,
        message: 'Error: First Name cannot be blank'
      })
    }

    if(!lastName){
      return res.send({
        success: false,
        message: 'Error: Last Name cannot be blank'
      })
    }

    if(!password){
      return res.send({
        success: false,
        message: 'Error: Password cannot be blank'
      })
    }

    if(!email){
      return res.send({
        success: false,
        message: 'Error: Email cannot be blank'
      })
    }

    email = email.toLowerCase();
    UserModel.find({email: email}).then(prevUsers => {
      if(prevUsers.length > 0){
        return res.send({
          success: false,
          message: 'Error: email already exists'
        })
      } else {
        const newUser = new UserModel();
        const token = generateAccessToken(firstName);
        console.log(token, 'token4444444444');
        newUser.firstName = firstName;
        newUser.lastName = lastName;
        newUser.password = newUser.generateHash(password);
        newUser.email = email;
        newUser.save().then(user => {
          return res.send({
            success: true,
            message: 'Signed Up successfully'
          })
        }).catch(err => {
          console.log(err);
        })
      }
    }).catch(err => {
      console.log(err);
    })
  }
// )
// }
