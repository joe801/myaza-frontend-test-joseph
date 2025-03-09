import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { items, items2 } from "./sidebar-data";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import clsx from "clsx";
import { Separator } from "@/components/ui/separator";

export const AppSidebar = () => {
  const router = useRouter();
  return (
    <Sidebar className="bg-primary px-7 py-10">
      <SidebarHeader>
        <Link href="/">
          <Image src="/logo2.svg" alt="logo" width={107} height={31} />
        </Link>
      </SidebarHeader>
      <SidebarContent className=" scrollbar-thin">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-4 mt-7">
              {items.map((item) => {
                const isActive = router.pathname === item?.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      isActive={true}
                      className={clsx(
                        "p-4 rounded-lg h-10 text-white",
                        isActive && "bg-secondary !text-primary",
                      )}
                      asChild
                    >
                      <a
                        href={item.url}
                        className="gap-[1.125rem] flex items-center"
                      >
                        <Image
                          src={item?.icon}
                          alt="nav icon"
                          width={20}
                          height={20}
                        />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <Separator className="bg-[#4B4B99]" />
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-4">
              {items2.map((item) => {
                const isActive = router.pathname === item?.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      isActive={true}
                      className={clsx(
                        "p-4 rounded-lg h-10 text-white",
                        isActive && "bg-secondary !text-primary",
                      )}
                      asChild
                    >
                      <a
                        href={item.url}
                        className="gap-[1.125rem] flex items-center"
                      >
                        <Image
                          src={item?.icon}
                          alt="nav icon"
                          width={20}
                          height={20}
                        />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <button className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/dashboard/icons/person.svg" alt="user" width={50} height={50} />
            <div className="text-start font-karla text-white">
              <p className="text-base/[100%] font-bold">Ali Riaz</p>
              <p className="text-sm/[100%]">Web Developer</p>
            </div>
          </div>
          <Image
            src="/dashboard/icons/down.svg"
            alt="down"
            width={16}
            height={16}
          />
        </button>
      </SidebarFooter>
    </Sidebar>
  );
};
