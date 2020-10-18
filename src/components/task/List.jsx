import React from "react";

function List({ items = {}, editMode, onEdit, onDelete }) {
  return (
    <div className="container">
      {items.length < 1 ? (
        <p>Data is Empty</p>
      ) : (
        items.map((item, index) => (
          <div className="card mb-2" key={index}>
            <div className="card-body">
              <h5>{item.selectedItem.provider}</h5>
              <h5>{item.selectedItem.quota}</h5>
              <h5>{item.selectedItem.price}</h5>
              <h5>{item.selectedItem.stock}</h5>
              <p>{item.selectedItem.info}</p>

              <button
                className="btn btn-info btn-sm mr-1"
                disabled={editMode}
                onClick={() => onEdit(index)}
              >
                Edit
              </button>

              <button
                className="btn btn-danger mr-1 btn-sm"
                disabled={editMode}
                onClick={() => onDelete(item.selectedItem.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default List;
