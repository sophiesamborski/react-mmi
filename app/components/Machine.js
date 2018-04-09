/**
 *
 * App.js
 *
 */
import React from 'react';

class Machine extends React.Component {
  constructor(){
    super();
    this.state = {
      data: [
        {id: 0, nom: "Machine 1", isActive: false},
        {id: 1, nom: "Machine 2", isActive: true},
        {id: 2, nom: "Machine 3", isActive: false},
        ]
    }
    this.changeStatus = this.changeStatus.bind(this);
  }
  changeStatus(id) {
    if (this.state.data[id].isActive){
      this.state.data[id].isActive = false;
    }else {
      this.state.data[id].isActive = true;
    }
    this.forceUpdate();
  }
  
  
  render() {
    
    const mymachines = this.state.data.map((machine) =>
    <div>
      <p className = {machine.isActive ? "machine active" : "machine"}>
        {machine.nom}{machine.id}
        <button onClick={this.changeStatus.bind(this, machine.id)} className="btn">{machine.isActive ? "Désactiver" : "Activer"}</button>
      </p>
    </div>);

    // Dans tous les cas, afficher
    return (
      <div>
        <ul>{mymachines}
        </ul>
      </div>)
  }
}

// Le composant sera accessible avec le nom "Machine"
export default Machine;
