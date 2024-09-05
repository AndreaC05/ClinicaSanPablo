
import "../Style/footer.css"; // Archivo CSS importado

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h2>Clínica San Pablo</h2>
          <p>¡Queremos verte bien!</p>
          <p>📞 (01) 615-6767 / 920 014 570</p>
          <p className="avenida">📍 Av. Belisario Suárez 998, San Juan de Miraflores</p>
          <ul className="footer-links">
            <li>Políticas de privacidad</li>
            <li>Solicitud ARCO</li>
            <li>Buzón de sugerencias</li>
            <li>Derechos y deberes</li>
            <li>20517737560</li>
            <li>CLÍNICA SANTA MARTHA DEL SUR SOCIEDAD ANÓNIMA CERRADA</li>
          </ul>
        </div>

        {/* Columna de Contacto */}
        <div className="footer-column">
          <h2>Contáctanos:</h2>
          <button className="contact-button ">Contáctanos</button>
          <h3>¡Síguenos!</h3>
          <div className="social-media">
            <span>
                 <img width={40} className="border-rounded-md" 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Logo_de_Facebook.png/599px-Logo_de_Facebook.png"
             alt="" />
              </span>
            <span>
            <img width={40} className="border-rounded-md" 
            src="https://img.freepik.com/vector-premium/logotipo-tik-tok_578229-290.jpg"
             alt="" />

            </span>
            <span>
            <img width={45} className="border-rounded-md" 
            src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"
             alt="" />
             </span>
            <span>

            <img width={40} className="border-rounded-md" 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png"
             alt="" />

            </span>
          </div>
          <h3>Descarga nuestra APP:</h3>
          <div className="app-buttons">
           
          <a href="https://play.google.com/store/apps/details?id=pe.com.sanpablo&amp;hl=es_DO" target="_blank"><span className="et_pb_image_wrap "><img loading="lazy" decoding="async" width="300" height="42" src="https://www.sanpablo.com.pe/wp-content/uploads/2024/03/googleplay-300x891-1.png" alt="" title="googleplay-300x891-1" className="wp-image-119"/></span></a>
          <a href="https://apps.apple.com/pe/app/san-pablo/id1241030381" target="_blank"><span className="et_pb_image_wrap "><img loading="lazy" decoding="async" width="300" height="42" src="https://www.sanpablo.com.pe/wp-content/uploads/2024/03/iostore-300x891-1.png" alt="" title="iostore-300x891-1" className="wp-image-109"/></span></a>           
          <a href="https://appgallery.cloud.huawei.com/ag/n/app/C101591543?locale=es_US&amp;source=appshare&amp;subsource=C101591543&amp;shareTo=com.google.android.gm&amp;shareFrom=appmarket&amp;shareIds=dff1cf89c1f84d70bc4a1f5397d0f90f_com.google.android.gm&amp;callType=SHARE" target="_blank"><span className="et_pb_image_wrap ">
            <img loading="lazy" decoding="async" width="300" height="42" src="https://www.sanpablo.com.pe/wp-content/uploads/2024/03/app-gallery.png" alt="" title="app-gallery" className="wp-image-110"/></span></a>
          </div>
        </div>

        {/* Columna de Red de Clínicas */}
        <div className="footer-column">
          <h2>Red de Clínicas San Pablo</h2>
          <ul className="footer-links">
            <li>Clínica San Pablo Surco</li>
            <li>Clínica San Gabriel</li>
            <li>Clínica Jesús del Norte</li>
            <li>Clínica San Juan Bautista</li>
            <li>Clínica San Pablo Arequipa</li>
            <li>Clínica San Pablo Trujillo</li>
            <li>Clínica San Pablo Huaraz</li>
            <li>Chacarilla - Medicina Física y Rehabilitación</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
