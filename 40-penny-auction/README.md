* can we pass props between sibling components
* onSubmit
* controlled components (inputs?)

<ComponentOne />
<ComponentTwo />

<Amazon 
  state: { results: [] }
  performSearch(query) {
    fetch
    setState({results})
  }
/>
  <SearchBar performSearch={this.performSearch}/>
  <Results result={this.state.results}>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </Results>
</Amazon>
