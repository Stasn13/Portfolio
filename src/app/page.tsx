import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="p-4">
      <section>
        <h1 className="text-white">Frontend Developer</h1>
        <h2 className="text-white">Stanislav Gavrylenko</h2>
        <Card className="bg-background-blue">skills</Card>
        <Card className="bg-white">works</Card>
        <Card>here we go</Card>
        <Card>here we go</Card>
      </section>
    </div>
  );
}
