import classes from "../styles/City.module.css";

export default function City() {
  return (
    <div>
      <h1 className={classes.title}>Ruvo di puglia</h1>
      <picture>
        <source className={classes.mainImage} media="(max-width: 800px)" srcSet="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/7c/d1/d7/cattedrale-di-ruvo-di.jpg?w=500&h=-1&s=1"></source>
        <img className={classes.mainImage} draggable="false" src="https://www.comune.ruvodipuglia.ba.it/var/opencityruvodipuglia/storage/images/media/images/la-nostra-cattedrale-22/106839-1-ita-IT/La-nostra-cattedrale-2.jpg" alt="image not found"></img>
      </picture>
      <div className={classes.flexContainer}>
        <div className={classes.textContainer}>
          <p className={classes.text}>
            La <i className={classes.greenText}>concattedrale</i> di Ruvo di Puglia, dedicata a Santa Maria Assunta, è uno dei più importanti esempi di romanico pugliese. Fu costruita tra il XII e il XIII secolo con varie modifiche successive. L&apos;edificio si pone come la chiesa matrice e più importante di Ruvo ed è il fulcro del centro storico. È connessa al palazzo vescovile poiché è stata sede, fino al 1986, della diocesi di Ruvo.
          </p>
        </div>
        <iframe className={classes.map} frameborder="" src="https://www.google.com/maps/embed/v1/place?q=Ruvo+di+Puglia,+Metropolitan+City+of+Bari,+Italy&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
      </div>
    </div>
  );
}
