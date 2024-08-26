"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Component(options) {
    return (constructor) => {
        console.log("Components decorator called");
        constructor.prototype.options = options;
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.insertInDOM = () => {
            console.log("Insertign the components in the DOM");
        };
    };
}
function Pipe(constructor) {
    console.log("Pipe Decorator called");
    constructor.prototype.pipe = true;
}
let ProfileComponents = class ProfileComponents {
};
ProfileComponents = __decorate([
    Component({ selector: '#my-profile' }),
    Pipe
], ProfileComponents);
//# sourceMappingURL=index.js.map