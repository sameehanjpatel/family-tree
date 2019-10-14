class FamilyTree {
  constructor (lastName) {
    super(lastName)
    this.lastName = lastName
    this.familyNames = []
  }

  insert(name) {
    let family = new FamilyTree(name)
    this.name.push(name)
  }

  familySize(){
    return this.familyNames.length + 1
  }

  findMember(searchQuery){
    return this.familyNames.filter(searchName => {
      if(searchName === searchQuery){
        return searchName;
      }
    })
  }

  log(){
  }

  

}

module.exports = FamilyTree;
