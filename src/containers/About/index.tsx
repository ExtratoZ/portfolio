import Title from '../../Components/Title';
import Paragraph from '../../Components/Paragraph';
import { GitSection } from './styles';

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
      <GitSection>
        <img
          src="https://github-readme-stats.vercel.app/api?username=ExtratoZ&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"
          alt=""
        />
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=ExtratoZ&layout=compact&langs_count=7&theme=dracula"
          alt=""
        />
      </GitSection>
    </section>
  );
};

export default About;
