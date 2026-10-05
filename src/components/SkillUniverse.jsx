import React, { useEffect, useMemo, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const skills = ['Python', 'SQL', 'AI', 'RAG', 'FastAPI', 'MySQL', 'Docker', 'AWS'];

const orbitConfig = [
  { radius: 116, duration: 32, tilt: -10, offset: 0 },
  { radius: 172, duration: 39, tilt: 8, offset: 17 },
  { radius: 232, duration: 48, tilt: -6, offset: 9 },
  { radius: 294, duration: 60, tilt: 11, offset: 28 },
];

export default function SkillUniverse({ compact = false }) {
  const [hovered, setHovered] = useState(null);
  const mx = useMotionValue(0), my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 65, damping: 18 });
  const sy = useSpring(my, { stiffness: 65, damping: 18 });
  const rotateX = useTransform(sy, [-26, 26], [6, -6]);
  const rotateY = useTransform(sx, [-26, 26], [-8, 8]);

  useEffect(() => {
    const onMove = e => {
      mx.set((e.clientX / window.innerWidth - .5) * 26);
      my.set((e.clientY / window.innerHeight - .5) * 26);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [mx, my]);

  const orbits = useMemo(() => orbitConfig.map((config, orbitIndex) => ({
    ...config,
    skills: skills.filter((_, i) => i % orbitConfig.length === orbitIndex)
  })), []);

  return (
    <div className={compact ? 'skill-universe compact solar-system' : 'skill-universe solar-system'}>
      <div className="skill-stars" />
      <motion.div className="solar-system-stage" style={{ x: sx, y: sy, rotateX, rotateY }}>
        <div className="solar-nebula" />
        {orbits.map((orbit, orbitIndex) => (
          <div
            key={orbit.radius}
            className="solar-orbit"
            style={{
              width: orbit.radius * 2,
              height: orbit.radius * 2 * (0.52 + orbitIndex * 0.035),
              marginLeft: -orbit.radius,
              marginTop: -orbit.radius * (0.52 + orbitIndex * 0.035),
              '--orbit-tilt': `${orbit.tilt}deg`,
              animationDuration: `${orbit.duration}s`,
              animationDelay: `-${orbit.offset}s`
            }}
          >
            <span className="orbit-line" />
            {orbit.skills.map((name, index) => {
              const angle = (index / orbit.skills.length) * 360;
              return (
                <div
                  key={name}
                  className="skill-planet"
                  style={{ transform: `rotate(${angle}deg) translateX(${orbit.radius}px)` }}
                >
                  <motion.button
                    type="button"
                    className={`skill-node-label ${hovered === name ? 'is-hot' : ''}`}
                    onMouseEnter={() => setHovered(name)}
                    onMouseLeave={() => setHovered(null)}
                    onFocus={() => setHovered(name)}
                    onBlur={() => setHovered(null)}
                    whileHover={{ scale: 1.16 }}
                    whileTap={{ scale: 1.08 }}
                  >
                    <span>{name}</span>
                  </motion.button>
                </div>
              );
            })}
          </div>
        ))}

        <div className="solar-sun-wrap">
          <div className="solar-corona" />
          <div className="solar-sun"><span>ASK</span><small>ENGINEERING<br/>ECOSYSTEM</small></div>
        </div>
      </motion.div>

      <div className="solar-system-caption">
        <span>TECHNICAL UNIVERSE</span>
        <b>{hovered ? hovered : 'Move your cursor through the system'}</b>
      </div>
    </div>
  );
}
