"use client";

import UserHoverCard from "@/components/Avatar";
import { NavBar } from "@/components/NavBar";
import { Title } from "@/components/Title";

export default function Home() {
  return (
    <main>
      <div className="flex items-center justify-center">
        <NavBar />
        <UserHoverCard />
      </div>
      <Title />
    </main>
  );
}
