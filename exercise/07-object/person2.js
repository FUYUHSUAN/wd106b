var People={ 
  name:"john", 
  age:30,
}

People.tel = '082331823'

People.print = function() {  console.log("name=", this.name, "age=", this.age); }
//this=people
//consloe.log 列印、顯示
//print 列印、顯示
//物件.(此物件中)要找的東西 或 狀態

People.print
People.print();
People.print();
People.print();