

import Link from "next/link";
import {Button} from "@/components/ui/button";

export default function Home() {
  return (
    <div className="font-sans   items-center  p-3 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px]  items-center sm:items-start ">
        <div className="container mx-auto py-8 items-center  flex gap-6 justify-center pb-96">

            <Link href={'/table'} className={'drop-shadow-lg hover:drop-shadow-xl'}>
                <Button variant={'outline'} className={'cursor-pointer'}>Approach 1</Button>
            </Link>

            <Link href={'/table2'} className={'drop-shadow-lg hover:drop-shadow-xl'}>
                <Button variant={'outline'} className={'cursor-pointer'}>Approach 2</Button>
            </Link>

        </div>
        {/*<DataTableDemo/>*/}

      </main>

    </div>
  );
}
