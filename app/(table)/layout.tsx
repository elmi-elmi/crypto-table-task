import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const TableLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className={"container mx-auto"}>
      <div className={"flex justify-between"}>
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">
            Cryptocurrency Market
          </h1>
          <p className="text-muted-foreground">
            Track real-time cryptocurrency prices and market data
          </p>
        </div>
        <div>
          <Link className={"flex items-center"} href={"/"}>
            <Button variant={"ghost"} className={"cursor-pointer"}>
              Home <ArrowRight />
            </Button>
          </Link>
        </div>
      </div>
      {children}
    </div>
  );
};

export default TableLayout;
