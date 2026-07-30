import { CreditCardIcon } from 'lucide-react';
import { SidebarMenu, SidebarMenuItem } from '@/components/ui/sidebar';
import { UserButton } from '@clerk/react';

export function NavUser() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <UserButton>
          <UserButton.MenuItems>
            <UserButton.Action
              label='Billing'
              labelIcon={<CreditCardIcon size='sm' />}
              onClick={() => alert('init chat')}
            />
          </UserButton.MenuItems>
        </UserButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
