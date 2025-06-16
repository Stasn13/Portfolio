import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/constants/projects";
import { SquareTerminal } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 p-4">
      <section className="flex flex-col h-[100vh] justify-between">
        <div>
          <h1 className="text-6xl font-black text-white">Frontend Developer</h1>
          <h2 className="text-white">Stanislav Gavrylenko</h2>
          <h3 className="text-white">
            Senior Frontend Engineer with 6+ years of experience building
            performant Web3 and DeFi applications. Focused on scalable
            architecture, UI/UX performance, and developer experience. Strong
            contributor to modular design and cross-functional teams.
          </h3>
        </div>
        <div className="flex gap-2 w-full">
          <Card className="flex-1 text-white border-none bg-background-card-1 border-xl rounded-4xl">
            <CardHeader>
              <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                <li>
                  <span className="font-bold">Core:</span>
                  React | Next.js | React native | RTK | Zustand | Typescript |
                  GraphQL | Websocket{" "}
                </li>
                <li>
                  <span className="font-bold">Web3:</span>
                  ethers.js | Wagmi | Solidity | solana/web3.js | TheGraph
                </li>
                <li>
                  <span className="font-bold">Styling:</span>
                  TailwindCSS | shadcn/ui | Radix UI | styled-components |
                  Material UI | Chakra-ui
                </li>
                <li>
                  <span className="font-bold">Testing:</span>
                  Jest | Storybook
                </li>
                <li>
                  <span className="font-bold">Tooling:</span>
                  NX monorepos | webpack | Git
                </li>
                <li>
                  <span className="font-bold">Soft Skills:</span> Technical
                  mentorship, system-level thinking, bias for shipping, strong
                  debugging intuition
                </li>
              </ul>
            </CardContent>
          </Card>
          <div className="flex flex-col flex-1 gap-2">
            <div className="flex gap-2">
              <Card className="flex-1 font-black border-none bg-background-card-2 rounded-4xl font-2xl">
                works
                <SquareTerminal />
              </Card>
              <Card className="flex-1 text-white border-none bg-background-card-3 rounded-4xl">
                About me
              </Card>
            </div>
            <Card className="border-none bg-background-card-4 flex-2 rounded-4xl">
              Contact me
            </Card>
          </div>
        </div>
      </section>
      <section>
        <Card>
          <h2>Works</h2>
        </Card>
        {projects.map((project) => (
          <div className="flex gap-2" key={project.name}>
            <Card className="bg-background-card-3">
              <CardTitle>{project.name}</CardTitle>
              <CardDescription>{project.desc}</CardDescription>
            </Card>
            <Card className="bg-background-card-1">
              <Image
                src={project.img}
                alt={project.name}
                width={300}
                height={200}
                className="object-cover w-full h-auto"
              />
            </Card>
          </div>
        ))}
      </section>
      <section>
        <h2>About Me</h2>
        <p>Firefighting mode</p>
        <p>Calm in chaos, chaos in calm.</p>
        <p>Vision with execution. Walk the walk.</p>
        <p>Build with care. Ship with confidence.</p>
      </section>
      <section>
        <Card className="border-none bg-background-card-4 flex-2 rounded-4xl">
          <h2>Contact Me</h2>
          <CardContent>
            <a href="https://www.linkedin.com/in/stanislav-gavrilenko/">
              linkedin
            </a>
            <a href="https://github.com/Stasn13">github</a>
            {/* todo: need to add quicklink */}
            <a href="https://t.me">telegram</a>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
