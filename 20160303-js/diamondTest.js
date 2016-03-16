describe("scenario",function(){

  beforeEach(function(){
    this.diamond = new Diamond();
  });
  afterEach(function(){
  });
    
  it("diamond find index" , function() {
    var index = this.diamond.findIndex('B');
    expect(index).toBe(1);
  })    

  xit("diamond A type",function(){
    var output = this.diamond.create('A');
    expect(output).toEqual(['A']);
  });

  xit("diamond B type", function(){
    var output = this.diamond.create('B');
    expect(output).toEqual(["A","B B","A"]);
  })

  xit("diamond C type", function(){
    var output = this.diamond.create('ABC');
    expect(output).toEqual(["A","B B","C   C","B B","A"]);
  })

  xit("diamond D type", function(){
    var output = this.diamond.create('ABCD');
    expect(output).toEqual(["A","B B","C   C","D     D","C   C","B B","A"]);
  })

});
