import { useState } from 'react';
import { Menu } from 'semantic-ui-react';

import 'semantic-ui-css';

function Header() {
    
    const [activeItem, setActiveItem] = useState('');

    const handleItemClick = (e, { name }) => setActiveItem(name);

    return (
        <Menu>
            <Menu.Item
            name='editorials'
            active={activeItem === 'editorials'}
            onClick={handleItemClick}
            >
                Editorials
            </Menu.Item>

            <Menu.Item
            name='reviews'
            active={activeItem === 'reviews'}
            onClick={handleItemClick}
            >
                Reviews
            </Menu.Item>

            <Menu.Item
            name='upcomingEvents'
            active={activeItem === 'upcomingEvents'}
            onClick={handleItemClick}
            >
                Upcoming Events
            </Menu.Item>
        </Menu>
    );
}

export default Header;