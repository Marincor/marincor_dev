import Head from "next/head"
import Image from "next/image"

const PortfolioContent = () => {
    return (
        <div>
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Marincor</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <main>
            <section className="author">
              <h1>Gabriel Claudino Marinho</h1>
              <h2>Desenvolvedor front-end</h2>
            </section>
            <section className="media">
              <div className="media__content">
                <Image src="/" alt="author_img" className="media__img" width={300} height={300} />
              </div>
            </section>
            <section className="social">
              <button className="social__butons">icon - email</button>
              <button className="social__butons">icon - linkedin </button>
              <button className="social__butons"> icon - github</button>
            </section>
          </main>
        </body>
      </div>
    )
};

export default PortfolioContent;