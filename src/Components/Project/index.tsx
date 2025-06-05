import Paragraph from '../Paragraph';
import Title from '../Title';

import { Card, LinkButton } from './styles';

const Project = () => {
  return (
    <Card>
      <Title>Projeto Lista de Tarefas</Title>
      <Paragraph tipo="secundario">Lista de tarefas feita em Vue.JS.</Paragraph>
      <LinkButton>Visualizar</LinkButton>
    </Card>
  );
};

export default Project;
