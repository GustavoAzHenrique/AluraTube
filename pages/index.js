import config from "../aluraTube-config.json";
import styled from "styled-components";

function HomePage() {
  const estiloHomePage = { backgroundColor: "red" };
  //   const mensagem = "Testando identação";
  console.log(config.playLists);

  return (
    <div style={estiloHomePage}>
      {/* {mensagem} */}
      <span>
        <Menu />
        <Header />
        <TimeLine playlists={config.playLists} />
      </span>
    </div>
  );
}

export default HomePage;

function Menu() {
  return <div>Menu</div>;
}

const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px;
    gap: 16px;
  }
`;
function Header() {
  return (
    <StyledHeader>
      {/* <img src="banner" /> */}

      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>

          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

function TimeLine(props) {
  console.log("Dentro do componente", props);
  return <div>TimeLine</div>;
}
