"use client";
import {
  Benefits,
  BlogSlider,
  About,
  Hero,
  HorizontalMenuItems,
  PropertyList,
  Subscribe,
} from "@/components";
import { Footer, NavBar } from "@/components/layouts";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="">
        <NavBar />
        <Hero />
        <HorizontalMenuItems />
        <About />
        <PropertyList />
        <Benefits />
        <BlogSlider />
        <Subscribe />
        <Footer />
      </main>
    </QueryClientProvider>
  );
}
