import Picture from "./Picture";
import Title from "./Title";

const Header = (props) => {
  return (
    <header className="header">
      <Picture pic={props.pic} />
      <Title name={props.name} />
    </header>
  );
};

export default Header;
