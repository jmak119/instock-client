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
        <div className="edit-inventory__details">
          <p className="edit-inventory__details-title">Item Details</p>
          <label className="edit-inventory__label">
            Item Name
            <input type="text" className="edit-inventory__input" />
          </label>
          <label className="edit-inventory__label">
            Description
            <textarea className="edit-inventory__input" />
          </label>
          <label className="edit-inventory__label">
            Category
            <input type="text" className="edit-inventory__input" />
          </label>
        </div>
        <div className="edit-inventory__details">
          <p className="edit-inventory__details-title">Item Details</p>
          <label className="edit-inventory__label">
            Status
            <input type="text" className="edit-inventory__input" />
          </label>
          <label className="edit-inventory__label">
            Warehouse
            <input type="text" className="edit-inventory__input" />
          </label>
        </div>
      </form>
      <div className="edit-inventory__footer">
        <button className="edit-inventory__save">Save</button>
        <button className="edit-inventory__cancel">Cancel</button>
      </div>
    </div>
  );
}

export default EditInventoryList;
