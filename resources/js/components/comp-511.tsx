"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useId, useState } from "react";
import { DatePicker } from "./modules/Register/DatePicker";

export default function Component() {
  const id = useId();
  const [date, setDate] = useState<Date | undefined>();

  return (
    <div>
      <div className="*:not-first:mt-2">
        <Label htmlFor={id}>Date picker</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id={id}
              variant={"outline"}
              className={cn(
                "group bg-background hover:bg-background border-input w-full justify-between px-3 font-normal outline-offset-0 outline-none focus-visible:outline-[3px]",
                !date && "text-muted-foreground",
              )}
            >
              <span className={cn("truncate", !date && "text-muted-foreground")}>
                {date ? format(date, "PPP") : "Pick a date"}
              </span>
              <CalendarIcon
                size={16}
                className="text-muted-foreground/80 group-hover:text-foreground shrink-0 transition-colors"
                aria-hidden="true"
              />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-2" align="start">
            <DatePicker />
          </PopoverContent>
        </Popover>
      </div>
      <p className="text-muted-foreground mt-2 text-xs" role="region" aria-live="polite">
       <p>persoaklziaod asas</p>
      </p>
    </div>
  );
}
