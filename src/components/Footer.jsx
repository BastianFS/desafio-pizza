import Container from 'react-bootstrap/Container'

function FooterPizza() {
  return (
    <div className='d-flex bg-success justify-content-center'>
       <div>
        <h5 className='hh-footer'>¡Pizzeria Mamma Mia!</h5>
      </div>
      <div>
        <h5 className='h-footer'>Conócenos</h5>
        <p className='p-footer'>Nosotros</p>
        <p className='p-footer'>Zona de delivery</p>
        <p className='p-footer'>Preguntas frecuentes</p>
        <p className='p-footer'>Terminos y condiciones de uso</p>
      </div>
      <div>
        <h5 className='h-footer'>Redes sociales</h5>
        <p className='p-footer'>Instagram</p>
        <p className='p-footer'>Facebook</p>
      </div>
      <div>
        <h5 className='h-footer'>Mi cuenta</h5>
        <p className='p-footer'>Pedir</p>
        <p className='p-footer'>Iniciar sesión</p>
      </div>
    </div>
  );
}

export default FooterPizza;