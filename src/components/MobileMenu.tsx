import * as React from 'react';
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navItems } from './Navbar.astro';
import '@/styles/globals.css'

// import { navItems } from './';

export function MobileMenu() {
    const [pathname, setPathname] = React.useState('');
    const [open, setOpen] = React.useState(false)

    React.useEffect(() => {
        // Update pathname once the component mounts
        setPathname(window.location.pathname);
    }, []); // Empty dependency array ensures this effect runs only once

    React.useEffect(() => {
        setOpen(false)
    }, [pathname]);

    return (
        <Sheet open={open} onOpenChange={(state: boolean | ((prevState: boolean) => boolean)) => setOpen(state)}>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                    <Menu className='h-4 w-4' />
                </Button>
            </SheetTrigger>
            <SheetContent>
                <div className='mt-5 flex px-2 space-y-1 flex-col'>
                    {navItems.map((item, index) => (
                        <a href={item.href} key={index} className={cn(pathname === item.href ? 'bg-muted' : 'hover:bg-muted hover:bg-opacity-75', "group flex items-center px-2 py-2 text-sm font-medium rounded-md")}>
                            {item.name}
                        </a>
                    ))}
                </div>
                <SheetFooter className='mt-5'>
                    <SheetClose asChild>
                        <Button type='submit'>Close</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}