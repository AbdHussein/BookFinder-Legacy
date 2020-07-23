const model = require('../resources/model')
const UserSessionModel = model.UserSessionModel;

exports.logout = function(req, res){
  var { params } = req;
  var { token } = params;
  // console.log(token, 'token');
  // console.log(typeof token, 'token');

  UserSessionModel.findOneAndUpdate({_id: Object(token), isDelete: false},
   {$set: {isDeleted: true}}, null)
     .then(session => {
    console.log(session, 'session111111111111111');
    return res.send({
      success: true,
      message: 'Good'
    })
  }).catch(err => {
    console.log(err);
  })
}
