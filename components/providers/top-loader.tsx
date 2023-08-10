"use client";

import NextTopLoader from "nextjs-toploader";

function TopLoader() {
  return (
    <NextTopLoader
      color="#2874bf"
      initialPosition={0.08}
      crawlSpeed={5000}
      height={5}
      crawl={true}
      showSpinner={true}
      easing="ease-in-out"
      speed={200}
      shadow="0 0 10px #2299DD,0 0 5px #2299DD"
    />
  );
}

export default TopLoader;
