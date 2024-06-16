import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";


export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-medium text-sky-700">Hello harsh</h1>
      <Button>click me </Button>
      <Calendar></Calendar>
    </div>
  );
}
