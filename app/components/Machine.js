/**
 *
 * App.js
 *
 */
import React from 'react';

class Machine extends React.Component {
  constructor(props){
    super(props);
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
    this.forceUptate();
  }
  
  
  render() {
    
    const mymachines = this.state.data.map((machine) =>
    <div>
      <li className = {machine.isActive ? "machine active" : "machine"}>
        {machine.nom}
        <button onClick={this.changeStatus.bind(this, machine.id)}>{machine.isActive ? "Désactiver" : "Activer"}</button>
      </li>
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
