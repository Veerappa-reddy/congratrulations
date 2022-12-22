const element = (
  <div className="background-container">
    <h1 className="heading">Congratulations</h1>
    <div className="congrats-card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="profile"
      />
      <h1 className="name">Kiran V</h1>
      <p className="college">Vishnu Instiute of Technology and Sciences</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="watch"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
