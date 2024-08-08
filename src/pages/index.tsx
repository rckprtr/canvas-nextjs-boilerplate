import CanvasClient from "@/components/canvas-client";
import Head from "next/head";
import { useEffect } from "react";


export default function Home() {
  return (
    <div>
      <main className="text-white">
        <CanvasClient />
      </main>
    </div>
  );
}
