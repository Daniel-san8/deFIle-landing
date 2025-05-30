"use client";

import { PiDiscordLogo, PiGithubLogo, PiInstagramLogo, PiLock, PiXLogo } from "react-icons/pi";
import { merriweather, openSans } from "./fonts/fonts";
import { FaBuilding } from "react-icons/fa";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { sendToSheets } from "./utils/send-to-sheets";
import { toast } from "sonner";
import { useState } from "react";
import { Loading } from "@/Loading";
import Image from "next/image";
import { IMaskInput } from "react-imask";

const phoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;

const schemaContact = z.object({
  name: z.string().min(3).max(35),
  email: z.string().email(),
  contact: z.string().regex(phoneRegex, 'Número de telefone inválido'),
});

type FormData = z.infer<typeof schemaContact>;

export default function Home() {
  const { register, handleSubmit, formState: { errors, touchedFields }, setValue } = useForm<FormData>({
    resolver: zodResolver(schemaContact),
    mode: "onBlur"
  })
  const [loading, setLoading] = useState(false)
  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true)
      const response = await sendToSheets(data);
      if (!response.success) throw new Error(response.error)
      toast.success('Cadastro enviado com sucesso!');
    } catch (error) {
      if (error instanceof Error) toast.error(error.message);
    } finally {
      setLoading(false)
    }
  };

  return (

    <>
      <header className="bg-[var(--color-header)]">
        <Image src={"/assets/logobg.png"} className="pl-10" height={200} width={200} alt="logo" />
      </header>
      <main className={`${merriweather.className} text-center text-white bg-cover bg-[url(/assets/bg7.png)]`}>
        <h1 className="text-6xl pt-11">dFile</h1>
        <p className={`${openSans.className} text-[var(--color-text-primary)] text-base font-bold pt-3 px-6 md:px-0 md:pt-0`}>Sistema de armazenamento em Blockchain</p>

        <div className={`${openSans.className} text-[var(--color-text-primary)] text-base font-bold pt-8 px-4 pb-16 md:pt-16 md:px-32 lg:px-96 lg:pt-36 lg:pb-32`}>
          <p>A dFile é uma plataforma de armazenamento de dados seguro via blockchain. Nosso objetivo é oferecer aos usuários total autonomia, segurança e descentralização de seus dados
          </p>
          <a className="inline-block cursor-pointer bg-[var(--color-button-primary)] mt-7 rounded-full px-16 py-3 text-white">Saiba Mais</a>
        </div>
      </main>

      <section id="enterprise" className={`${merriweather.className} text-center text-[var(--color-text-primary)] font-bold bg-[url(/assets/bg8.png)] bg-cover`}>
        <h1 className="text-white text-5xl pt-14 px-5 md:px-0 md:pt-28">Sobre a dFile</h1>
        <p className={`${openSans.className} text-base px-16 pt-4 pb-9 lg:px-80`}>A dFile é uma plataforma inovadora que utiliza a tecnologia blockchain para oferecer aos usuários um serviço de armazenamento de dados seguro
        </p>

        <div className={`${merriweather.className} flex flex-col gap-7 justify-center text-white px-6 pb-20 md:flex-row md:px-40`}>
          <div className="flex-1 rounded-3xl px-16" style={{
            background: 'linear-gradient(to bottom, var(--color-button-primary) 10%, var(--color-header) 10%)',
          }}>
            <h2 className="text-3xl pt-11">Benefícios</h2>
            <p className={`${openSans.className} text-base py-4 font-bold md:pt-14 md:py-0`}>Maior autonomia, controle e segurança dos usuários frente aos seus documentos digitais.</p>
          </div>
          <div className="flex-1 rounded-3xl px-16" style={{
            background: 'linear-gradient(to bottom, var(--color-button-primary) 10%, var(--color-header) 10%)',
          }}>
            <h2 className="text-3xl pt-11">Diferencial</h2>
            <p className={`${openSans.className} text-base pt-4 pb-6 font-bold md:pt-10`}>Estrutura decentralizada, que preza pelo cuidado do armazenamento dos seus dados, provendo maior segurança frente a meios tradicionais.</p>
          </div>
        </div>
      </section>

      <section id="about" className={`${merriweather.className} text-center bg-[var(--color-bg-primary)] pb-12`}>
        <h1 className="text-5xl pt-12 text-white">Propósito</h1>
        <p className={`${openSans.className} pt-6 text-[var(--color-text-primary)] font-bold pb-16`}>Fornecer a melhor experiência em armazenamento de dados</p>

        <div className={`${openSans.className} flex flex-col gap-6 px-7 lg:flex-row`}>
          <div className="flex-1 bg-[var(--color-bg-secondary)] rounded-4xl">
            <h3 className="text-[var(--color-button-primary)] text-2xl pt-7 font-bold">Missão</h3>
            <p className="py-3 text-[var(--color-text-primary)] text-base px-6 font-bold md:px-24 lg:pt-28 lg:py-0">Proteger a privacidade digital e garantir o controle total dos usuários sobre seus arquivos, oferecendo armazenamento seguro, descentralizado e imutável.</p>
          </div>
          <div className="flex-1 bg-[var(--color-bg-secondary)] rounded-4xl">
            <h3 className="text-[var(--color-button-primary)] text-2xl pt-5 font-bold">Visão</h3>
            <p className="py-3 text-[var(--color-text-primary)] text-base px-6 font-bold md:px-24 lg:pt-28 lg:py-0">Ser a principal plataforma de armazenamento descentralizado do mundo, garantindo segurança, acessibilidade e autonomia digital para milhões de usuários.</p>
          </div>

          <div className="flex-1 bg-[var(--color-bg-secondary)] rounded-4xl">
            <h3 className="text-[var(--color-button-primary)] text-2xl pt-7 font-bold">Valores</h3>
            <div className="flex flex-col pt-4 items-center pb-6 gap-y-4 lg:pt-16">
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

      <section id="help" className={`${openSans.className} bg-[var(--color-bg-secondary)] text-center`}>
        <h3 className={`${merriweather.className} text-white text-3xl pt-16 pb-8 font-bold`}>Gostou da ideia do Projeto?</h3>
        <p className="text-base font-bold text-[var(--color-text-primary)] pb-5 lg:pb-24">Inscreva-se abaixo para estar recebendo atualizações exclusivas do projeto</p>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 px-6 justify-center pb-6 md:px-44 lg:pb-20">
          <input {...register("name")} className="text-[var(--color-text-primary)] border border-[var(--color-button-primary)] rounded-3xl p-3" placeholder="Nome Completo" />
          {errors.name && <span className="text-start text-red-400">Digite um nome válido!</span>}
          <input {...register("email")} className="text-[var(--color-text-primary)] border border-[var(--color-button-primary)] rounded-3xl p-3" placeholder="Endereço de Email" />
          {errors.email && <span className="text-start text-red-400">Digite um email válido!</span>}

          <IMaskInput
            mask="(00) 00000-0000"
            id="contact"
            placeholder="(00) 00000-0000"
            className="text-[var(--color-text-primary)] border border-[var(--color-button-primary)] rounded-3xl p-3 w-full"
            {...register("contact", {
              required: "Campo obrigatório",
              validate: (value) =>
                phoneRegex.test(value) || "Digite um telefone válido",
            })}
            onAccept={(value: string) => {
              setValue("contact", value, { shouldValidate: true });
            }}
          />

          {errors.contact && touchedFields.contact && (
            <span className="text-start text-red-400">{errors.contact.message}</span>
          )}


          <div><button disabled={loading} className="bg-transparent font-bold border-2 border-[var(--color-button-primary)] text-[var(--color-button-primary)] rounded-4xl px-14 py-2 cursor-pointer">{loading ? <Loading /> : "Enviar"}</button></div>
        </form>
      </section>

      <section id="resources" className={`${openSans.className} text-center bg-[var(--color-bg-primary)] px-11 pb-12`}>
        <h1 className={`${merriweather.className} text-white text-5xl pt-16 pb-5`}>Parcerias</h1>
        <p className="text-[var(--color-text-primary)] text-base font-bold pb-5">
          Junte-se a nós e destaque sua marca
        </p>

        <div className="w-full h-1 bg-[var(--color-button-primary)] mb-11 rounded-full"></div>

        <div className="flex flex-col gap-6 justify-center pb-16 lg:pb-32 lg:flex-row lg:gap-48">
          <div className="flex flex-col gap-y-6 items-center gap-x-11 flex-1 border-2 border-[var(--color-button-primary)] border-dotted rounded-3xl p-8">
            <FaBuilding size={80} color="#1dc95d" />
            <p className="text-[var(--color-text-primary)] font-bold text-base">Sua Empresa Aqui</p>
          </div>
          <div className="flex flex-col gap-y-6 items-center gap-x-11 flex-1 border-2 border-[var(--color-button-primary)] border-dotted rounded-3xl p-8">
            <FaBuilding size={80} color="#1dc95d" />
            <p className="text-[var(--color-text-primary)] font-bold text-base">Sua Empresa Aqui</p>
          </div>
          <div className="flex flex-col gap-y-6 items-center flex-1 border-2 border-[var(--color-button-primary)] border-dotted rounded-3xl p-8">
            <FaBuilding size={80} color="#1dc95d" />
            <p className="text-[var(--color-text-primary)] font-bold text-base">Sua Empresa Aqui</p>
          </div>
        </div>

        <button className="bg-transparent font-bold border-2 border-[var(--color-button-primary)] text-[var(--color-button-primary)] rounded-2xl px-6 py-2 cursor-pointer md:px-36">Torne-se um Parceiro</button>
      </section>

      <footer className={`${openSans.className} flex flex-col justify-between bg-[var(--color-bg-secondary)] items-center md:flex-row`}>
        <div className="flex gap-6 py-12 items-center md:py-36 md:pl-12 lg:pl-24 lg:gap-20">
          <Image src={"/assets/logobg.png"} className="pl-10" height={200} width={200} alt="logo" />
          <ul className="text-[var(--color-text-primary)] text-sm flex flex-col gap-y-4 font-bold">
            <li><a href="#enterprise">Empresa</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#resources">Recursos</a></li>
            <li><a href="#help">Ajuda</a></li>
          </ul>
        </div>
        <div className="flex flex-col pb-6 gap-y-3 text-center md:pr-12 md:pb-0 lg:pr-24">
          <p className="text-[var(--color-text-primary)] text-sm font-bold">Siga Nossas Redes Sociais</p>
          <div className="w-full h-1 bg-[var(--color-button-primary)] rounded-full"></div>
          <div className="flex gap-6">
            <PiDiscordLogo size={50} color="white" className="cursor-pointer" />
            <a href="https://www.instagram.com/dfile_block?igsh=MXc4dzN2aDZoYjc5bg%3D%3D&utm_source=qr" target="_blank">
              <PiInstagramLogo size={50} color="white" />
            </a>
            <a href="https://x.com/dfile_block?s=11" target="_blank">
              <PiXLogo size={50} color="white" />
            </a>
            <a href="https://github.com/dFile-web3" target="_blank">
              <PiGithubLogo size={50} color="white" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
