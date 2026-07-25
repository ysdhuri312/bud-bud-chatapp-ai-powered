import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import { AppSidebar } from '../components/app-sidebar';
import { Separator } from '@/components/ui/separator';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import {
  Ban,
  CircleMinus,
  EllipsisVertical,
  LogOutIcon,
  Search,
  ThumbsDown,
  Trash2,
} from 'lucide-react';

export default function Page() {
  return (
    <SidebarProvider
      style={
        {
          '--sidebar-width': '350px',
        } as React.CSSProperties
      }
    >
      <AppSidebar />
      <SidebarInset>
        <header className='sticky top-0 flex shrink-0 items-center gap-2 border-b bg-background p-4'>
          <SidebarTrigger className='-ml-1' />
          <Separator
            orientation='vertical'
            className='mr-2 data-[orientation=vertical]:h-8'
          />
          <div className='w-full flex justify-between'>
            <div className='flex gap-3'>
              <Avatar>
                <AvatarImage
                  src='https://github.com/shadcn.png'
                  sizes='sm'
                  alt=''
                />
                <AvatarFallback>SM</AvatarFallback>
                <AvatarBadge className='bg-green-600 dark:bg-green-800' />
              </Avatar>
              <div className='grid flex-1 text-left text-sm leading-tight'>
                <span className='truncate font-medium'>shadcn</span>
                <span className='truncate text-xs'>
                  last seen today at 10:15
                </span>
              </div>
            </div>
            <div>
              <Button variant='ghost'>
                <Search />
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger
                  render={
                    <Button variant='ghost'>
                      <EllipsisVertical />
                    </Button>
                  }
                />
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <ThumbsDown />
                    Report
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Ban />
                    Block
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CircleMinus />
                    Clear chat
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Trash2 />
                    Delete chat
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem variant='destructive'>
                    <LogOutIcon />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>
        <div className='flex flex-1 flex-col gap-4 p-4'>
          {Array.from({ length: 24 }).map((_, index) => (
            <div
              key={index}
              className='aspect-video h-12 w-full rounded-lg bg-muted/50'
            />
          ))}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
