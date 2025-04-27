const error404 = (req, res) => {
  res.status(404).render('error' , {
      title: '404 Not Found',
      code: '404 Not Found',
      message: 'Not Found',
    }); 
  };
  
  export default {
      error404,
  }