import Image from "next/image";

export default function Logo() {
    return (
        <div>
            <Image src={'/logos.png'} alt="Genreate invoice" width={180} height={150} />
        </div>
    )
}