'use client';

import React, {
  CSSProperties,
  KeyboardEvent,
  PointerEvent as ReactPointerEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import './DriftWall.css';
import { GalleryItem } from '@/types';

export interface DriftWallItem {
  id?: string;
  image: string;
  title?: string;
  subtitle?: string;
  category?: string;
  href?: string;
  rawItem?: GalleryItem;
}

export type DriftDirection = 'up' | 'down';

export interface DriftWallProps {
  items?: DriftWallItem[];
  columns?: number;
  tileWidth?: number;
  tileHeight?: number;
  gap?: number;
  radius?: number;
  tilt?: number;
  turn?: number;
  roll?: number;
  perspective?: number;
  depth?: number;
  speed?: number;
  direction?: DriftDirection;
  variance?: number;
  parallax?: number;
  pauseOnHover?: boolean;
  lift?: number;
  fade?: number;
  dim?: number;
  grayscale?: boolean;
  overlayColor?: string;
  className?: string;
  style?: CSSProperties;
  onTileClick?: (item: DriftWallItem) => void;
}

const DEFAULT_ITEMS: DriftWallItem[] = [
  {
    image: '/images/gallery/clinical-skin-condition-palms.jpg',
    title: 'Palmar Dermatitis & Skin Peeling',
    category: 'Clinical Results',
  },
  {
    image: '/images/gallery/clinical-swelling-foot-ankle.jpg',
    title: 'Foot & Ankle Swelling',
    category: 'Clinical Results',
  },
  {
    image: '/images/gallery/clinical-acne-skin-lesions.jpg',
    title: 'Severe Acne & Skin Lesions',
    category: 'Clinical Results',
  },
  {
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    title: 'Doctor Consultation Suite',
    category: 'Clinic Facilities',
  },
  {
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    title: 'Reception & Waiting Lounge',
    category: 'Clinic Facilities',
  },
  {
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
    title: 'Natural Remedies Bay',
    category: 'Clinic Facilities',
  },
];

const prefersReducedMotion = (): boolean =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const columnFactor = (index: number, variance: number): number => {
  const pseudo = ((index * 0.6180339887 + 0.35) % 1) * 2 - 1;
  return 1 + variance * pseudo;
};

type DriftWallStyle = CSSProperties & {
  '--dw-tile-w'?: string;
  '--dw-tile-h'?: string;
  '--dw-gap'?: string;
  '--dw-radius'?: string;
  '--dw-perspective'?: string;
  '--dw-lift'?: string;
  '--dw-dim'?: number;
  '--dw-gray'?: number;
  '--dw-overlay'?: string;
  '--dw-edge'?: string;
};

interface ColumnMeta {
  copyHeight: number;
  copies: number;
  colHeight: number;
}

export const DriftWall = ({
  items = DEFAULT_ITEMS,
  columns,
  tileWidth,
  tileHeight,
  gap,
  radius = 16,
  tilt = 14,
  turn = -12,
  roll = 0,
  perspective = 1200,
  depth = 110,
  speed = 36,
  direction = 'up',
  variance = 0.4,
  parallax = 0.55,
  pauseOnHover = true,
  lift = 68,
  fade = 0.55,
  dim = 0.65,
  grayscale = false,
  overlayColor = '#0e3325',
  className = '',
  style,
  onTileClick,
}: DriftWallProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const planeRef = useRef<HTMLDivElement | null>(null);
  const trackRefs = useRef<Array<HTMLDivElement | null>>([]);
  const rafRef = useRef<number | null>(null);

  const offsetsRef = useRef<number[]>([]);
  const velocitiesRef = useRef<number[]>([]);
  const hoveredColRef = useRef(-1);
  const wallHoveredRef = useRef(false);
  const pointerRef = useRef({ x: 0, y: 0 });
  const pointerDampedRef = useRef({ x: 0, y: 0 });
  const lastTsRef = useRef<number | null>(null);

  const [containerDimensions, setContainerDimensions] = useState({
    width: 1200,
    height: 580,
  });
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeIdRef = useRef<string | null>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(prefersReducedMotion());

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = (event: MediaQueryListEvent) => setReduced(event.matches);

    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const safeColumns = useMemo(() => {
    if (columns !== undefined) return Math.max(1, Math.floor(columns));
    if (containerDimensions.width >= 1800) return 7;
    if (containerDimensions.width >= 1440) return 6;
    if (containerDimensions.width >= 1150) return 5;
    if (containerDimensions.width >= 850) return 4;
    if (containerDimensions.width >= 550) return 3;
    return 3;
  }, [columns, containerDimensions.width]);

  const effectiveTileWidth = useMemo(() => {
    if (tileWidth !== undefined) return tileWidth;
    if (containerDimensions.width >= 1800) return 300;
    if (containerDimensions.width >= 1440) return 280;
    if (containerDimensions.width >= 1150) return 260;
    if (containerDimensions.width >= 850) return 235;
    if (containerDimensions.width >= 550) return 205;
    if (containerDimensions.width >= 390) return 165;
    return 148;
  }, [tileWidth, containerDimensions.width]);

  const effectiveTileHeight = useMemo(() => {
    if (tileHeight !== undefined) return tileHeight;
    if (containerDimensions.width >= 1800) return 198;
    if (containerDimensions.width >= 1440) return 186;
    if (containerDimensions.width >= 1150) return 174;
    if (containerDimensions.width >= 850) return 158;
    if (containerDimensions.width >= 550) return 138;
    if (containerDimensions.width >= 390) return 112;
    return 100;
  }, [tileHeight, containerDimensions.width]);

  const effectiveGap = useMemo(() => {
    if (gap !== undefined) return gap;
    if (containerDimensions.width >= 1440) return 22;
    if (containerDimensions.width >= 1150) return 18;
    if (containerDimensions.width >= 850) return 16;
    if (containerDimensions.width >= 550) return 14;
    return 10;
  }, [gap, containerDimensions.width]);

  const safeItems = useMemo(() => {
    return items.length > 0 ? items : DEFAULT_ITEMS;
  }, [items]);

  const columnItems = useMemo(() => {
    const cols: DriftWallItem[][] = Array.from(
      { length: safeColumns },
      () => [],
    );

    const minItemsPerCol = safeItems.length >= 2 ? 2 : 1;
    const totalSlots = Math.max(safeColumns * minItemsPerCol, safeItems.length);

    for (let i = 0; i < totalSlots; i++) {
      const colIndex = i % safeColumns;
      const itemIndex = (i + Math.floor(i / safeColumns)) % safeItems.length;
      cols[colIndex].push(safeItems[itemIndex]);
    }

    return cols.map((col) => (col.length ? col : safeItems.slice(0, 1)));
  }, [safeItems, safeColumns]);

  const columnMeta = useMemo<ColumnMeta[]>(() => {
    return columnItems.map((col, c) => {
      // Column rhythm multiplier for an organic editorial masonry composition
      const rhythmMultipliers = [1.06, 0.94, 1.08, 0.96, 1.04, 0.97, 1.02];
      const ratio = rhythmMultipliers[c % rhythmMultipliers.length] ?? 1;
      const colTileHeight = Math.round(effectiveTileHeight * ratio);
      const colUnit = colTileHeight + effectiveGap;
      const copyHeight = Math.max(colUnit, col.length * colUnit);
      const copies = Math.max(
        2,
        Math.ceil((containerDimensions.height * 1.6) / copyHeight) + 1,
      );

      return { copyHeight, copies, colHeight: colTileHeight };
    });
  }, [columnItems, effectiveTileHeight, effectiveGap, containerDimensions.height]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ro = new ResizeObserver(([entry]) => {
      if (entry.contentRect.width > 0 && entry.contentRect.height > 0) {
        setContainerDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    ro.observe(container);
    return () => ro.disconnect();
  }, []);

  const baseVelocities = useMemo(() => {
    const dirSign = direction === 'up' ? 1 : -1;

    return columnItems.map((_, c) => {
      const altSign = c % 2 === 0 ? 1 : -1;
      return speed * columnFactor(c, variance) * dirSign * altSign;
    });
  }, [columnItems, speed, direction, variance]);

  useEffect(() => {
    offsetsRef.current = columnMeta.map(
      (meta, c) => meta.copyHeight * ((c * 0.37) % 1),
    );
    velocitiesRef.current = columnItems.map(() => 0);
  }, [columnMeta, columnItems]);

  const applyPlaneTransform = useCallback(
    (px: number, py: number) => {
      const plane = planeRef.current;
      if (!plane) return;

      plane.style.transform =
        `translate(-50%, -50%) scale(1.15) ` +
        `rotateX(${tilt + py}deg) rotateY(${turn + px}deg) ` +
        `rotateZ(${roll}deg) translateZ(${-depth}px)`;
    },
    [tilt, turn, roll, depth],
  );

  useEffect(() => {
    const animate = (ts: number) => {
      if (lastTsRef.current === null) lastTsRef.current = ts;

      const dt = Math.min(
        0.05,
        Math.max(0, ts - lastTsRef.current) / 1000,
      );
      lastTsRef.current = ts;

      const maxTilt = parallax * 8;
      const targetX = pointerRef.current.x * maxTilt;
      const targetY = -pointerRef.current.y * maxTilt;
      const damp = 1 - Math.exp(-dt / 0.12);

      pointerDampedRef.current.x +=
        (targetX - pointerDampedRef.current.x) * damp;
      pointerDampedRef.current.y +=
        (targetY - pointerDampedRef.current.y) * damp;

      applyPlaneTransform(
        pointerDampedRef.current.x,
        pointerDampedRef.current.y,
      );

      if (!reduced) {
        for (let c = 0; c < trackRefs.current.length; c++) {
          const meta = columnMeta[c];
          if (!meta) continue;

          const paused = wallHoveredRef.current && pauseOnHover;
          const factor = paused || hoveredColRef.current === c ? 0 : 1;
          const target = baseVelocities[c] * factor;
          const ease = 1 - Math.exp(-dt / (target === 0 ? 0.16 : 0.28));

          velocitiesRef.current[c] +=
            (target - velocitiesRef.current[c]) * ease;

          let next =
            (offsetsRef.current[c] ?? 0) + velocitiesRef.current[c] * dt;

          next = ((next % meta.copyHeight) + meta.copyHeight) % meta.copyHeight;
          offsetsRef.current[c] = next;

          const el = trackRefs.current[c];
          if (el) el.style.transform = `translate3d(0, ${-next}px, 0)`;
        }
      } else {
        for (let c = 0; c < trackRefs.current.length; c++) {
          const el = trackRefs.current[c];
          const meta = columnMeta[c];
          if (el && meta) {
            el.style.transform = `translate3d(0, ${-(offsetsRef.current[c] ?? 0)}px, 0)`;
          }
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTsRef.current = null;
    };
  }, [baseVelocities, columnMeta, pauseOnHover, parallax, reduced, applyPlaneTransform]);

  const activate = useCallback((id: string, index: number) => {
    activeIdRef.current = id;
    hoveredColRef.current = index;
    setActiveId(id);
  }, []);

  const release = useCallback(() => {
    activeIdRef.current = null;
    hoveredColRef.current = -1;
    setActiveId(null);
  }, []);

  const handlePointerMove = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      if (parallax > 0 && !reduced) {
        pointerRef.current = {
          x: (event.clientX - rect.left) / rect.width - 0.5,
          y: (event.clientY - rect.top) / rect.height - 0.5,
        };
      }

      const hit = document.elementFromPoint(event.clientX, event.clientY);
      const tile = hit?.closest<HTMLElement>('[data-tile-id]');
      if (!tile) return;

      const id = tile.dataset.tileId;
      if (!id || id === activeIdRef.current) return;

      activeIdRef.current = id;
      hoveredColRef.current = Number(tile.dataset.col ?? -1);
      setActiveId(id);
    },
    [parallax, reduced],
  );

  const handlePointerLeaveWall = useCallback(() => {
    wallHoveredRef.current = false;
    pointerRef.current = { x: 0, y: 0 };
    release();
  }, [release]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>, item: DriftWallItem, id: string, colIndex: number) => {
      if (!event.currentTarget.matches('[role="button"]')) return;
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        activate(id, colIndex);
        if (onTileClick) {
          onTileClick(item);
        }
      }
    },
    [activate, onTileClick],
  );

  const cssVars = useMemo<DriftWallStyle>(
    () => ({
      '--dw-tile-w': `${effectiveTileWidth}px`,
      '--dw-tile-h': `${effectiveTileHeight}px`,
      '--dw-gap': `${effectiveGap}px`,
      '--dw-radius': `${radius}px`,
      '--dw-perspective': `${perspective}px`,
      '--dw-lift': `${lift}px`,
      '--dw-dim': dim,
      '--dw-gray': grayscale ? 1 : 0,
      '--dw-overlay': overlayColor,
      '--dw-edge': `${Math.max(0, (1 - fade) * 100)}%`,
      ...style,
    }),
    [
      effectiveTileWidth,
      effectiveTileHeight,
      effectiveGap,
      radius,
      perspective,
      lift,
      dim,
      grayscale,
      overlayColor,
      fade,
      style,
    ],
  );

  const renderTile = (
    item: DriftWallItem,
    id: string,
    colIndex: number,
  ) => {
    const isClinical = item.category === 'Clinical Results';

    const inner = (
      <span className="drift-wall__inner">
        <img
          src={item.image}
          alt={item.title ?? ''}
          loading="lazy"
          decoding="async"
          draggable={false}
        />
        <span className="drift-wall__overlay" aria-hidden="true" />
        <span className="drift-wall__caption">
          {item.category && (
            <span
              className={`drift-wall__badge ${isClinical ? 'text-emerald-300' : 'text-sage-200'
                }`}
            >
              {isClinical ? 'Clinical Result' : 'Clinic Facility'}
            </span>
          )}
          {item.title && <span className="drift-wall__title">{item.title}</span>}
        </span>
      </span>
    );

    const commonProps = {
      className: `drift-wall__tile${activeId === id ? ' is-active' : ''}`,
      'data-tile-id': id,
      'data-col': colIndex,
      onFocus: () => activate(id, colIndex),
      onBlur: release,
      onClick: (e: React.MouseEvent) => {
        if (onTileClick) {
          e.preventDefault();
          onTileClick(item);
        }
      },
    };

    if (item.href) {
      return (
        <a
          key={id}
          href={item.href}
          target="_blank"
          rel="noreferrer noopener"
          {...commonProps}
        >
          {inner}
        </a>
      );
    }

    return (
      <div
        key={id}
        tabIndex={0}
        role="button"
        aria-label={item.title ?? 'Clinic Photo Tile'}
        onKeyDown={(event) => handleKeyDown(event, item, id, colIndex)}
        {...commonProps}
      >
        {inner}
      </div>
    );
  };

  const rootClass = [
    'drift-wall',
    reduced ? 'drift-wall--reduced' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      ref={containerRef}
      className={rootClass}
      style={cssVars}
      onPointerMove={handlePointerMove}
      onPointerEnter={() => {
        wallHoveredRef.current = true;
      }}
      onPointerLeave={handlePointerLeaveWall}
      role="group"
      aria-label="Interactive drifting clinic photo wall"
    >
      <div ref={planeRef} className="drift-wall__plane">
        {columnItems.map((col, c) => {
          const meta = columnMeta[c];
          const copies = Array.from({ length: meta?.copies ?? 2 });

          return (
            <div
              className="drift-wall__col"
              key={`col-${c}`}
              style={
                {
                  '--dw-tile-h': `${meta?.colHeight ?? effectiveTileHeight}px`,
                } as CSSProperties
              }
            >
              <div
                className="drift-wall__track"
                ref={(el) => {
                  trackRefs.current[c] = el;
                }}
              >
                {copies.map((_, copyIndex) =>
                  col.map((item, itemIndex) =>
                    renderTile(item, `${c}-${copyIndex}-${itemIndex}`, c),
                  ),
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DriftWall;
