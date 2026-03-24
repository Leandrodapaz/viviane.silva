import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Briefcase, GraduationCap, BookOpen } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#0b1f3a] text-white p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        
        <Card className="bg-[#112b50] rounded-2xl shadow-xl">
          <CardContent className="p-6">
            <h1 className="text-3xl font-bold">Viviane da Silva Canabarro Barbosa Paz</h1>
            <p className="text-sm mt-2">Técnica em Segurança do Trabalho | Estudante de Gestão de RH</p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-4">
          <Card className="bg-[#112b50] cursor-pointer hover:scale-105 transition">
            <CardContent className="p-4 flex items-center gap-3">
              <Phone />
              <div>
                <p>(82) 99992-9144</p>
                <p>(82) 99136-7989</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#112b50] cursor-pointer hover:scale-105 transition">
            <CardContent className="p-4 flex items-center gap-3">
              <Mail />
              <a href="mailto:Barbosa_dapaz@hotmail.com">Enviar Email</a>
            </CardContent>
          </Card>

          <Card className="bg-[#112b50] cursor-pointer hover:scale-105 transition">
            <CardContent className="p-4 flex items-center gap-3">
              <MapPin />
              <p>Benedito Bentes 1 - AL</p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-[#112b50]">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold flex items-center gap-2"><GraduationCap /> Formação</h2>
            <ul className="mt-3 list-disc list-inside">
              <li>Técnico em Segurança do Trabalho</li>
              <li>Gestão de RH (Cursando)</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-[#112b50]">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold flex items-center gap-2"><Briefcase /> Experiência</h2>
            <ul className="mt-3 space-y-2">
              <li>Auxiliar de Facilities - Monitoramento Patrimonial</li>
              <li>Livraria Leitura - Atendimento e estoque</li>
              <li>Papelaria Bemmequer - Atendimento e organização</li>
              <li>IBL - Atendimento telefônico</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-[#112b50]">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold flex items-center gap-2"><BookOpen /> Cursos</h2>
            <ul className="mt-3 list-disc list-inside">
              <li>Recepção</li>
              <li>Telemarketing</li>
              <li>Espanhol básico</li>
              <li>Auxiliar de Escritório</li>
              <li>Informática básica (Word, PowerPoint)</li>
            </ul>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
