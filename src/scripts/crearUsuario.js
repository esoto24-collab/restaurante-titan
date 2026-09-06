const crearUsuario = (nombre, apellido, fecha_nacimiento, correo) => {
  const getNombre = () => nombre;
  const getApellido = () => apellido;
  const getfecha_nacimiento = () => fecha_nacimiento;
  const getCorreo = () => correo;

  const setNombre = (newName) => {
    nombre = newName;
  };
  const setApellido = (newApellido) => {
    apellido = newApellido;
  };
  const setFechaNacimiento = (newFechaNacimiento) => {
    fecha_nacimiento = newFechaNacimiento;
  };
  const setCorreo = (newCorreo) => {
    correo = newCorreo;
  };

  return {
    getNombre,
    getApellido,
    getfecha_nacimiento,
    getCorreo,
    setNombre,
    setApellido,
    setFechaNacimiento,
    setCorreo,
  };
};

export default crearUsuario;
