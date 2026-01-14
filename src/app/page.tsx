import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  const isRed = true
  return (
    <div className="font-bold text-purple-400 text-3xl">
      Generate your invoice
      <Button>Click me</Button>
    </div>
  );
}
