import type { Reel } from '~/schemas/reel.schema';

export function ReelGridItem({ reel }: { reel: Reel }) {
  return (
    <div className="relative w-full aspect-[9/16] overflow-hidden bg-gray-900">
      <img
        src={reel.thumbnail_url}
        alt={reel.caption ?? 'Reel thumbnail'}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-2 left-2 text-white text-xs font-semibold flex items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-3 h-3"
        >
          <path
            fillRule="evenodd"
            d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
            clipRule="evenodd"
          />
        </svg>
        {reel.views.toLocaleString()}
      </div>
    </div>
  );
}
