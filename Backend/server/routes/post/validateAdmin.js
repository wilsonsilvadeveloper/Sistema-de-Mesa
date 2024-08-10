//routes
const validateAdm = (req, res)=> {
      //validate admin
      if(req.body.email === 'admin.com@gmail.com' && req.body.senha === 'admin'){
            console.log('email: ' + req.body.email);
            console.log('password: ' + req.body.senha);
            res.status(200).json({message: 'Success'});
      } else {
          res.status(401).json({message: 'Invalid credentials'});
      }
}


module.exports = validateAdm;