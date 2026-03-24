import { Mail, Phone, MapPin, Briefcase, GraduationCap, BookOpen } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b1f3a] text-white p-6">
      <div className="max-w-4xl mx-auto space-y-8">

        {/* HEADER */}
        <div className="bg-[#112b50] p-6 rounded-2xl shadow-xl text-center">
          <img 
            src="https://via.placeholder.com/120"
            className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-white"
          />
          <h1 className="text-3xl font-bold">Viviane da Silva Canabarro Barbosa Paz</h1>
          <p className="text-sm mt-2 opacity-80">
            Técnica em Segurança do Trabalho | Gestão de RH
          </p>
        </div>

        {/* CONTATO */}
        <div className="grid md:grid-cols-4 gap-4">

          <a href="https://wa.me/5582999929144" target="_blank"
            className="bg-green-600 p-4 rounded-xl flex items-center justify-center gap-2 hover:scale-105 transition">
            📱 WhatsApp
          </a>

          <a href="tel:+5582999929144"
            className="bg-[#112b50] p-4 rounded-xl flex items-center gap-2 hover:scale-105 transition">
            <Phone /> Ligar
          </a>

          <a href="mailto:Barbosa_dapaz@hotmail.com"
            className="bg-[#112b50] p-4 rounded-xl flex items-center gap-2 hover:scale-105 transition">
            <Mail /> Email
          </a>

          <a href="https://www.google.com/maps/search/?api=1&query=Benedito+Bentes+1+Alagoas"
            target="_blank"
            className="bg-[#112b50] p-4 rounded-xl flex items-center gap-2 hover:scale-105 transition">
            <MapPin /> Localização
          </a>

        </div>

        {/* SOBRE */}
        <div className="bg-[#112b50] p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Sobre mim</h2>
          <p className="opacity-80">
            Profissional com experiência em atendimento, organização e suporte administrativo.
            Busco oportunidade para crescer na área de Recursos Humanos e contribuir com a empresa.
          </p>
        </div>

        {/* FORMAÇÃO */}
        <div className="bg-[#112b50] p-6 rounded-xl">
          <h2 className="flex gap-2 mb-2"><GraduationCap /> Formação</h2>
          <ul className="list-disc ml-5">
            <li>Técnico em Segurança do Trabalho</li>
            <li>Gestão de RH (cursando)</li>
          </ul>
        </div>

        {/* EXPERIÊNCIA */}
        <div className="bg-[#112b50] p-6 rounded-xl">
          <h2 className="flex gap-2 mb-2"><Briefcase /> Experiência</h2>
          <ul className="space-y-1">
            <li>Auxiliar de Facilities (Monitoramento Patrimonial)</li>
            <li>Livraria Leitura</li>
            <li>Papelaria Bemmequer</li>
            <li>IBL</li>
          </ul>
        </div>

        {/* CURSOS */}
        <div className="bg-[#112b50] p-6 rounded-xl">
          <h2 className="flex gap-2 mb-2"><BookOpen /> Cursos</h2>
          <ul className="list-disc ml-5">
            <li>Recepção</li>
            <li>Telemarketing</li>
            <li>Espanhol básico</li>
            <li>Auxiliar de Escritório</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
