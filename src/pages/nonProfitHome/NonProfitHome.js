const NonProfitHome = ({ selectedOrg }) => {
  console.log(selectedOrg);
  return (
    <main>
      <div>
        <h3>{selectedOrg.name}</h3>
        <p>{selectedOrg.description}</p>
        <p>{selectedOrg.impact}</p>
        <img
          className="image"
          src={`./img/${selectedOrg.img}`}
          alt={selectedOrg.name}
        />
        <p>{selectedOrg.categories}</p>
        <p>{selectedOrg.continents}</p>
        <p>{selectedOrg.primaryColor}</p>
      </div>
    </main>
  );
};
export default NonProfitHome;
