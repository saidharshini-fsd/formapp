import React from 'react';
import { useFormik } from 'formik';

const MyForm = () => {
  const initialValues = {
    name: '',
    email: '',
    country: '',
    maritalStatus: [],
    gender: [],
    favoriteFood: [],
    dob: '',
    message: '',
  };

  const onSubmit = (values, { resetForm }) => {
    setTableData((prevTableData) => [...prevTableData, values]);
    resetForm(initialValues);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate: (values) => {
      const errors = {};

      if (!values.name) {
        errors.name = 'Required';
      }

      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      if (!values.country) {
        errors.country = 'Required';
      }

      if (!values.dob) {
        errors.dob = 'Required';
      }

      return errors;
    },
  });

  const [tableData, setTableData] = React.useState([]);

  const editRow = (index) => {
    const editedData = tableData[index];
    setTableData((prevTableData) => {
      const newData = [...prevTableData];
      newData.splice(index, 1);
      return newData;
    });
    formik.setValues(editedData);
  };

  const deleteRow = (index) => {
    setTableData((prevTableData) => {
      const newData = [...prevTableData];
      newData.splice(index, 1);
      return newData;
    });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                className={`form-control ${formik.touched.name && formik.errors.name ? 'is-invalid' : ''}`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                required
              />
              {formik.touched.name && formik.errors.name && (
                <div className="invalid-feedback">{formik.errors.name}</div>
              )}

              <br />

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                required
              />
              {formik.touched.email && formik.errors.email && (
                <div className="invalid-feedback">{formik.errors.email}</div>
              )}

              <br />

              <label htmlFor="country">Select a Country:</label>
              <select
                id="country"
                name="country"
                className={`form-control ${formik.touched.country && formik.errors.country ? 'is-invalid' : ''}`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.country}
                required
              >
                <option value="">Select</option>
                <option value="usa">USA</option>
                <option value="canada">Canada</option>
                {/* Add more countries as needed */}
              </select>
              {formik.touched.country && formik.errors.country && (
                <div className="invalid-feedback">{formik.errors.country}</div>
              )}

              <br />

              <label htmlFor="maritalStatus">Marital Status:</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="single"
                  name="maritalStatus"
                  value="single"
                  checked={formik.values.maritalStatus.includes('single')}
                  onChange={formik.handleChange}
                />
                <label className="form-check-label" htmlFor="single">Single</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="married"
                  name="maritalStatus"
                  value="married"
                  checked={formik.values.maritalStatus.includes('married')}
                  onChange={formik.handleChange}
                />
                <label className="form-check-label" htmlFor="married">Married</label>
              </div>

              <br />

              <label htmlFor="gender">Gender:</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="male"
                  name="gender"
                  value="male"
                  checked={formik.values.gender.includes('male')}
                  onChange={formik.handleChange}
                />
                <label className="form-check-label" htmlFor="male">Male</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="female"
                  name="gender"
                  value="female"
                  checked={formik.values.gender.includes('female')}
                  onChange={formik.handleChange}
                />
                <label className="form-check-label" htmlFor="female">Female</label>
              </div>

              <br />

              <label htmlFor="favoriteFood">Choose your favorite food:</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="burger"
                  name="favoriteFood"
                  value="burger"
                  checked={formik.values.favoriteFood.includes('burger')}
                  onChange={formik.handleChange}
                />
                <label className="form-check-label" htmlFor="burger">Burger</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="pizza"
                  name="favoriteFood"
                  value="pizza"
                  checked={formik.values.favoriteFood.includes('pizza')}
                  onChange={formik.handleChange}
                />
                <label className="form-check-label" htmlFor="pizza">Pizza</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="taco"
                  name="favoriteFood"
                  value="taco"
                  checked={formik.values.favoriteFood.includes('taco')}
                  onChange={formik.handleChange}
                />
                <label className="form-check-label" htmlFor="taco">Taco</label>
              </div>

              <br />

              <label htmlFor="dob">Date of Birth:</label>
              <input
                type="date"
                id="dob"
                name="dob"
                className={`form-control ${formik.touched.dob && formik.errors.dob ? 'is-invalid' : ''}`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.dob}
                required
              />
              {formik.touched.dob && formik.errors.dob && (
                <div className="invalid-feedback">{formik.errors.dob}</div>
              )}

              <br />

              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                rows="4"
                onChange={formik.handleChange}
                value={formik.values.message}
              ></textarea>

              <br />

              <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </div>
          </form>
        </div>

        <div className="col-md-6">
          <table className="table table-bordered table-striped mt-4">
            <thead className="thead-dark">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Country</th>
                <th>Marital Status</th>
                <th>Gender</th>
                <th>Favorite Food</th>
                <th>Date of Birth</th>
                <th>Message</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => (
                <tr key={index}>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.country}</td>
                  <td>{data.maritalStatus.join(', ')}</td>
                  <td>{data.gender.join(', ')}</td>
                  <td>{data.favoriteFood.join(', ')}</td>
                  <td>{data.dob}</td>
                  <td>{data.message}</td>
                  <td>
                    <button className="btn btn-warning btn-sm" onClick={() => editRow(index)}>Edit</button>
                    <button className="btn btn-danger btn-sm" onClick={() => deleteRow(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyForm;
