import { PiWhatsappLogo } from "react-icons/pi";
import { merriweather, openSans } from "./fonts/fonts";

export default function Home() {
  return (
    <>
      <header className="bg-[var(--color-header)]">
        <PiWhatsappLogo className="pl-10" size={100} />
      </header>
      <main className={`${merriweather.className} text-center text-white bg-black`}>
        <h1 className="text-6xl pt-11">DeFile</h1>
        <p className={`${openSans.className} text-[var(--color-text-primary)] text-base font-bold`}>Sistema de armazenamento em Blockchain</p>

        <div className={`${openSans.className} text-[var(--color-text-primary)] text-base font-bold pt-36 px-96 pb-32`}>
          <p>A DeFile é uma plataforma de armazenamento de dados seguro via blockchain. Nosso objetivo é oferecer aos usuários total autonomia, segurança e descentralização de seus dados
          </p>
          <button className="bg-[var(--color-button-primary)] mt-7 rounded-full px-16 py-3 text-white">Saiba Mais</button>
        </div>
      </main>

      <section className={`${merriweather.className} bg-amber-950 text-center text-[var(--color-text-primary)] font-bold`}>
        <h1 className="text-white text-5xl pt-28">Sobre a DeFile</h1>
        <p className={`${openSans.className} text-base px-80 pt-4 pb-9`}>A DeFile é uma plataforma inovadora que utiliza a tecnologia blockchain para oferecer aos usuários um serviço de armazenamento de dados seguro
        </p>
      </section>
    </>
  );
}
