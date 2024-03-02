import { ChildrenProps } from "@/app/new-types";
import TheNavigation from "@/components/ui/TheNavigation";

export default function MainLayout({ children }: ChildrenProps) {
  return (
    <>
      <TheNavigation />
      <div>{children}</div>
    </>
  );
}
