describe("scenario",function(){

  beforeEach(function(){
    this.diamond = new Diamond();
  });
  afterEach(function(){
  });

  it("diamond A type",function(){
    var output = this.diamond.create('A');
    expect(output).toBe('A');
  });

  it("diamond B type", function(){
    var output = this.diamond.create('AB');
    expect(output).toBe("A-B B-A");
  })

  it("diamond C type", function(){
    var output = this.diamond.create('ABC');
    expect(output).toBe("A-B B-C   C-B B-A");
  })

  it("diamond D type", function(){
    var output = this.diamond.create('ABCD');
    expect(output).toBe("A-B B-C   C-D     D-C   C-B B-A");
  })

  it("diamond Z type", function(){
    var output = this.diamond.create('XYZ');
    expect(output).toBe("X-Y Y-Z   Z-Y Y-X");
  })
});
