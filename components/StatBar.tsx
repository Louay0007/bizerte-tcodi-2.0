import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Trophy, Clock, Building2 } from "lucide-react";

const stats = [
  {
    title: "Participants",
    value: "+150",
    note: "Engineering students expected",
    icon: Users,
  },
  {
    title: "Teams Competing",
    value: "+30",
    note: "3-5 members per team",
    icon: Trophy,
  },
  {
    title: "Hours of Hacking",
    value: "24h",
    note: "Non-stop problem solving",
    icon: Clock,
  },
  {
    title: "IEEE Branches",
    value: "4",
    note: "ISET Bizerte · ENIB · ISSATM · FSB",
    icon: Building2,
  },
];

export default function StatBar() {
  return (
    <section className="bg-dark py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-2">
          In Numbers
        </h2>
        <p className="text-neutral-400 text-center mb-8">
          What to expect from Bizerte Tcodi 2.0
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-neutral-400">
                    {stat.title}
                  </CardTitle>
                  <Icon className="h-4 w-4 text-neutral-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="pt-1 text-xs text-neutral-500">
                    {stat.note}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
