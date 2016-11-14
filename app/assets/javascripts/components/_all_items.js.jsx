var AllItems = React.createClass({
  handleDelete(id) {
    this.props.handleDelete(id);
  },

  render() {
    var items = this.props.items.map((item) => {
      return (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <h3>{item.description}</h3>
            <button onClick={this.handleDelete.bind(this, item.id)}>Delete</button>
          </div>
      )
    });

    return (
        <div>
          {items}
        </div>
    )
  }
});
