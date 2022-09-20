import NavItem from "./NavItem"

import styles from './Navigation.module.css'

function Navigation(){
    const array = [
        {name: 'HOME', href: '/HOME', icon: './resurce/grid.svg'},
        {name: 'CHAT', href: '/CHAT', icon: './resurce/message-circle.svg'},
        {name: 'CONTACT', href: '/CONTACT', icon: './resurce/person.svg'},
        {name: 'NOTIFICATION', href: '/NOTIFICATION', icon: './resurce/bell.svg'},
        {name: 'CALENDAR', href: '/CALENDAR', icon: './resurce/calendar.svg'},
        {name: 'SETTINGS', href: '/SETTINGS', icon: './resurce/settings-2.svg'}
    ]

    return(
        <nav className={styles.navigation}>
            <ul>
                {array.map(({name, href, icon})=>(
                    <li key={href}>
                        <NavItem name={name} href={href} icon={icon}/>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navigation