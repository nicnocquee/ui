import { BlueSkyFlutter } from "@/components/ui/bluesky-flutter";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function BlueSkyFlutterExample() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>FlutterBy</CardTitle>
        <CardDescription>
          an animated icon for your Bluesky profile link.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="mx-auto items-center flex justify-center py-12">
          <BlueSkyFlutter
            className="text-blue-700 [&>a]:hover:underline"
            href="https://bsky.app/profile/nico.fyi"
            text="@nico.fyi"
          />
        </div>
        <p className="[&>a]:underline [&>a]:text-blue-700">
          This is a React component with Tailwind CSS based on the awesome{" "}
          <a href="https://flutterby.philhawksworth.dev">FlutterBy</a> by{" "}
          <a href="https://bsky.app/profile/philhawksworth.dev">
            Phil Hawksworth
          </a>
          . I saw it on{" "}
          <a href="https://bsky.app/profile/philhawksworth.dev/post/3labrybt5lb23">
            his post on Bluesky
          </a>{" "}
          🦋.
        </p>
      </CardContent>
    </Card>
  );
}
