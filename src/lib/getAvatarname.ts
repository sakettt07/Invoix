export default function getavatarname(firstName: string, lastName: string | null) {
    if (!firstName) {
        return null;
    }
    return lastName ? (firstName[0].toUpperCase() + lastName[0].toUpperCase()) : firstName[0].toUpperCase()
}