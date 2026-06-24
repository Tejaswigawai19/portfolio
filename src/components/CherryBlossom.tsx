'use client';

import { useEffect } from 'react';

export default function CherryBlossom() {
  useEffect(() => {
    /* ---- BlossomScene (verbatim logic, TS-safe) ---- */
    class Petal {
      customClass: string;
      constructor({ customClass }: { customClass: string }) {
        this.customClass = customClass;
      }
    }

    class BlossomScene {
      container: HTMLElement;
      petalsTypes: Petal[];
      numPetals: number;
      gravity: number;
      petals: PetalInstance[];

      constructor({
        id,
        petalsTypes,
        numPetals,
        gravity,
      }: {
        id: string;
        petalsTypes: Petal[];
        numPetals: number;
        gravity: number;
      }) {
        this.container = document.getElementById(id)!;
        this.petalsTypes = petalsTypes;
        this.numPetals = numPetals;
        this.gravity = gravity;
        this.petals = [];
        this.init();
        this.animate();
      }

      init() {
        for (let i = 0; i < this.numPetals; i++) {
          const p = new PetalInstance(
            this.container,
            this.petalsTypes,
            this.gravity,
            true
          );
          this.petals.push(p);
        }
      }

      animate() {
        this.petals.forEach((p) => p.update());
        requestAnimationFrame(() => this.animate());
      }
    }

    class PetalInstance {
      container: HTMLElement;
      petalsTypes: Petal[];
      gravity: number;
      el: HTMLDivElement;
      x: number;
      y: number;
      vx: number;
      vy: number;
      rot: number;
      vrot: number;
      opacity: number;
      width: number;
      height: number;

      constructor(
        container: HTMLElement,
        petalsTypes: Petal[],
        gravity: number,
        init: boolean
      ) {
        this.container = container;
        this.petalsTypes = petalsTypes;
        this.gravity = gravity;

        const type =
          petalsTypes[Math.floor(Math.random() * petalsTypes.length)];

        this.el = document.createElement('div');
        this.el.className = `petal ${type.customClass}`;
        container.appendChild(this.el);

        // read dimensions from CSS
        const cs = getComputedStyle(this.el);
        this.width = parseFloat(cs.width) || 45;
        this.height = parseFloat(cs.height) || 20;

        this.x = 0;
        this.y = 0;
        this.vx = 0;
        this.vy = 0;
        this.rot = 0;
        this.vrot = 0;
        this.opacity = 0;

        this.reset(init);
      }

      reset(scatter = false) {
        const W = window.innerWidth;
        const H = window.innerHeight;
        this.x = Math.random() * (W + 200) - 100;
        this.y = scatter ? Math.random() * H : -this.height - 10;
        this.vx = (Math.random() - 0.5) * 1.2;
        this.vy = this.gravity * (0.5 + Math.random() * 0.8);
        this.rot = Math.random() * 360;
        this.vrot = (Math.random() - 0.5) * 3;
        this.opacity = 0.7 + Math.random() * 0.3;
      }

      update() {
        this.x += this.vx + Math.sin(Date.now() / 1200 + this.y * 0.01) * 0.4;
        this.y += this.vy;
        this.rot += this.vrot;

        this.el.style.transform = `translate(${this.x}px, ${this.y}px) rotate(${this.rot}deg)`;
        this.el.style.opacity = String(this.opacity);

        if (this.y > window.innerHeight + this.height) {
          this.reset();
        }
      }
    }

    /* ---- initialise ---- */
    const petalsTypes = [
      new Petal({ customClass: 'petal-style1' }),
      new Petal({ customClass: 'petal-style2' }),
      new Petal({ customClass: 'petal-style3' }),
      new Petal({ customClass: 'petal-style4' }),
    ];

    new BlossomScene({
      id: 'blossom_container',
      petalsTypes,
      numPetals: 8,
      gravity: 0.5,
    });
  }, []);

  return <div id="blossom_container" />;
}
