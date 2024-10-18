import GoLiveSubscription from "@/components/GoLiveSubscription";
import React from "react";

const HomePage = () => {
  return (
    <main className="flex min-h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-3xl font-bold">Ink & Pay</h2>
        <p>Simple Invoicing, Clear Payments</p>
        <GoLiveSubscription/>
      </div>
    </main>
  );
};

export default HomePage;
