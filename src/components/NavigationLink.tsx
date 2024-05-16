import * as React from 'react';

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "./ui/navigation-menu";



interface Props {
    data: {
        name: string;
        href: string;
    }[];
}

export function Navigation({ data }: Props) {
    const [pathname, setPathname] = React.useState('');

    React.useEffect(() => {
        // Update pathname once the component mounts
        setPathname(window.location.pathname);
    }, []); // Empty dependency array ensures this effect runs only once



    return (
        <NavigationMenu >
            <NavigationMenuList>
                {data.map((item, index) => (
                    <NavigationMenuItem key={index}>
                        <a href={item.href}>
                            <NavigationMenuLink active={pathname === item.href} className={navigationMenuTriggerStyle()}>
                                {item.name}
                            </NavigationMenuLink>
                        </a>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
}