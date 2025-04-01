"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IconBell, IconSearch, IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";

export function Header() {
  const { setTheme, theme } = useTheme();

  return (
    <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4 lg:px-6">
      <div className="flex flex-1 items-center gap-4">
        <div className="relative w-full max-w-md">
          <IconSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="搜索..."
            className="w-full rounded-md border border-input bg-background pl-8 pr-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? (
            <IconSun className="h-4 w-4" />
          ) : (
            <IconMoon className="h-4 w-4" />
          )}
          <span className="sr-only">切换主题</span>
        </Button>
        <Button variant="outline" size="icon" className="rounded-full">
          <IconBell className="h-4 w-4" />
          <span className="sr-only">通知</span>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full overflow-hidden"
            >
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" alt="用户头像" />
                <AvatarFallback>用户</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>我的账户</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>个人资料</DropdownMenuItem>
            <DropdownMenuItem>设置</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>退出登录</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
