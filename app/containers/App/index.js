/**
 *
 * App.js
 *
 */
import React from 'react';

// On importe ici les composants qu'on veut afficher
import Machine from '../../components/Machine.js';
import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';
// On peut aussi importer du CSS de la meme facon.

import '../../css/styles.css';


export default function App() {
  return (
    // Un return doit retourner un seul élément du DOM
    // Si on veut afficher plusieurs éléments adjacents,
    // On devra donc les encapsuler dans une DIV parente.
    <div className="machine">
      <Header />
        <Machine number ="1" isActive="yes" title="voila"/>
      <Footer/>
    </div>
  );
}
