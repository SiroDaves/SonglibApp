import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CustomNotFound() {
  return (
    <div className="flex items-center h-screen align-middle justify-center w-full my-auto">
      <div className="px-40 py-20  rounded-md">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-red text-9xl">404</h1>

          <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
            <span className="text-destructive">Oops!</span> Page not found
          </h6>

          <p className="mb-8 text-center text-gray-500 md:text-lg">
            The page you’re looking for doesn’t exist.
          </p>

          <Link href="/home">
            <Button>Go Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
