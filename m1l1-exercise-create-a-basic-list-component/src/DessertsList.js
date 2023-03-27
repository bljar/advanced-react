function DessertsList(props) {
  // Implement the component here.
  return (
    <div>
      <ul>{ props.data
        .filter(desert => desert.calories < 500)
        .sort((a, b) => a.calories - b.calories)
        .map(filteredDesert => (
          <li>{filteredDesert.name} - {filteredDesert.calories} cal.</li>
        ))}
      </ul>
    </div>
  );
}

export default DessertsList;
