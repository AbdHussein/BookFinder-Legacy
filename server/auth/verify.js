const model = require('../resources/model');
const UserSessionModel =  model.UserSessionModel
exports.verify = function(req, res){
  const { params } = req;
  const { token } = params;
  // console.log(token, 'token');
  // console.log(typeof token, 'token');
  //_id: token, isDeleted: false
  UserSessionModel.find({ _id: Object(token), isDeleted: false }).then(sessions => {
    // console.log(typeof sessions[0]._id, 'sessions');
    if(sessions.length !== 1){
      return res.send({
        success: false,
        message: 'Error: invalid'
      })
    } else {
      return res.send({
        success: true,
        message: 'Great'
      })
    }

  }).catch(err => {
    console.log(err);
  })
}
