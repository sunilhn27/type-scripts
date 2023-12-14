class Parent{
  color: string ="";
  hight: number =0;
  weight!: number;


  getColor():string{
    return this.color;
  }

  getHeight():number{
    return this.hight;
  }

  getWeight():number{
    return this.weight;
  }

}

export default Parent;
