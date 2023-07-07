const register = (req, res) => {
    const { username, password } = req.body;
  
    // Aquí puedes agregar la lógica para registrar al usuario en tu base de datos o realizar cualquier otra acción necesaria
  
    res.status(200).json({ message: 'Usuario registrado exitosamente' });
  };
  
  module.exports = {
    register
  };
  