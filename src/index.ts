type ComponentOptions = {
  selector: string;
};

function Component(options: ComponentOptions) {
  return (constructor: Function) => {
    console.log("Components decorator called");
    constructor.prototype.options = options;
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDOM = () => {
      console.log("Insertign the components in the DOM");
    };
  };
}

function Pipe(constructor: Function) {
  console.log("Pipe Decorator called");
  constructor.prototype.pipe = true
}

@Component({selector: '#my-profile'})
@Pipe
class ProfileComponents {
}
