import Link from "next/link";
import React from "react";

export default function TheNavigation() {
  return (
    <div className="flex justify-between p-5">
      <div className="font-bold text-inherit">Ter.Now</div>
      <div className="flex gap-3">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </div>
    </div>
  );
}
