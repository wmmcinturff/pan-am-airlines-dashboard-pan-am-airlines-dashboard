const crewBuilder = (crewObj) => {
  const domString = `<div class="card" style="width: 18rem;">
  <div class="card-body">
   <h5 class="card-title">PanAm Flight Crew</h5> 
  </div>
    
   <ul class="list-group list-group-flush">
      <li class="list-group-item">Name: ${crewObj.name}</li>
      <li class="list-group-item">Role: ${crewObj.role}</li>
   </ul>
   
   <div class = "card-body" id="${crewObj.uid}">
   </div>
   </div>`;

  return domString;
};

export default { crewBuilder };
