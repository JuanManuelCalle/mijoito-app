import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function UserInfo () {


    return (
        <>
            <Avatar className="h-8 w-8 overflow-hidden rounded-full">
                <AvatarImage />
                <AvatarFallback className="rounded-lg bg-neutral-200 text-black dark:bg-neutral-700 dark:text-white">
                    'MAMA'
                </AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">SIN REGISTRO</span>
                <span className="text-muted-foreground truncate text-xs"></span>
            </div>
        </>
    );
}
