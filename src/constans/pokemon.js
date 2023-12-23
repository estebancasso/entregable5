const gradientsByType = {
  grass: "bg-gradient-to-b from-green-500 to-green-300",
  fire: "bg-gradient-to-b from-red-500 to-red-300",
  water: "bg-gradient-to-b from-blue-500 to-blue-300",
  bug: "bg-gradient-to-b from-amber-500 to-amber-300",
  normal: "bg-gradient-to-b from-amber-900 to-amber-300",
  poison: "bg-gradient-to-b from-purple-500 to-purple-300",
  electric: "bg-gradient-to-b from-yellow-500 to-yellow-300",
  ground: "bg-gradient-to-b from-amber-700 to-orange-400",
  fairy: "bg-gradient-to-b from-pink-500 to-pink-300",
  fighting: "bg-gradient-to-b from-indigo-500 to-indigo-300",
  rock: "bg-gradient-to-b from-stone-500 to-stone-300",
  ghost: "bg-gradient-to-b from-violet-500 to-violet-300",
  steel: "bg-gradient-to-b from-zinc-500 to-zinc-300",
  dark: "bg-gradient-to-b from-gray-900 to-gray-400",
  psychic: "bg-gradient-to-b from-yellow-500 to-yellow-200",
  ice: "bg-gradient-to-b from-sky-500 to-sky-200",
  dragon: "bg-gradient-to-b from-teal-500 to-teal-200",
};

const borderByType = {
  grass: "border-green-500",
  fire: "border-red-500",
  water: "border-blue-500",
  bug: "border-amber-300",
  normal: "border-amber-600",
  poison: "border-purple-500",
  electric: "border-yellow-500",
  ground: "border-amber-700",
  fairy: "border-pink-500",
  fighting: "border-indigo-500",
  rock: "border-stone-500",
  ghost: "border-violet-500",
  steel: "border-zinc-500",
  dark: "border-gray-900",
  psychic: "border-yellow-500",
  ice: "border-sky-500",
  dragon: "border-teal-500",
};

const bgType = {
  fire: "bg-red-500",
  grass: "bg-[#85C9C5]",
  poison: "bg-[#6C3D9A]",
  flying: "bg-yellow-500",
  water: "bg-blue-500",
  bug: "bg-orange-500",
  normal: "bg-fuchsia-500",
  fighting: "bg-cyan-500",
  rock: "bg-stone-500",
  ghost: "bg-indigo-500",
  steel: "bg-zinc-500",
  electric: "bg-yellow-500",
  psychic: "bg-amber-500",
  ice: "bg-neutral-500",
  dragon: "bg-teal-500",
  dark: "bg-black",
  fairy: "bg-pink-500",
};

export { gradientsByType, borderByType, bgType };