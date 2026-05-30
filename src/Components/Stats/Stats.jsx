import React, { useState, useEffect } from 'react';


export default function Stats() {
  
  const [users, setUsers] = useState(0);
  const [tools, setTools] = useState(0);
  const [rating, setRating] = useState(0);

  useEffect(() => {

    const duration = 1500;
    const steps = 60;    
    const stepTime = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      
     
      setUsers(Math.floor((50 / steps) * currentStep));
      setTools(Math.floor((200 / steps) * currentStep));
      setRating(parseFloat(((4.9 / steps) * currentStep).toFixed(1)));

      if (currentStep >= steps) {
        clearInterval(timer);
        setUsers(50);
        setTools(200);
        setRating(4.9);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white py-10 md:py-14 select-none px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 text-center">
        
        {/* Stat 1: Active Users */}
        <div className="flex-1 flex flex-col items-center gap-1">
          <h2 className="text-4xl md:text-[44px] font-extrabold tracking-tight">{users}K+</h2>
          <p className="text-sm md:text-base font-medium opacity-90">Active Users</p>
        </div>

        {/* Divider 1 */}
        <div className="hidden md:block h-14 w-[1px] bg-white/30"></div>

        {/* Stat 2: Premium Tools */}
        <div className="flex-1 flex flex-col items-center gap-1">
          <h2 className="text-4xl md:text-[44px] font-extrabold tracking-tight">{tools}+</h2>
          <p className="text-sm md:text-base font-medium opacity-90">Premium Tools</p>
        </div>

        {/* Divider 2 */}
        <div className="hidden md:block h-14 w-[1px] bg-white/30"></div>

        {/* Stat 3: Rating */}
        <div className="flex-1 flex flex-col items-center gap-1">
          <h2 className="text-4xl md:text-[44px] font-extrabold tracking-tight">{rating.toFixed(1)}</h2>
          <p className="text-sm md:text-base font-medium opacity-90">Rating</p>
        </div>

      </div>
    </section>
  );
}