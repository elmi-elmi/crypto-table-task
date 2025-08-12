import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="items-center gap-16 p-3 pb-20 font-sans sm:p-20">
      <main className="flex flex-col items-center gap-[32px] sm:items-start">
        <div className="container mx-auto flex items-center justify-center gap-6 py-8 pb-96">
          <Link
            href={"/table"}
            className={"drop-shadow-lg hover:drop-shadow-xl"}
          >
            <Button variant={"outline"} className={"cursor-pointer"}>
              Approach 1
            </Button>
          </Link>

          <Link
            href={"/table2"}
            className={"drop-shadow-lg hover:drop-shadow-xl"}
          >
            <Button variant={"outline"} className={"cursor-pointer"}>
              Approach 2
            </Button>
          </Link>
        </div>
        {/*<DataTableDemo/>*/}
      </main>
    </div>
  );
}
