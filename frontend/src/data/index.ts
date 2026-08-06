import { ArchiveX, Users, Inbox, UserPlus, Trash2 } from 'lucide-react';

// This is sample data
export const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: 'https://avatar.vercel.sh/vercel.svg?text=YD',
  },
  navMain: [
    {
      title: 'Chats',
      url: '#',
      icon: Inbox,
      isActive: true,
    },
    {
      title: 'Add friend',
      url: '#',
      icon: UserPlus,
      isActive: false,
    },
    {
      title: 'Groups',
      url: '#',
      icon: Users,
      isActive: false,
    },
    {
      title: 'Archives',
      url: '#',
      icon: ArchiveX,
      isActive: false,
    },
    {
      title: 'Trash',
      url: '#',
      icon: Trash2,
      isActive: false,
    },
  ],
  chats: [
    {
      name: 'Durvesh Dhuri',
      email: 'yinew97319@copawoke.com',
      avatar: 'https://avatar.vercel.sh/vercel.svg?text=DD',
      subject: 'Meeting Tomorrow',
      date: '09:34 AM',
      teaser: 'Hi Yogesh, Good Morning...',
    },
    // {
    //   name: 'Alice Smith',
    //   email: 'alicesmith@example.com',
    //   avatar: 'https://avatar.vercel.sh/vercel.svg?text=YD',
    //   subject: 'Re: Project Update',
    //   date: 'Yesterday',
    //   teaser: 'Thanks for the update. The progress looks great so far.',
    // },
    // {
    //   name: 'Bob Johnson',
    //   email: 'bobjohnson@example.com',
    //   avatar: 'https://avatar.vercel.sh/vercel.svg?text=YD',
    //   subject: 'Weekend Plans',
    //   date: '2 days ago',
    //   teaser:
    //     "Hey everyone! I'm thinking of organizing a team outing this weekend.",
    // },
    // {
    //   name: 'Emily Davis',
    //   email: 'emilydavis@example.com',
    //   avatar: 'https://avatar.vercel.sh/vercel.svg?text=YD',
    //   subject: 'Re: Question about Budget',
    //   date: '2 days ago',
    //   teaser: "I've reviewed the budget numbers you sent over.",
    // },
    // {
    //   name: 'Michael Wilson',
    //   email: 'michaelwilson@example.com',
    //   avatar: 'https://avatar.vercel.sh/vercel.svg?text=YD',
    //   subject: 'Important Announcement',
    //   date: '1 week ago',
    //   teaser: 'Please join us for an all-hands meeting this Friday at 3 PM.',
    // },
    // {
    //   name: 'Sarah Brown',
    //   email: 'sarahbrown@example.com',
    //   avatar: 'https://avatar.vercel.sh/vercel.svg?text=YD',
    //   subject: 'Re: Feedback on Proposal',
    //   date: '1 week ago',
    //   teaser:
    //     "Thank you for sending over the proposal. I've reviewed it and have some thoughts.",
    // },
    // {
    //   name: 'David Lee',
    //   email: 'davidlee@example.com',
    //   avatar: 'https://avatar.vercel.sh/vercel.svg?text=YD',
    //   subject: 'New Project Idea',
    //   date: '1 week ago',
    //   teaser:
    //     "I've been brainstorming and came up with an interesting project concept.",
    // },
    // {
    //   name: 'Olivia Wilson',
    //   email: 'oliviawilson@example.com',
    //   avatar: 'https://avatar.vercel.sh/vercel.svg?text=YD',
    //   subject: 'Vacation Plans',
    //   date: '1 week ago',
    //   teaser:
    //     "Just a heads up that I'll be taking a two-week vacation next month.",
    // },
    // {
    //   name: 'James Martin',
    //   email: 'jamesmartin@example.com',
    //   avatar: 'https://avatar.vercel.sh/vercel.svg?text=YD',
    //   subject: 'Re: Conference Registration',
    //   date: '1 week ago',
    //   teaser:
    //     "I've completed the registration for the upcoming tech conference.",
    // },
    // {
    //   name: 'Sophia White',
    //   email: 'sophiawhite@example.com',
    //   avatar: 'https://avatar.vercel.sh/vercel.svg?text=YD',
    //   subject: 'Team Dinner',
    //   date: '1 week ago',
    //   teaser:
    //     "To celebrate our recent project success, I'd like to organize a team dinner.",
    // },
  ],
};
