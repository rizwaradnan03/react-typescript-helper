import React, { useState } from "react";

interface Person {
  nama: string;
  umur: string;
}

const DataBaseSimulator: React.FC = () => {
  const [database, setDatabase] = useState<Person[]>([]);

  const [nama, setNama] = useState<string>("");
  const [umur, setUmur] = useState<string>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    {
      nama.length && umur.length !== 0
        ? setDatabase([...database, { nama: nama, umur: umur }])
        : alert("Nama / Umur Wajib Diisi!");
    }
  };

  const handleRenderTable = () => {
    return (
      <>{database.length !== 0 ? <TableRender database={database} /> : []}</>
    );
  };

  return (
    <>
      <div className="container mt-5">
        <div className="card">
          <h2 className="text-center">Database Simulator</h2>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Nama</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setNama(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Umur</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setUmur(e.target.value)}
                  required
                />
              </div>
              <br />
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Tambah Data
              </button>
            </form>
          </div>
        </div>
        <br />
        <br />
        {handleRenderTable()}
      </div>
    </>
  );
};

export default DataBaseSimulator;

const TableRender: React.FC<{ database: Person[] }> = ({ database }) => {
  return (
    <>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nama</th>
            <th scope="col">Umur</th>
          </tr>
        </thead>
        <tbody>
          {database.map((item, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{item.nama}</td>
              <td>{item.umur}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
