function Crousel() {
  return (
    <div className="w-full border-b border-gray-500 relative top-8 flex overflow-hidden bg-gradient-to-l from-black/30 via-transparent to-black/30">
      <div className="flex gap-2 items-center h-full animate-crousel p-4 ">
            {[0, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <div key={num} className="w-2xs h-28   border border-gray-300 flex items-center justify-center">
                {num}
            </div>
            ))}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <div key={`dup-${num}`} className="w-2xs h-28 border border-gray-300 flex items-center justify-center">
                {num}
            </div>
            ))}
      </div>
    </div>
  );
}

export default Crousel;
