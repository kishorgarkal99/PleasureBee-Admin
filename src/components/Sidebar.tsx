
type SideBarProp = {
    menuItems: [{
        title: string,
        icon: string
    }]
}

const Sidebar = ({ menuItems }: SideBarProp) => {
    return (
        <div>
            {
                menuItems?.map((menu) => (<div>
                    <img src={menu.icon}/>
                    <span>{menu.title}</span>
                </div>))
            }
        </div>
    )
}

export default Sidebar