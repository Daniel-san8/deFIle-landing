import { PiLock, PiWhatsappLogo } from "react-icons/pi";
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

        <div className={`${merriweather.className} flex gap-7 justify-center text-white px-40 pb-20`}>
          <div className="flex-1 rounded-3xl" style={{
            background: 'linear-gradient(to bottom, var(--color-button-primary) 10%, var(--color-header) 10%)',
          }}>
            <h2 className="text-3xl pt-11">Benefícios</h2>
            <p className={`${openSans.className} text-base pt-14 px-16 font-bold`}>Maior autonomia, controle e segurança dos usuários frente aos seus documentos digitais.</p>
          </div>
          <div className="flex-1 rounded-3xl" style={{
            background: 'linear-gradient(to bottom, var(--color-button-primary) 10%, var(--color-header) 10%)',
          }}>
            <h2 className="text-3xl pt-11">Diferencial</h2>
            <p className={`${openSans.className} text-base pt-10 pb-6 px-16 font-bold`}>Estrutura decentralizada, que preza pelo cuidado do armazenamento dos seus dados, provendo maior segurança frente a meios tradicionais.</p>
          </div>
        </div>
      </section>

      <section className={`${merriweather.className} text-center bg-[var(--color-bg-primary)]`}>
        <h1 className="text-5xl pt-12 text-white">Propósito</h1>
        <p className={`${openSans.className} pt-6 text-[var(--color-text-primary)] font-bold pb-16`}>Fornecer a melhor experiência em armazenamento de dados</p>

        <div className={`${openSans.className} flex gap-6 px-7`}>
          <div className="flex-1 bg-[var(--color-bg-secondary)] rounded-4xl">
            <h3 className="text-[var(--color-button-primary)] text-2xl pt-7 font-bold">Missão</h3>
            <p className="pt-28 text-[var(--color-text-primary)] text-base px-12 font-bold">Proteger a privacidade digital e garantir o controle total dos usuários sobre seus arquivos, oferecendo armazenamento seguro, descentralizado e imutável.</p>
          </div>
          <div className="flex-1 bg-[var(--color-bg-secondary)] rounded-4xl">
            <h3 className="text-[var(--color-button-primary)] text-2xl pt-5 font-bold">Visão</h3>
            <p className="pt-28 text-[var(--color-text-primary)] text-base px-16 font-bold">Ser a principal plataforma de armazenamento descentralizado do mundo, garantindo segurança, acessibilidade e autonomia digital para milhões de usuários.</p>
          </div>


          <div className="flex-1 bg-[var(--color-bg-secondary)] rounded-4xl">
            <h3 className="text-[var(--color-button-primary)] text-2xl pt-7 font-bold">Valores</h3>
            <div className="flex flex-col pt-16 items-center pb-6">
              <div className="flex-col gap-y-1">
                <div className="flex items-center justify-center gap-1"><PiLock size={20} color="#1dc95d" /> <span className="text-base font-bold text-[var(--color-text-primary)]">Segurança</span>
                </div>
                <p className="text-sm text-[var(--color-text-primary)] px-10">
                  Garantir a proteção absoluta dos dados dos usuários.
                </p>
              </div>
              <div className="flex-col gap-y-1">
                <div className="flex items-center justify-center gap-1">
                  <PiLock size={20} color="#1dc95d" />
                  <span className="text-base font-bold text-[var(--color-text-primary)]">
                    Descentralização
                  </span>
                </div>
                <p className="text-sm text-[var(--color-text-primary)] px-10">
                  Remover qualquer ponto único de falha ou controle.
                </p>
              </div>
              <div className="flex-col gap-y-1">
                <div className="flex items-center justify-center gap-1">
                  <PiLock size={20} color="#1dc95d" />
                  <span className="text-base font-bold text-[var(--color-text-primary)]">
                    Transparência
                  </span>
                </div>
                <p className="text-sm text-[var(--color-text-primary)] px-10">
                  Registrar todas as transações e processos na blockchain.
                </p>
              </div>
              <div className="flex-col gap-y-1">
                <div className="flex items-center justify-center gap-1">
                  <PiLock size={20} color="#1dc95d" />
                  <span className="text-base font-bold text-[var(--color-text-primary)]">
                    Simplicidade
                  </span>
                </div>
                <p className="text-sm text-[var(--color-text-primary)] px-10">
                  Criar uma experiência intuitiva para adoção em massa.
                </p>
              </div>
              <div className="flex-col gap-y-1">
                <div className="flex items-center justify-center gap-1">
                  <PiLock size={20} color="#1dc95d" />
                  <span className="text-base font-bold text-[var(--color-text-primary)]">
                    Inovação Contínua
                  </span>
                </div>
                <p className="text-sm text-[var(--color-text-primary)] px-10">
                  Buscar melhorias tecnológicas constantes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
