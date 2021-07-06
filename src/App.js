import React, { useState, useEffect } from 'react';
import './App.css';
import { API } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listFigurines } from './graphql/queries';
import { createFigurine as createFigurineMutation, deleteFigurine as deleteFigurineMutation } from './graphql/mutations';

const initialFormState = { name: '', description: '', submittedBy: '', submittedOn: ''}

function App() {
  const [Figurines, setFigurines] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchFigurines();
  }, []);

  async function fetchFigurines() {
    const apiData = await API.graphql({ query: listFigurines });
    setFigurines(apiData.data.listFigurines.items);
  }

  async function createFigurine() {
    if (!formData.name || !formData.description || !formData.submittedOn || !formData.submittedBy) return;
    await API.graphql({ query: createFigurineMutation, variables: { input: formData } });
    setFigurines([ ...Figurines, formData ]);
    setFormData(initialFormState);
  }

  async function deleteFigurine({ id }) {
    const newFigurinesArray = Figurines.filter(Figurine => Figurine.id !== id);
    setFigurines(newFigurinesArray);
    await API.graphql({ query: deleteFigurineMutation, variables: { input: { id } }});
  }

  return (
    <div className="App">
      <h1>My Figurines App</h1>
      <input
        onChange={e => setFormData({ ...formData, 'name': e.target.value})}
        placeholder="Figurine name"
        value={formData.name}
      />
      <input
        onChange={e => setFormData({ ...formData, 'description': e.target.value})}
        placeholder="Figurine description"
        value={formData.description}
      />

<input
        onChange={e => setFormData({ ...formData, 'submittedOn': e.target.value})}
        placeholder="Figurine submittedOn"
        value={formData.submittedOn}
      />
      <input
        onChange={e => setFormData({ ...formData, 'submittedBy': e.target.value})}
        placeholder="Figurine submittedBy"
        value={formData.submittedBy}
      />
      <button onClick={createFigurine}>Create Figurine</button>
      <div style={{marginBottom: 30}}>
        {
          Figurines.map(Figurine => (
            <div key={Figurine.id || Figurine.name}>
              <h2>{Figurine.name}</h2>
              <p>{Figurine.description}</p>
              <button onClick={() => deleteFigurine(Figurine)}>Delete Figurine</button>
            </div>
          ))
        }
      </div>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);