interface AdSlotProps {
  width?: number;
  height?: number;
  label?: string;
  className?: string;
}

export default function AdSlot({ width = 728, height = 90, label = 'Advertisement', className = '' }: AdSlotProps) {
  return (
    <div
      className={`flex items-center justify-center border border-dashed border-gray-700 bg-gray-900/50 text-gray-600 text-xs rounded-lg mx-auto ${className}`}
      style={{ width: '100%', maxWidth: width, height }}
      aria-label="Ad slot"
    >
      <span>{label} ({width}×{height})</span>
    </div>
  );
}
