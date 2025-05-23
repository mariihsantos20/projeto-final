import Section from "../components/Section";

const HomePage = () => {
  return (
    <div>
      <Section
        title="Novidades"
        link={{ text: 'Ver tudo', href: '/novidades' }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Renderizar cards de produtos aqui */}
        </div>
      </Section>

      <Section title="Categorias populares" titleAlign="center">
        <div className="flex justify-center gap-6 flex-wrap">
          {/* Renderizar ícones ou imagens aqui */}
        </div>
      </Section>
    </div>
  );
};

export default HomePage;