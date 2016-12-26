
/**
 * controller for route
 */
export default class Particle
{
  constructor() {
    this.particles = new Particles();
  }

  async available() {
    return await this.particles.available();
  }
}
