import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {itsonService} from "../../ItsonServiceModel.ts";

export default function NavHomeLg() {
    return(
        <>
            <>
                    {itsonService.map((item, index) => (
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger key={index}>{item.nameOption}</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        {item.serviceOption.map((item, index) => (
                                            <NavigationMenuLink key={index} href>
                                                <a href={item.url}>{item.name}</a>
                                            </NavigationMenuLink>
                                        ))}
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    ))
                    }
            </>
        </>
    )
}