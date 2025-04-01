import { PlantDetails } from "@/components/plants/PlantDetails";
import { PlantStatusHistory } from "@/components/plants/PlantStatusHistory";
import { PlantMaintenanceHistory } from "@/components/plants/PlantMaintenanceHistory";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

interface PlantPageProps {
  params: {
    id: string;
  };
}

export default function PlantPage({ params }: PlantPageProps) {
  const { id } = params;
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">苗木详情</h1>
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <Link href={`/plants/${id}/edit`}>编辑</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/plants">返回列表</Link>
          </Button>
        </div>
      </div>
      
      <Tabs defaultValue="details">
        <TabsList>
          <TabsTrigger value="details">基本信息</TabsTrigger>
          <TabsTrigger value="status">状态记录</TabsTrigger>
          <TabsTrigger value="maintenance">养护记录</TabsTrigger>
        </TabsList>
        <TabsContent value="details">
          <PlantDetails id={id} />
        </TabsContent>
        <TabsContent value="status">
          <PlantStatusHistory id={id} />
        </TabsContent>
        <TabsContent value="maintenance">
          <PlantMaintenanceHistory id={id} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
