import { AppSidebar } from '../components/app-sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import ChatsSection from '../components/ChatsSection';
import { useUser } from '@clerk/react';

export default function Page() {
  const { user } = useUser();
  console.log(user);

  return (
    <SidebarProvider
      style={
        {
          '--sidebar-width': '350px',
        } as React.CSSProperties
      }
    >
      <AppSidebar />
      <ChatsSection />
    </SidebarProvider>
  );
}
