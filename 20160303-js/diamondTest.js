describe("scenario",function(){

  beforeEach(function(){
    this.diamond = new Diamond();
  });

  it("diamond A type",function(){
    var output = this.diamond.create('A');
    expect(output).toEqual(['A']);
  });

  it("diamond B type", function(){
    var output = this.diamond.create('B');
    expect(output).toEqual(["A","B B","A"]);
  })

  it("diamond C type", function(){
    var output = this.diamond.create('C');
    expect(output).toEqual(["A","B B","C   C","B B","A"]);
  })

  it("diamond D type", function(){
    var output = this.diamond.create('D');
    expect(output).toEqual(["A","B B","C   C","D     D","C   C","B B","A"]);
  })
  
  it("diamond E type", function(){
    var output = this.diamond.create('E');
    expect(output).toEqual(["A","B B","C   C","D     D", "E       E", "D     D","C   C","B B","A"]);
  })

});
