function Durak({handleChange, stations}) {
    return (
      <div className="Durak">
      {stations.map((station, key) =>(
        <form>
            <input type="text" placeholder="Durak Adı" onChange={e => handleChange(e.target.value, 'name', key)} />
            <input type="text" placeholder="Enlem" onChange={e => handleChange(e.target.value, 'en', key)} />
            <input type="text" placeholder="Boylam" onChange={e => handleChange(e.target.value, 'boy', key)} />
        </form>
      ))}
        
      </div>
    );
}

export default Durak;
