export function AuroraGrid() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
      {/* Aurora clouds */}
      <div
        className="absolute -top-1/4 -start-1/4 h-[60vh] w-[60vh] rounded-full blur-[120px] animate-aurora-1"
        style={{ background: 'radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, transparent 70%)' }}
      />
      <div
        className="absolute top-1/3 -end-1/4 h-[70vh] w-[70vh] rounded-full blur-[140px] animate-aurora-2"
        style={{ background: 'radial-gradient(circle, rgba(255, 59, 92, 0.12) 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-1/4 start-1/4 h-[65vh] w-[65vh] rounded-full blur-[130px] animate-aurora-3"
        style={{ background: 'radial-gradient(circle, rgba(58, 255, 158, 0.1) 0%, transparent 70%)' }}
      />

      {/* 3D perspective grid floor */}
      <div
        className="absolute inset-x-0 bottom-0 h-[50vh] overflow-hidden"
        style={{ perspective: '500px', perspectiveOrigin: '50% 0%' }}
      >
        <div
          className="absolute inset-0 animate-grid-move"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 212, 255, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.12) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            transform: 'rotateX(60deg) scale(2)',
            transformOrigin: '50% 0%',
            maskImage: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 80%)',
            WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 80%)',
          }}
        />
      </div>

      {/* Vignette overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 0%, rgba(11, 15, 25, 0.4) 70%, rgba(11, 15, 25, 0.8) 100%)',
        }}
      />
    </div>
  );
}
