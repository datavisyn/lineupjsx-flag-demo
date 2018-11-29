import * as React from 'react';
import './App.css';
import Client from './client';
import LineUp, { LineUpStringColumnDesc } from 'lineupjsx';
import FlagRenderer from './FlagRenderer';

class App extends React.Component<any, { data: any[] }> {
  private readonly client: Client;

  constructor(props: any) {
    super(props);
    this.state = { data: [] };
    this.client = new Client('https://restcountries.eu/rest/v2/all');
    this.client.loadData().then((res) => res.json()).then((data) => this.setState({ data }));
  }

  public render() {
    const data = this.state.data;

    return (
      <div className="App">
        <header className="App-header">
          <h1>Lineupjsx Flags</h1>
        </header>
        {data ? <LineUp data={data} renderers={{ flag: new FlagRenderer() }} >
          <LineUpStringColumnDesc column="name" />
          <LineUpStringColumnDesc column="flag" renderer="flag" />
        </LineUp> : null}
      </div>
    );
  }
}

export default App;
