"use client";

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
import type * as React from "react";

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
      icon: Users,
      items: [
        {
          title: "Create",
          url: "/dashboard/accounts/create",
        },
        {
          title: "Manage",
          url: "/dashboard/accounts/manage",
        },
      ],
    },
    {
      title: "Unit Data",
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
      url: "/dashboard/about-us",
      icon: UserCircle,
    },
    {
      title: "Contact Us Page",
      url: "/dashboard/contact-us",
      icon: Phone,
    },
    {
      title: "Permissions",
      icon: ShieldCheck,
      items: [
        {
          title: "Manage",
          url: "/dashboard/permissions/manage",
        },
        {
          title: "Grant",
          url: "/dashboard/permissions/grant",
        },
      ],
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
        <h1 className="text-2xl font-bold text-primary">QA</h1>
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
