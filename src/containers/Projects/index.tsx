import Project from '../../Components/Project';
import Title from '../../Components/Title';

import { List } from './styles';

const Projects = () => {
  return (
    <section>
      <Title fontSize={16}>Projetos</Title>
      <List>
        <li>
          <Project />
        </li>
        <li>
          <Project />
        </li>
        <li>
          <Project />
        </li>
        <li>
          <Project />
        </li>
        <li>
          <Project />
        </li>
        <li>
          <Project />
        </li>
        <li>
          <Project />
        </li>
        <li>
          <Project />
        </li>
      </List>
    </section>
  );
};

export default Projects;
