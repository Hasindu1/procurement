import React, {useState, useEffect} from "react";
import db from '../../firebase'
const Contact = () => {
    const initailFieldValues = {
        fullname: '',
        mobile: '',
        email: ''
    }

    var [values, setValues] = useState(initailFieldValues);

    const handleChange = e => {
        var { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        db.child('contacts').push(
            values,
            err => {
                if (err) {
                    console.log(err);
                }else {
                    setValues({...initailFieldValues});
                }
            }
        );
    }

  return (
    <div className="content-wrapper">
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            {/* left column */}
            <div className="col-md-12">
              {/* general form elements */}
              <div className="card card-primary">
                <div className="card-header">
                  <h3 className="card-title">Contact</h3>
                </div>
                {/* /.card-header */}
                {/* form start */}
                <form role="form" onSubmit={handleSubmit} autoComplete="off">
                  <div className="card-body">
                    <div className="form-group">
                      <label>Full name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter full name"
                        name="fullname"
                        value={values.fullname}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Mobile</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Mobile"
                        name="mobile"
                        value={values.mobile}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  {/* /.card-body */}
                  <div className="card-footer">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              {/* /.card */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
