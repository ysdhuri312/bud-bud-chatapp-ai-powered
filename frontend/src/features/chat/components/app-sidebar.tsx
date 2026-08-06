import * as React from 'react';
import { Command, MessageCirclePlus, EllipsisVertical } from 'lucide-react';

import { NavUser } from './nav-user';
import { Label } from '@/components/ui/label';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { data } from '@/data';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  // Note: I'm using state to show active item.
  // IRL you should use the url/router.
  const [activeItem, setActiveItem] = React.useState(data.navMain[0]);
  const [chats, setChats] = React.useState(data.chats);
  const { setOpen } = useSidebar();

  return (
    <Sidebar
      collapsible='icon'
      className='overflow-hidden *:data-[sidebar=sidebar]:flex-row'
      {...props}
    >
      {/* This is the first sidebar */}
      {/* We disable collapsible and adjust width to icon. */}
      {/* This will make the sidebar appear as icons. */}
      <Sidebar
        collapsible='none'
        className='w-[calc(var(--sidebar-width-icon)+1px)]! border-r'
      >
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                size='lg'
                render={
                  <a href='#'>
                    <div className='flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground'>
                      <Command className='size-4' />
                    </div>
                    <div className='grid flex-1 text-left text-sm leading-tight'>
                      <span className='truncate font-medium'>Acme Inc</span>
                      <span className='truncate text-xs'>Enterprise</span>
                    </div>
                  </a>
                }
                className='md:h-8 md:p-0'
              ></SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent className='px-1.5 md:px-0'>
              <SidebarMenu>
                {data.navMain.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      tooltip={{
                        children: item.title,
                        hidden: false,
                      }}
                      onClick={() => {
                        setActiveItem(item);
                        const mail = data.chats.sort(() => Math.random() - 0.5);
                        setChats(
                          mail.slice(
                            0,
                            Math.max(5, Math.floor(Math.random() * 10) + 1),
                          ),
                        );
                        setOpen(true);
                      }}
                      isActive={activeItem?.title === item.title}
                      className='px-2.5 md:px-2'
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <NavUser />
        </SidebarFooter>
      </Sidebar>

      {/* This is the second sidebar */}
      {/* We disable collapsible and let it fill remaining space */}
      <Sidebar collapsible='none' className='hidden flex-1 md:flex'>
        <SidebarHeader className='gap-3.5 border-b p-4'>
          <div className='flex w-full items-center justify-between'>
            <div className='text-base font-medium text-foreground'>
              {activeItem?.title}
            </div>
            <Label className='flex items-center gap-2 text-sm'>
              <Button variant='ghost'>
                <MessageCirclePlus />
              </Button>
              <Button variant='ghost'>
                <EllipsisVertical />
              </Button>
            </Label>
          </div>
          <SidebarInput placeholder='Type to search...' />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup className='px-0'>
            <SidebarGroupContent>
              {chats.map((chat) => (
                <div
                  key={chat.email}
                  className='flex items-center hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                >
                  <Avatar className='h-10 w-10 rounded-lg ml-2'>
                    <AvatarImage src={chat.avatar} alt={chat.name} />
                    <AvatarFallback className='rounded-lg'>YD</AvatarFallback>
                  </Avatar>{' '}
                  <a
                    href='#'
                    key={chat.email}
                    className='flex flex-col items-start gap-1 border-b p-3 text-sm leading-tight whitespace-nowrap last:border-b-0'
                  >
                    <div className='flex w-full items-center gap-2'>
                      <span>{chat.name}</span>{' '}
                      <span className='ml-auto text-xs'>{chat.date}</span>
                    </div>
                    <span className='line-clamp-2 w-58 text-xs whitespace-break-spaces'>
                      {chat.teaser}
                    </span>
                  </a>
                </div>
              ))}
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </Sidebar>
  );
}
