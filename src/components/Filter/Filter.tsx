import './Filter.scss'
const Filter = () => {
  return (
      <div>
            <form className="dropdown-menu filter-form">
            <div className="form-group d-flex flex-column">
            <label className="control-label">Organization</label>
                  <select name="organization" id="organization form-control" required>
                    <option value="volvo">select</option>
                    <option value="food">Food</option>
                    <option value="fashion">Fashion</option>
                    <option value="tech">Tech</option>
                </select>
            </div>

            <div className="form-group">
            <label className="control-label">Username</label>
            <input
                type="text"
                className="form-control"
                placeholder='User'
                name="username"
                required
            />
            </div>

            <div className="form-group">
            <label className="control-label">Email</label>
            <input
                type="email"
                className="form-control"
                placeholder='Email'
                name="email"
                required
            />
            </div>

            <div className="form-group">
            <label className="control-label">Date</label>
            <input
                type="date"
                className="form-control"
                placeholder='Date'
                // value='Date'
                name="dateCreatedFrom"
                required
            />
            </div>
            <div className="form-group">
            <label className="control-label">Phone Number</label>
            <input
                type="tel"
                className="date-picker form-control"
                name="phoneNumber"
                placeholder='Phone Number'
                required
            />
            </div>
            <div className="form-group d-flex flex-column">
            <label className="control-label">Status</label>
                  <select name="status" id="status" required>
                    <option value="select">select</option>
                      
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                    <option value="pending">Pending</option>
                    <option value="blacklisted">Blacklisted</option>
                </select>
            </div>
            <div className="d-flex justify-content-around row filter-button-container">
            <button
                className="btn reset-button col-5"
                type="button"
            >
                Reset
            </button>
            <button
                type="submit"
                className="btn filter-button col-5"
            >
                Filter
            </button>
            </div>
            </form>
    </div>
  )
}

export default Filter