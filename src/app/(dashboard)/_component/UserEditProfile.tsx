import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface UserEditProfile {
    firstName: string | undefined;
    lastName: string | undefined;
    email: string | null | undefined;
    currency: string | undefined;
}
export default async function UserEditProfilePAge({ firstName, lastName, email, currency }: UserEditProfile) {
    return (
        <form>
            <div>
                <Label>First Name</Label>
                <Input placeholder="John" type="text" />
            </div>
        </form>
    )
}