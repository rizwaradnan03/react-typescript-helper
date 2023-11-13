import React, { useState } from "react";

const ReversedStringPage: React.FC = () => {
    const [reversedText, setReversedText] = useState<string>('')

    const handleReverseText = (text: string) => {
        const reversedString = text.split('').reverse().join('')
        setReversedText(reversedString)
    }

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card" style={{ width: '50%' }}>
        <div className="card-body">
          <h2 className="text-center">Reversed String</h2>
          <hr />
          <input type="text" className="form-control" placeholder="Masukkan Text Disini" onChange={(e) => handleReverseText(e.target.value)} />
          <br />
          <label>Hasil</label>
          <input type="text" className="form-control" value={reversedText} disabled />
          <br />
          <a href="/" className="btn btn-secondary">Kembali</a>
        </div>
      </div>
    </div>
  );
};

export default ReversedStringPage;
