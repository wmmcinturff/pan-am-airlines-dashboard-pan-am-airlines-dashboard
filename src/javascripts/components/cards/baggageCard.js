const baggageBuilder = (baggage) => {
  const domString = `<div class="card" style="width: 18rem;">
      <img src="${baggage.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Owner: ${baggage.owner}</h5>
        <div class="card-text">Destination: ${baggage.state}</div>
        <ul class="list-group list-group-flush">
    <li class="list-group-item">Color: ${baggage.color}</li>
  </ul>
      
    <div class="card-body"  id="${baggage.uid}">
      </div>
    </div>`;

  return domString;
};
export default { baggageBuilder };
