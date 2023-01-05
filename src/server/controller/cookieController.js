const cookieController = {};


cookieController.verifyUser = (req, res, next) => {
  console.log('Inside verifyUser inside cookie controller.');
  

}






//will be called on sucessful login and will attach the user_id to a cookie for deck calls
cookieController.setCookie = (req, res, next) => {
  console.log('Inside set cookie inside cookie controller.');
  //wont have any res.locals yet will have to d
  console.log('res.locals.user_id: ', res.locals.user_id);
  res.cookie( 'username', res.locals.user_id);
  return next();
};

module.exports = cookieController;