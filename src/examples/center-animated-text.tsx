import CenteredAnimatedText from "@/components/custom/center-animated-text";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CenterAnimatedTextExample() {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Center Animated Text</CardTitle>
        <CardDescription>
          animates text by flying in the letters from right and left sides to
          the center
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="mx-auto items-center flex justify-center py-12">
          <CenteredAnimatedText text="Nico Prananta is @nico.fyi on Bluesky" />
        </div>
        <div className="[&_a]:text-blue-700">
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
