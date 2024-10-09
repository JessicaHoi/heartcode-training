import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutMe() {
  return (
    <div>
        Hello world!
        <Card>
            <CardHeader>
                <CardTitle>
                    Hello I am Jessica
                </CardTitle>
                <img src="https://i.pinimg.com/originals/f2/f0/e0/f2f0e067ce9b8de1cdd98c9ee9605b55.png" className="w-48 h-auto rounded-lg mb-2" />
                <CardDescription>
                    I like to sleep lots
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-row gap-2">
                    <p className="font-bold">Name:</p>
                    Jessica
                </div>
                <div className="flex flex-row gap-2"><p className="font-bold">Major:</p>Information Systems</div>
                <div className="flex flex-row gap-2"><p className="font-bold">Hobbies:</p>I like to draw</div>
            </CardContent>
        </Card>
    </div>
  );
}