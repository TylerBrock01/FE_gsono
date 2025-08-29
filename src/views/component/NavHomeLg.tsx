import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import {itsonService} from "../../ItsonServiceModel.ts";

export default function NavHomeLg() {
    return(
        <>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        {itsonService.map((item, index) => (
                            <NavigationMenuTrigger key={index}>{item.nameOption}</NavigationMenuTrigger>
                            // <NavigationMenuContent>
                            //     <a>Link</NavigationMenuLink>
                            // </NavigationMenuContent>
                        ))
                        }

                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </>
    )
}