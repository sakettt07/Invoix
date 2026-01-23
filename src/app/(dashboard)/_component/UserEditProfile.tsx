interface UserEditProfile {
    firstName: string | undefined;
    lastName: string | undefined;
    email: string | null | undefined;
    currency: string | undefined;
}
export default async function UserEditProfilePAge({ firstName, lastName, email, currency }: UserEditProfile) {
    return (
        <div></div>
    )
}