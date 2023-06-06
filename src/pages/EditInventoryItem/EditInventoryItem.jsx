// Sass
import "./EditInventoryItem.scss";
import BackArrow from "../../assets/icons/arrow_back-24px.svg";

function EditInventoryList() {
  return (
    <div className="edit-inventory">
      <div className="edit-inventory__header">
        <img
          src={BackArrow}
          alt="Back Arrow"
          className="edit-inventory__back-arrow"
        />
        <p className="edit-inventory__title">Edit Inventory Item</p>
      </div>

      <form className="edit-inventory__form">
        <div className="edit-inventory__details edit-inventory__details--border">
          <p className="edit-inventory__details-title">Item Details</p>
          <label className="edit-inventory__label">
            Item Name
            <input type="text" className="edit-inventory__input" />
          </label>
          <label className="edit-inventory__label">
            Description
            <textarea className="edit-inventory__input edit-inventory__input--description" />
          </label>
          <label className="edit-inventory__label">
            Category
            <select
              type="text"
              name="category"
              className="edit-inventory__input"
            >
              <option value="choose">Category</option>
            </select>
          </label>
        </div>
        <div className="edit-inventory__details">
          <p className="edit-inventory__details-title">Item Details</p>
          <label className="edit-inventory__label">
            Status
            <div className="edit-inventory__radio-container">
              <div className="edit-inventory__radio-block">
                <input
                  type="radio"
                  name="status"
                  value="instock"
                  className="edit-inventory__radio"
                />
                <label for="instock" className="edit-inventory__instock-label">
                  In stock
                </label>
              </div>
              <div className="edit-inventory__radio-block">
                <input
                  type="radio"
                  name="status"
                  value="outstock"
                  className="edit-inventory__radio"
                />
                <label for="outstock">Out of stock</label>
              </div>
            </div>
          </label>
          <label className="edit-inventory__label">
            Warehouse
            <select
              type="text"
              name="warehouse"
              className="edit-inventory__input"
            >
              <option value="choose">Warehouse</option>
            </select>
          </label>
        </div>
      </form>
      <div className="edit-inventory__footer">
        <button className="edit-inventory__button edit-inventory__button--cancel">
          Cancel
        </button>
        <button className="edit-inventory__button edit-inventory__button--save">
          Save
        </button>
      </div>
    </div>
  );
}

export default EditInventoryList;
