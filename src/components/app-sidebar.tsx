"use client";

import * as React from "react";
import {
  Bell,
  ChartColumnBig,
  Clock,
  Files,
  GraduationCap,
  Home,
  ListChecks,
  Notebook,
  Phone,
  ShieldCheck,
  UserCircle,
  Users,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "Admin",
    avatar: "",
    email: "admin@isfqau.edu.eg",
  },
  navMain: [
    {
      title: "Home",
      url: "#",
      icon: Home,
    },
    {
      title: "Accounts",
      url: "#",
      icon: Users,
      items: [
        {
          title: "Create",
          url: "#",
        },
        {
          title: "Manage",
          url: "#",
        },
      ],
    },
    {
      title: "Unit Data",
      url: "#",
      icon: Notebook,
      items: [
        {
          title: "Add",
          url: "#",
        },
        {
          title: "Edit",
          url: "#",
        },
        {
          title: "Delete",
          url: "#",
        },
      ],
    },
    {
      title: "Collage Data",
      url: "#",
      icon: GraduationCap,
    },
    {
      title: "Survey",
      url: "#",
      icon: ChartColumnBig,
      items: [
        {
          title: "Add",
          url: "#",
        },
        {
          title: "Edit",
          url: "#",
        },
        {
          title: "Delete",
          url: "#",
        },
      ],
    },
    {
      title: "About Us Page",
      url: "#",
      icon: UserCircle,
    },
    {
      title: "Contact Us Page",
      url: "#",
      icon: Phone,
    },
    {
      title: "Permissions",
      url: "#",
      icon: ShieldCheck,
    },
    {
      title: "Tasks",
      url: "#",
      icon: ListChecks,
    },
    {
      title: "Compliant Suggestions",
      url: "#",
      icon: Bell,
    },
    {
      title: "Files",
      url: "#",
      icon: Files,
    },
    {
      title: "Memories",
      url: "#",
      icon: Clock,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <h1 className="text-2xl font-bold text-foreground">QA</h1>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
