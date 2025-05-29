import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="p-4">
      <section className="flex flex-col h-[100vh] justify-between">
        <div>
          <h1 className="text-4xl font-bold text-white">Frontend Developer</h1>
          <h2 className="text-white">Stanislav Gavrylenko</h2>
          <h3 className="text-white">
            Senior Frontend Engineer with 6+ years of experience building
            performant Web3 and DeFi applications. Focused on scalable
            architecture, UI/UX performance, and developer experience. Strong
            contributor to modular design and cross-functional teams.
          </h3>
        </div>
        <div className="flex gap-2 w-full">
          <Card className="flex-1 border-none bg-background-card-1 border-xl rounded-4xl">
            <CardHeader>
              <CardTitle>skills</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                <li>
                  Core: React | Next.js | React native | RTK | Zustand |
                  Typescript | GraphQL | Websocket{" "}
                </li>
                <li>
                  Web3: ethers.js | Wagmi | Solidity | solana/web3.js | TheGraph
                </li>
                <li>
                  Styling: TailwindCSS | shadcn/ui | Radix UI |
                  styled-components | Material UI | Chakra-ui
                </li>
                <li>Testing: Jest | Storybook</li>
                <li>Tooling: NX monorepos | webpack | Git</li>
                <li>
                  Soft Skills: Technical mentorship, system-level thinking, bias
                  for shipping, strong debugging intuition
                </li>
              </ul>
            </CardContent>
          </Card>
          <div className="flex flex-col flex-1 gap-2">
            <div className="flex gap-2">
              <Card className="flex-1 border-none bg-background-card-2 rounded-4xl">
                works(projects)
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
        <h2>About Me</h2>
      </section>
      <section>
        <h2>Works</h2>
      </section>
      <section>
        <Card className="border-none bg-background-card-4 flex-2 rounded-4xl">
          <h2>Contact Me</h2>
        </Card>
      </section>
    </div>
  );
}
