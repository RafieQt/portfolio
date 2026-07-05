import { useState } from "react";
import { Image as ImageIcon } from "lucide-react";

export default function SkillIcon({ name, slug, icon, color }) {
  const [failed, setFailed] = useState(false);

  // If a direct icon URL is provided (Icons8 or custom SVG)
  if (icon && !failed) {
    return (
      <div className="w-7 h-7 rounded-md bg-cream dark:bg-cream/90 flex items-center justify-center p-1">
        <img
          src={icon}
          alt={name}
          width={22}
          height={22}
          onError={() => setFailed(true)}
          className="w-5 h-5 object-contain"
        />
      </div>
    );
  }

  // fallback to simpleicons
  if (slug && !failed) {
    return (
      <div className="w-7 h-7 rounded-md bg-cream dark:bg-cream/90 flex items-center justify-center p-1">
        <img
          src={`https://cdn.simpleicons.org/${slug}/${color || "9D6638"}`}
          alt={`${name} logo`}
          width={22}
          height={22}
          onError={() => setFailed(true)}
          className="w-5 h-5 object-contain"
        />
      </div>
    );
  }

  // final fallback
  return (
    <div
      title={name}
      className="w-6 h-6 rounded flex items-center justify-center border border-dashed border-umber/30 dark:border-sage/40 text-umber/50 dark:text-cream/50"
    >
      <ImageIcon size={13} />
    </div>
  );
}