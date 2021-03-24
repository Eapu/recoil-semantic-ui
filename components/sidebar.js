import myclass from 'classnames'

const Sidebar = (props) => {

  const classes = myclass(
    'ui', 'sidebar', 'overlay', 'left', 'inverted', 'menu', 'animating',
    {'visible' : props.toggleMenu}
  );

 //add class based on toogle property

    return (
      //<div className= "ui sidebar overlay left inverted menu visible">
      <div className={classes}>
    <ul>
      <li className="item link">Item 1</li>
      <li className="item link">Item 2</li>
      <li className="item link">Item 3</li>
      <li className="item link">Item 4</li>
    </ul>
    </div>
    )
}
export default Sidebar;