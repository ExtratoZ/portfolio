import Title from '../../Components/Title';
import Avatar from '../../Components/Avatar';
import { P } from '../../Components/Paragraph/styles';

import { Button, Desc, SideBarContainer } from './styles';

const SideBar = () => {
  return (
    <aside>
      <SideBarContainer>
        <Avatar />
        <Title fontSize={20}>Caetano Messina</Title>
        <P tipo="secundario" fontSize={16}>
          ExtratoZ
        </P>
        <Desc tipo="principal" fontSize={12}>
          Desenvolvedor Front-end
        </Desc>
        <Button>Trocar tema</Button>
      </SideBarContainer>
    </aside>
  );
};

export default SideBar;
