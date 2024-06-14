let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #d4d323;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #9c3c86;">Soy estudiante de Ingeniería en Electrónica y Control de Sistemas de Aeronaves, con especial pasión por la creación de software aerotransportado </span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
