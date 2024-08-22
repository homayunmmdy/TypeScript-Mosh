"use strict";
class Ride {
    start() { Ride.activeRides++; }
    stop() { Ride.activeRides--; }
}
Ride.activeRides = 0;
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
console.log(Ride.activeRides);
//# sourceMappingURL=index.js.map