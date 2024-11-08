import { BlueSkyFlutter } from "@/components/custom/bluesky-flutter";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function BlueSkyFlutterExample() {
  return (
    <Card className="w-full max-w-4xl mx-auto">
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
        <div className="[&_a]:text-blue-700">
          <p className="[&>a]:underline">
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
          <p>
            The code is here:{" "}
            <a href="https://github.com/nicnocquee/ui">
              https://github.com/nicnocquee/ui.
            </a>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
