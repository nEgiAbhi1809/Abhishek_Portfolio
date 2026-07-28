import { useMousePosition } from '@/hooks/useMousePosition';

export function GlobalBackground() {
  const mousePos = useMousePosition();

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Gradient orbs */}
      <div
        className="absolute blob h-[500px] w-[500px] bg-[var(--color-accent)]/15 -top-20 -left-20"
        style={{ animationDelay: '0s' }}
      />
      <div
        className="absolute blob h-[400px] w-[400px] bg-purple-500/10 top-1/2 -right-20"
        style={{ animationDelay: '2s' }}
      />
      <div
        className="absolute blob h-[600px] w-[600px] bg-blue-500/5 bottom-0 left-1/3"
        style={{ animationDelay: '4s' }}
      />

      {/* Mouse-following gradient */}
      <div
        className="pointer-events-none absolute h-[800px] w-[800px] rounded-full opacity-30 transition-all duration-300 ease-out"
        style={{
          background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 60%)',
          left: mousePos.x - 400,
          top: mousePos.y - 400,
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--color-text-muted) 1px, transparent 1px), linear-gradient(90deg, var(--color-text-muted) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Background noise texture */}
      <div className="absolute inset-0 pointer-events-none bg-noise opacity-50 z-[-1]" />
    </div>
  );
}
