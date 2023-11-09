import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function ResultTabs() {
  return (
    <Tabs defaultValue="overview" className="w-full md:w-[600px] mx-auto px-5 md:p-0">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="recommendation">Recommendation</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <Card>
          <CardHeader>
            <CardTitle>Frontend Result</CardTitle>
            <CardDescription>
              Dated: {new Date().toLocaleString() + ''}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="score" className="text-lg">Overall Score: 7.8</Label>
            </div>
            <div className="space-y-1">
              <Label htmlFor="compatibility" className="text-lg">Compatibility: 90%</Label>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="recommendation">
        <Card>
          <CardHeader>
            <CardTitle>Your Recomended Career Path is</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
              <div className="space-y-1">
              <Label htmlFor="1" className="text-lg">Frontend: 90% Compatibility</Label>
            </div>
            <div className="space-y-1">
              <Label htmlFor="2" className="text-lg">Backend: 30% Compatibility</Label>
            </div>
            </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
