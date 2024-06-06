// https://codepen.io/Snezhana25/pen/NBdzoK


import React, { useEffect, useLayoutEffect, useRef } from 'react';

const SparkCanvas = ({ className, width = 300, height = 400, particles = 10 }) => {
  const canvasRef = useRef(null);
  const bufferRef = useRef(null);
  const colors = ["#fd9", "#fe9", "#fa9", "#e99", "#ea9", "#f66"];
  const total = particles;
  let position = { x: window.innerWidth / 2, y: window.innerHeight };
  let fire = [];
  let sparks = [];

  const spark = (pos, config) => {
    let position, velocity, gravity, prevPosition, lifespan, alpha, next;

    config = config || { size: 1, angle: 10, range: 1 };

    const init = () => {
      position = { x: pos.x + (Math.random() * 50 - 30) * config.range, y: pos.y + (Math.random() * 10 - 5) };
      velocity = { angle: (Math.random() - 0.5) * Math.PI * config.angle + Math.PI * 1.5, weight: Math.random() * 15 + 5 };
      gravity = { angle: (Math.random() - 0.5) * 0.25 + Math.PI * 1.5, chance: (Math.random() - 0.5) * 0.25, weight: Math.random() * 2 + 3 };
      prevPosition = position;
      lifespan = Math.random() * 40 + 60;
      alpha = Math.random() * 30 + 30;
      next = Math.random() * 100;
    }

    const update = () => {
      if (--next > 0) {
        return;
      }
      prevPosition = { x: position.x, y: position.y };
      position.x += Math.cos(velocity.angle) * velocity.weight + Math.cos(gravity.angle) * gravity.weight;
      position.y += Math.sin(velocity.angle) * velocity.weight + Math.sin(gravity.angle) * gravity.weight;
      velocity.weight *= 0.96;
      velocity.angle += gravity.chance;
      --lifespan <= 0 ? init(pos) : null;
    }

    const render = (ctx) => {
      ctx.strokeStyle = colors[Math.round(Math.random() * (colors.length - 1))];
      ctx.lineWidth = velocity.weight * 0.12 * config.size;
      ctx.globalAlpha = lifespan / alpha;
      ctx.beginPath();
      ctx.moveTo(position.x, position.y);
      ctx.lineTo(prevPosition.x, prevPosition.y);
      ctx.closePath();
      ctx.stroke();
      // ctx.lineWidth = 1;
      ctx.globalAlpha = 1;
    }

    init();
    return { update, render };
  }

  const init = () => {
    [...Array(total * 2.5).keys()].forEach(i => {
      fire.push(spark(position, { size: 1.5, angle: 0.5, range: 2.5 }));
    });
    [...Array(total).keys()].forEach(i => {
      sparks.push(spark(position));
    });
    resize();
  }

  const update = () => {
    let pos = position;
    fire.forEach(s => s.update(pos));
    sparks.forEach(s => s.update(pos));
  }

  const renderCanvas = () => {
    let ctx = canvasRef.current.getContext("2d");
    let eff = bufferRef.current.getContext("2d");
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    eff.clearRect(0, 0, window.innerWidth, window.innerHeight);
    fire.forEach(s => {
      s.render(ctx);
    });
    sparks.forEach(s => {
      s.render(eff);
    });
  }

  const resize = () => {
    // canvasRef.current.width = window.innerWidth;
    // canvasRef.current.height = window.innerHeight;
    // bufferRef.current.width = window.innerWidth;
    // bufferRef.current.height = window.innerHeight;


    canvasRef.current.width = width;
    canvasRef.current.height = height;
    bufferRef.current.width = width;
    bufferRef.current.height = height;

    position.x = width / 2;
    position.y = height;
  }

  useEffect(() => {
    init();
    window.addEventListener('resize', resize);
    // document.body.style.backgroundColor = '#000000';
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);



  useLayoutEffect(() => {
    let lastTimestamp = 0;
    const animation = (timestamp) => {
      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;
      update();
      renderCanvas();
      // Adjust the multiplier (e.g., 0.01) to control animation speed
      const frameDelay = 0.01;
      const nextFrameTime = Math.max(frameDelay - deltaTime, 0);
      setTimeout(() => {
        requestAnimationFrame(animation);
      }, nextFrameTime);
    };
    animation();
  }, []); // Empty dependency array to run only once on mount


  return (
    <div className={`${className}`}>
      <div className='absolute z-0'>
        <canvas ref={canvasRef} />
      </div>

      <div className='absolute z-0'>
        <canvas ref={bufferRef} />
      </div>

      {/* <div className='w-[200px] h-[100px] blur-xl bg-gradient-to-t from-black left-[50px]  to-transparent absolute -bottom-6 z-10' /> */}
    </div>
  );
}

export default SparkCanvas;
