console.log('accessing controller.js')

const router = require('../routes/router.js')

// render offline page
exports.offline = (req, res) =>{
    res.render('offline')
}

// render index page
exports.index = (req, res) => {

    

    res.render('./pages/index', { title: 'Express' });
}
// render users page
exports.users = (req, res, next)=> {
    res.send('respond with a resource');
  };