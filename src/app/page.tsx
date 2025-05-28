import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="p-4">
      <section className="flex flex-col h-[100vh] justify-between">
        <div>
          <h1 className="text-white font-bold text-4xl">Frontend Developer</h1>
          <h2 className="text-white">Stanislav Gavrylenko</h2>
        </div>
        <div className="flex gap-2 w-full">
          <Card className="bg-background-card-1 border-none flex-1 border-xl rounded-4xl">
            <CardHeader>
              <CardTitle>skills</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                <li>html</li>
                <li>css</li>
                <li>js</li>
                <li>react</li>
                <li>next</li>
                <li>tailwind</li>
                <li>typescript</li>
                <li>git</li>
                <li>github</li>
                <li>figma</li>
                <li>adobe xd</li>
              </ul>
            </CardContent>
          </Card>
          <div className="flex flex-col gap-2 flex-1">
            <div className="flex gap-2">
              <Card className="bg-background-card-2 border-none flex-1 rounded-4xl">
                works(projects)
              </Card>
              <Card className="bg-background-card-3 border-none flex-1 text-white rounded-4xl">
                About me
              </Card>
            </div>
            <Card className="bg-background-card-4 border-none flex-2 rounded-4xl">
              Contact me
            </Card>
          </div>
        </div>
      </section>
      <section>
        <h2>About Me</h2>
      </section>
    </div>
  );
}
