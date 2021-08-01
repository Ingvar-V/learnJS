class Car {
  constructor(
    model,
    year,
    color,
    engine,
    driveType,
    transmission,
    headlights,
    glassLifterF,
    glassLifterB
  ) {
    this.model = model;
    this.year = year;
    this.color = color;
    this.engine = engine;
    this.driveType = driveType;
    this.transmission = transmission;
    this.headlights = headlights;
    this.glassLifter = {
      front: glassLifterF,
      back: glassLifterB,
    };
  }

  headlightsStatus(status) {
    this.headlights = status;
  }

  glassLifterOption(optionFront, optionBack) {
    this.glassLifter.front = optionFront;
    this.glassLifter.back = optionBack;
  }
}

export default Car;
