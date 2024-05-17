import { Typography } from "@mui/material"

const AboutUS = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "50px 200px",
      }}
    >
      <Typography gutterBottom variant="h5" component="div" color="primary">
        Sobre Nosotros
      </Typography>
      <div>
        <Typography variant="body1">
          <strong style={{ color: "#622d8b" }}>Bienvenido a SportClub</strong>,
          tu destino definitivo para encontrar las zapatillas perfectas que se
          adapten a tu estilo de vida activo. En SportClub, creemos en la
          combinación perfecta de comodidad, estilo y rendimiento en cada paso
          que das. Fundada por entusiastas del deporte, en SportClub nos
          apasiona proporcionar a nuestros clientes una experiencia de compra
          excepcional mientras los equipamos con calzado que los inspire a
          alcanzar sus metas deportivas y de estilo.
        </Typography>
      </div>
      <div>
        <Typography variant="body1">
          <strong style={{ color: "#622d8b" }}>Nuestra Misión:</strong> Nuestra
          misión es simple: brindar una amplia selección de las mejores marcas
          de zapatillas deportivas, garantizando la satisfacción del cliente en
          cada compra. Nos esforzamos por ofrecer un servicio personalizado,
          asesoramiento experto y productos de calidad que superen las
          expectativas de nuestros clientes más exigentes.
        </Typography>
      </div>
      <div>
        <Typography variant="body1">
          <strong style={{ color: "#622d8b" }}>
            Nuestro Compromiso con la Calidad:
          </strong>{" "}
          En SportClub, nos enorgullecemos de ofrecer solo lo mejor. Trabajamos
          en estrecha colaboración con marcas reconocidas a nivel mundial para
          garantizar que cada par de zapatillas que vendemos cumpla con nuestros
          rigurosos estándares de calidad. Desde el diseño hasta la fabricación,
          cada detalle se cuida meticulosamente para brindarte un calzado que
          destaque tanto en estilo como en rendimiento.
        </Typography>
      </div>
      <div>
        <Typography variant="body1">
          <strong style={{ color: "#622d8b" }}>Nuestra Comunidad:</strong> En
          SportClub, no solo nos dedicamos a vender zapatillas; también nos
          esforzamos por construir una comunidad apasionada de amantes del
          deporte y la moda. Desde eventos exclusivos hasta consejos de estilo,
          queremos ser tu recurso de confianza para todo lo relacionado con el
          mundo del calzado deportivo.
        </Typography>
      </div>
      <div>
        <Typography variant="body1">
          <strong style={{ color: "#622d8b" }}>
            Únete a la Familia SportClub:
          </strong>{" "}
          Ya sea que estés buscando el par perfecto de zapatillas para correr,
          entrenar o simplemente destacar tu estilo diario, estamos aquí para
          ayudarte a encontrar exactamente lo que necesitas. Únete a la familia
          SportClub hoy y lleva tu pasión por el deporte y la moda al siguiente
          nivel.
        </Typography>
      </div>
    </div>
  )
}

export default AboutUS
