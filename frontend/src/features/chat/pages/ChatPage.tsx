import { AppSidebar } from '../components/app-sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import ChatsSection from '../components/ChatsSection';
import { getToken } from '@clerk/react';

export default function Page() {
  const token = getToken(); //TODO: Remove after devlopment
  token.then((data) => console.log(data)).catch((err) => console.log(err));

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
