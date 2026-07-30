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
  ArrowUpIcon,
  GlobeIcon,
  ImageIcon,
  PaperclipIcon,
  TelescopeIcon,
  Paperclip,
} from 'lucide-react';
import Messages from '../components/Massages';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '@/components/ui/input-group';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import {
  MessageScroller,
  MessageScrollerContent,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from '@/components/ui/message-scroller';
import { useClerk } from '@clerk/react';

export default function Page() {
  const { signOut } = useClerk();

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
        <div className='relative flex flex-col gap-4 '>
          <Card className='mx-auto h-screen w-full border rounded-none'>
            <CardHeader className='gap-1 border-b flex'>
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
                      <DropdownMenuItem
                        variant='destructive'
                        onClick={() => signOut({ redirectUrl: '/' })}
                      >
                        <LogOutIcon />
                        Log out
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </CardHeader>
            <MessageScrollerProvider>
              <CardContent className='flex-1 overflow-hidden'>
                <MessageScroller>
                  <MessageScrollerViewport>
                    <MessageScrollerContent className='p-(--card-spacing)'>
                      <Messages />
                    </MessageScrollerContent>
                  </MessageScrollerViewport>
                </MessageScroller>
              </CardContent>
            </MessageScrollerProvider>
            <CardFooter className='flex-col gap-2'>
              <form className='w-full'>
                <InputGroup className='flex h-10 w-full px-1 py-1'>
                  <InputGroupAddon align='block-end' className=''>
                    <DropdownMenu>
                      <DropdownMenuTrigger
                        render={
                          <InputGroupButton
                            aria-label='Add files'
                            type='button'
                            size='icon-sm'
                            variant='outline'
                          >
                            <Paperclip />
                          </InputGroupButton>
                        }
                      />
                      <DropdownMenuContent
                        align='start'
                        side='top'
                        className='w-44'
                      >
                        <DropdownMenuItem>
                          <PaperclipIcon />
                          Add Photos & Files
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <ImageIcon />
                          Create Image
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <TelescopeIcon />
                          Deep Research
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <GlobeIcon />
                          Web Search
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <InputGroupInput />
                    <InputGroupButton
                      type='submit'
                      variant='default'
                      size='icon-sm'
                      className='ml-auto'
                    >
                      <ArrowUpIcon />
                      <span className='sr-only'>Send</span>
                    </InputGroupButton>
                  </InputGroupAddon>
                </InputGroup>
              </form>
            </CardFooter>
          </Card>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
