

//const onToggleMenu = () => {console.log("toggle");}
const Header = (props) => {
  return (
    <div>
      <div className="ui top inverted attached menu">
      <span className="item link grey" onClick={props.onToggleMenu}>Menu</span>
    </div>
    </div>
  );
}

export default Header
