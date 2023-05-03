import Head from "next/head";
import classes from "../styles/Home.module.css";
import Link from "next/link";
import Gallery from "../components/Gallery";

export default function Home() {
  return (
    <>
      <Head>
        <title>Adotta</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* --------- DESCRIZIONE ULIVETO --------- */}
      <div className={classes.flexContainer}>
        <div className={classes.textContainer}>
          <p className={classes.text}>
            L&apos; <i className={classes.greenText}>uliveto</i> si trova nell&apos; agro di Ruvo di Puglia, provincia di Bari, é situato nella contrada di ruvo di puglia, da piante d&apos; ulivo di qualità Coratina, gli alberi sono cresciuti in modo totalmente biologico, il tutto certificato da esami di laboratorio specialistico.
          </p>
        </div>
        <img className={classes.image} src="https://statics.cedscdn.it/photos/MED/65/93/4626593_1613_uliveto.jpg" alt="image not found"></img>
      </div>
      {/* --------- PASSAGGI ADOZIONE ULIVO --------- */}
      <div className={classes.flexContainer}>
        <img className={classes.image} src="https://statics.cedscdn.it/photos/MED/65/93/4626593_1613_uliveto.jpg" alt="image not found"></img>
        <div className={classes.advantagesContainer}>
          <h2 className={classes.sectionTitle}>Cosa puoi fare?</h2>
          <ol className={classes.advantages}>
            <li className={classes.text}>
              <p>
                Scegli il tuo albero dal{" "}
                <Link className={classes.greenLink} href={"/adopt"}>
                  catalogo.
                </Link>
              </p>
            </li>
            <li className={classes.text}>
              <p>Dagli un nome!</p>
            </li>
            <li className={classes.text}>
              <p>
                Partecipa alla raccolta e alla molitura delle <i className={classes.greenText}>olive</i>
              </p>
            </li>
            <li className={classes.text}>
              <p>
                Aumenta l&apos;assorbimento di CO<sub>2</sub>
              </p>
            </li>
            <li className={classes.text}>
              <p>Ricevi l&apos;olio prodotto dal tuo albero!</p>
            </li>
          </ol>
        </div>
      </div>
      {/* --------- LISTA COSA FACCIAMO NOI --------- */}
      <div>
        <h2 className={classes.sectionTitle}>Cosa facciamo noi</h2>
        <ul className={classes.moreSeparetedList}>
          <li className={classes.centralText}>Potiamo gli alberi</li>
          <li className={classes.centralText}>Ariamo il terreno</li>
          <li className={classes.centralText}>Concimiamo il terreno con fertilizzante biologico</li>
          <li className={classes.centralText}>Irrighiamo durante l&apos;estate</li>
          <li className={classes.centralText}>Curiamo con attenzione gli alberi</li>
        </ul>
      </div>
      {/* --------- GALLERIA --------- */}
      <h1 className={classes.sectionTitle}>Galleria</h1>
      <Gallery />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
