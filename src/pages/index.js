import PrimeiroComponente from "@/components/primeiroComponente";
import ComponenteComProp from "@/components/ComponenteComProp";
import ComponenteComVariasProps from "@/components/ComponenteComVariasProps";
import ComponenteComCondicional from "@/components/ComponenteComCondicional";
import ComponenteComMap from "@/components/ComponenteComMap";
import ComponenteComEventos from "@/components/ComponenteComEventos";
import ComponenteComState from "@/components/ComponentecomState";
import ComponenteComUseEffect from "@/components/ComponenteComUseEffct";
import ComponenteComFormik from "@/components/ComponetneComFormularioFormik";

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-500 flex flex-col items-center justify-center">
      <h1 className="text-7xl font-bold text-white">Hello! 👋🏻</h1>

      <PrimeiroComponente />

      <ComponenteComProp nome="Eva Jackson" />

      <ComponenteComVariasProps titulo="Perfil do Utilizador" cor="blue" nome="Eva jackson" idade={67} />

      <ComponenteComCondicional />

      <ComponenteComMap />

      <ComponenteComEventos />
      
      <ComponenteComState />

      <ComponenteComUseEffect />

      <ComponenteComFormik />
    </div>
  )
}
