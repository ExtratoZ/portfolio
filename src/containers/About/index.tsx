import Title from '../../Components/Title';
import Paragraph from '../../Components/Paragraph';

const About = () => {
  return (
    <section>
      <Title fontSize={16}>Sobre</Title>
      <Paragraph tipo={'principal'}>
        🎓 Graduando em Análise e Desenvolvimento de Sistemas pela UNIASSELVI e
        estudante de Engenharia Front-End pela EBAC. Estou em transição de
        carreira, buscando minha primeira oportunidade como desenvolvedor web.
        Tenho experiência sólida com atendimento ao público e vendas, o que
        fortalece minha comunicação, empatia e trabalho em equipe. Estou
        comprometido em aplicar meus conhecimentos em HTML, CSS, JavaScript e
        frameworks modernos para construir soluções digitais de qualidade.
      </Paragraph>
    </section>
  );
};

export default About;
