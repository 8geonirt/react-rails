var Body = React.createClass({
  getInitialState() {
    return { items: [] }
  },

  componentDidMount() {
    $.getJSON('api/v1/items.json', (response) => { this.setState({ items: response }) });
  },

  updateItems(item) {
    var items = this.state.items.filter((i) => { return i.id != item.id });
    items.push(item);
    this.setState({ items: items });
  },

  handleSubmit(item) {
    var newState = this.state.items.concat(item);
    this.setState({ items: newState });
  },

  handleUpdate(item) {
    $.ajax({
      url: `/api/v1/items/${item.id}`,
      type: 'PUT',
      data: {item: item},
      success: () => {
        this.updateItems(item);
      }
    });
  },

  handleDelete(id) {
    $.ajax({
      url: `/api/v1/items/${id}`,
      type: 'DELETE',
      success:() => {
        this.removeItemClient(id);
      }
    });
  },

  removeItemClient(id) {
    var newItems = this.state.items.filter((item) => {
      return item.id != id;
    });

    this.setState({ items: newItems });
  },

  render() {
    return (
        <div>
          <NewItems handleSubmit={this.handleSubmit}/>
          <AllItems items={this.state.items} handleDelete={this.handleDelete} onUpdate={this.handleUpdate}/>
        </div>
    )
  }
});
