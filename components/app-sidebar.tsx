import { Paperclip, Home, BicepsFlexed, Brain, Dumbbell, Podcast } from "lucide-react"
import Link from 'next/link'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const items = [
  {
    title: "骨骼肌與肌節",
    url: "/articles/muscle",
    icon: BicepsFlexed,
  },
  {
    title: "運動心理學",
    url: "/articles/mind",
    icon: Brain,
  },
  {
    title: "參考Podcast",
    url: "/articles/podcast",
    icon: Podcast,
  }
]

const attachments = [
  {
    title: "體重與身體組成管理.pdf",
    url: "/docs/體重與身體組成管理.pdf",
    icon: Paperclip,
  },
  {
    title: "怪獸podcast.pdf",
    url: "/docs/怪獸podcast.pdf",
    icon: Paperclip,
  },
  {
    title: "20241102B級學科.pdf",
    url: "/docs/20241102B級學科.pdf",
    icon: Paperclip,
  },
  {
    title: "2024怪獸訓練肌力及體能教練B級授證課程-動作項目.pdf",
    url: "/docs/2024怪獸訓練肌力及體能教練B級授證課程-動作項目.pdf",
    icon: Paperclip,
  }
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Monster B</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="/">
                      <Home />
                      <span>熱心怪獸們</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>術科</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="/articles/movements">
                      <Dumbbell />
                      <span>動作大全</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>學科</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>群組資源（請在群組下載）</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {attachments.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} target="_blank" rel="nofollow noopener noreferrer external">
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
