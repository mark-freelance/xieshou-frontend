import { MenuItem } from './Menu'
import RegisterDialog from './RegisterDialog'
import RegisteredDropdown from './RegisteredDropdown'
import { useSelector } from 'react-redux'
import { selectUser } from '../../supports/store/userSlice'
import { menus } from '../../supports/config/menus'

export const SVG_PATH_ARROW_RIGHT = 'M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z'
export const SVG_PATH_ARROW_DOWN = 'M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z'


export const NavBar = () => {
  const userSelector = useSelector(selectUser)

  return (
    <div className="navbar bg-base-100 border-b-2">

      <div className="navbar-start">

        {/* 小屏菜单 + logo >> dropdown 就是一行，里面可以包含其他东西 */}
        <div className="dropdown">
          {/* 小屏下的菜单logo >> */}
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"/>
            </svg>
          </label>
          {/* 小屏下的菜单logo << */}

          <ul tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {
              menus.map((menuItem) => <MenuItem item={menuItem}
                                                icon={SVG_PATH_ARROW_RIGHT}
                                                key={menuItem.name}/>)
            }
          </ul>
        </div>
        {/* 小屏菜单 << */}

        {/* logo 应该始终位于左边，所以可以和小屏菜单封装在同一个组件里 */}
        <a href={'/'} className="btn btn-ghost normal-case text-xl">携手未来</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {
            menus.map((menuItem) => <MenuItem item={menuItem}
                                              icon={SVG_PATH_ARROW_DOWN}
                                              key={menuItem.name}/>)
          }
        </ul>
      </div>


      {/* 尾部 */}
      <div className="navbar-end">

        <div className="inline-flex items-center flex-none gap-2 mr-4">
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered"/>
          </div>
          {
            userSelector.authState ? <RegisteredDropdown/> : <RegisterDialog/>
          }

        </div>
      </div>
    </div>
  )
}

export default NavBar
