class Compiler {
    constructor(options, input, output) {
        this.options = options;
        this.input = input;
        this.output = output;
        this.input.on('data', this.compile.bind(this));
        this.input.on('end', this.end.bind(this));
    }
    compile(data) {
        this.output.write(data);
    }
    end() {
        this.output.end();
    }

}

export default Compiler;