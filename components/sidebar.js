import Link from 'next/link'
import myclass from 'classnames'

const Sidebar = (props) => {

  const classes = myclass(
    'ui', 'sidebar', 'overlay', 'left', 'inverted', 'menu', 'animating',
    {'visible' : props.toggleMenu}
  );
    // 'visible' based on toogle property
    return (
      //<div className= "ui sidebar overlay left inverted menu visible">
      <div className={classes}>
    <ul>
      <li className="item link">
        <Link href="/services">
            <a className="nav-link">services</a>
        </Link>
      </li>
      <li className="item link">Item 2</li>
      <li className="item link">Item 3</li>
      <li className="item link">Item 4</li>
    </ul>
    </div>
    )
}
export default Sidebar;