
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { auth, signOut } from "@/lib/auth";
import getavatarname from "@/lib/getAvatarname";
import { ChevronDown } from "lucide-react";
import UserProfilePage from "./UserProfile";

interface IUserProfileDropdown {
    isArrowUp: boolean,
    isFullName?: boolean
}

export default async function UserProfileDropDown({ isArrowUp, isFullName }: IUserProfileDropdown) {
    const session = await auth();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <div className="flex items-center gap-6 cursor-pointer">
                    <Avatar className="border size-9 bg-neutral-300 cursor-pointer">
                        <AvatarImage src={session?.user.image as string} />
                        <AvatarFallback>
                            {getavatarname(session?.user.firstName as string, session?.user.lastName as string)}
                        </AvatarFallback>
                    </Avatar>
                    {isFullName && <div>
                        <p className="text-ellipsis line-clamp-1 font-semibold">
                            <span>{session?.user.firstName}</span>
                            <span>{session?.user.lastName}</span>
                        </p>
                    </div>}
                    {isArrowUp && <ChevronDown className="transition-all ml-auto" />}
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full min-w-[250px]">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {/**user profile */}
                <UserProfilePage />
                <DropdownMenuItem
                    onClick={async () => {
                        "use server";
                        await signOut();
                    }}
                    className="bg-red-50 text-red-500 hover:bg-red-100 font-medium cursor-pointer"
                >
                    Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}