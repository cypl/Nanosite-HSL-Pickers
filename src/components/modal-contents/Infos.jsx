import styled from 'styled-components'

function Infos() {
  return (
    <WrapperInfos>
      <p>
        Choisissez les couleurs de votre Nanosite Pro-efficace, <br />
        en vérifiant leurs contrastes pour l'accessibilité.
      </p>
      <p>
        Puis, exportez les valeurs de couleur pour les intégrer dans le fichier
        variables.scss.
      </p>
    </WrapperInfos>
  )
}

export default Infos

const WrapperInfos = styled.div`
  padding: 40px;
  & p {
    color: rgba(255, 255, 255, 0.6);
    padding-bottom: 20px;
  }
  & p:last-child {
    padding-bottom: 0;
  }
`
