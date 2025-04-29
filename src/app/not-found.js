import { Button } from "@/components/ui/button";
import Link from "next/link";
const NotFound = () => {
  return (
    <div>
      <h1>This page cannot be found</h1>
      <Button>
        <Link href={"/"}>Go to Home</Link>
      </Button>
    </div>
  );
};

export default NotFound;
