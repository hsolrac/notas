import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface NoteCardProps {
  title: string;
  content: string;
  date: string;
}

export default function Note({ title, content, date }: NoteCardProps) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{date}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-3">{content}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Edit</Button>
        <Button variant="outline" className="text-destructive-foreground">
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}
