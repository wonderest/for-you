import React from "react";

function Form({ item = {}, editMode, onCreate, onChange, onUpdate }) {
  const onSubmit = (e) => {
    e.preventDefault();
    editMode ? onUpdate() : onCreate();
  };

  return (
    <div className="col-md-12">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Provider</label>
          <input
            type="text"
            className="form-control mb-3"
            value={item.provider}
            onChange={(e) => onChange("provider", e.target.value)}
          />
          <label>Kuota</label>
          <input
            type="text"
            className="form-control mb-3"
            value={item.quota}
            onChange={(e) => onChange("quota", e.target.value)}
          />
          <label>Harga</label>
          <input
            type="text"
            className="form-control mb-3"
            value={item.price}
            onChange={(e) => onChange("price", e.target.value)}
          />
          <label>Stok</label>
          <input
            type="text"
            className="form-control mb-3"
            value={item.stock}
            onChange={(e) => onChange("stock", e.target.value)}
          />

          <label>Info</label>
          <textarea
            className="form-control  mb-3"
            value={item.info}
            onChange={(e) => onChange("info", e.target.value)}
          />

          <button
            type="submit"
            className="btn btn-block btn-success btn-sm mb-3"
          >
            {editMode ? "Update" : "Create"}
          </button>
        </div>
      </form>
      <br />
    </div>
  );
}

export default Form;
