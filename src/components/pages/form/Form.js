import React, { useState } from "react";
import "./GrievanceForm.css";
import { db } from "../../../firebase";
import toast, { Toaster } from "react-hot-toast";

const Form = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [studentNumber, setstudentNumber] = useState("");
  const [contactNumber, setcontactNumber] = useState("");
  const [currentCollege, setcurrentCollege] = useState("");
  const [currentYear, setcurrentYear] = useState("");
  const [classConcern, setclassConcern] = useState("");
  const [natureConcern, setnatureConcern] = useState("");
  const [aboutConcern, setaboutConcern] = useState("");
  const [concern, setConcern] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    if (firstName== "" && lastName=="" && email == "" && studentNumber == "" && contactNumber == ""  && currentCollege == "" && currentYear== "" && classConcern == "" && natureConcern == "" && aboutConcern == "" && concern == "") console.log("missing field");
    else {
    e.preventDefault();
    setLoader(true)
    
    // db.collection("studentNumber")
    // .add({
    //   StudentNumber: studentNumber
    // })
    db.collection("forms")
      .add({
        firstName: firstName,
        lastName: lastName,
        Email: email,
        StudentNumber: studentNumber,
        ContactNumber: contactNumber,
        CurrentCollege: currentCollege,
        CurrentYear: currentYear,
        ClassificationConcern: classConcern,
        NatureConcern: natureConcern,
        AboutConcern: aboutConcern,
        Concern: concern,
      })
      .then(() => {
        toast.success("Grievance Form Submitted");
        setLoader(false)
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setfirstName("");
    setlastName("");
    setEmail("");
    setstudentNumber("");
    setcontactNumber("");
    setcurrentCollege("");
    setcurrentYear("");
    setclassConcern("");
    setnatureConcern("");
    setaboutConcern("");
    setConcern("");
  }
};

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Toaster />

      <div className="placeholder_wrapper">
        <h2 className="studentProfile">Student Profile</h2>

        <div className="desc1">
          <p>
            The name and photo associated with your Google account will be
            recorded when you upload files and submit this form. Your email is
            not part of your response.
          </p>
        </div>

        <div className="forInput">
          <label>Student Number</label>
          <p className="nameFormat">
            <small>Format: XXXX-XXXXX </small>
          </p>
          <input
            placeholder="Student Number"
            value={studentNumber}
            onChange={(e) => setstudentNumber(e.target.value)}

            type="text"
            pattern="^[0-9\d-]+$"
            required 
          />
        </div>
        <div className="forInput">
          <label>Email</label>
          <p className="nameFormat">
            <small>Format: ____@plm.edu.ph</small>
          </p>
          <input
            placeholder="Email"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            pattern="^.*@plm.edu.ph$"
            required
          />
        </div>


        <div className="forInput">
          <label>First Name</label>
          <p className="nameFormat">
            <small>Input your first name</small>
          </p>
          <input
            placeholder="Name"
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
            required
          />
        </div>

        <div className="forInput">
          <label>Last Name</label>
          <p className="nameFormat">
            <small>Input your last name</small>
          </p>
          <input
            placeholder="Name"
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
            required
          />
        </div>



        <div className="forInput">
          <label>Contact Number</label>
          <p className="nameFormat">
            <small>Format: 09XX XXX XXXX</small>
          </p>
          <input
            placeholder="Contact Number"
            value={contactNumber}
            onChange={(e) => setcontactNumber(e.target.value)}
            type="text"
            pattern="^[0-9\d-\s]+$"
            required 

          />
        </div>

        <div className="forInput">
          <label>Current College</label>

          <select
            placeholder="Current College"
            value={currentCollege}
            onChange={(e) => setcurrentCollege(e.target.value)}
            required
             >
            <option value="">What College are you currently in?</option>
            <option value="College of Architecture and Urban Planning">
              College of Architecture and Urban Planning
            </option>
            <option value="College of Education">College of Education</option>
            <option selected value="College of Engineering and Technology">
              College of Engineering and Technology
            </option>
            <option value="College of Humanities, Arts, and Social Sciences">
              College of Humanities, Arts, and Social Sciences
            </option>
            <option value="College of Law">College of Law</option>
            <option value="College of Medicine">College of Medicine</option>
            <option value="College of Nursing">College of Nursing</option>
            <option value="College of College of Physical Therapy">
              College of College of Physical Therapy
            </option>
            <option value="College of Science">College of Science</option>
            <option value="PLM Business School">PLM Business School</option>
            <option value="PLM School of Government">
              PLM School of Government
            </option>
          </select>
        </div>

        <div className="forInput">
          <label>Current Year Level</label>
          <select
            placeholder="Current Year"
            value={currentYear}
            onChange={(e) => setcurrentYear(e.target.value)}
            required
             >
            <option value="">What Year Level are you currently in?</option>
            <option value="1st Year">1st Year</option>
            <option value="2nd Year">2nd Year</option>
            <option value="3rd Year">3rd Year</option>
            <option value="4th Year">4th Year</option>
            <option value="5th Year">5th Year</option>
            <option value="6th Year">6th Year</option>
            <option value="7th Year">7th Year</option>
          </select>
        </div>

    

        <div className="forInput">
          <label>Classification of Concerns</label>
          <select
            placeholder=""
            value={classConcern}
            // value={ !!classConcern ? {classConcern} : toast.error("Please Identify Classification of Concern")}
            onChange={(e) => setclassConcern(e.target.value)}
            required
             >
            <option value="">Select the classification of your concern</option>
            <option value="Grievances">Grievances</option>
            <option value="Queries">Queries</option>
            <option value="Suggestions">Suggestions</option>
          </select>
        </div>

        <div className="forInput">
          <label>Nature of Concerns</label>
          <select
            placeholder=""
            value={natureConcern}
            onChange={(e) => setnatureConcern(e.target.value)}
            required
             >
            <option value="">Select the nature of your concerns</option>
            <option value="Academic">Academic</option>
            <option value="Non-Academic">Non-Academic</option>
          </select>
        </div>
      </div>

      <div className="forInput">
        <label>Give a short narrative of your concern</label>
        <p className="nameFormat">
            <small>Minimum of 50 characters</small>
          </p>
        <textarea
          placeholder="Message"
          value={concern}
          onChange={(e) => setConcern(e.target.value)}
          minlength="50"
          required>
          </textarea>
          
      </div>

      <div className="forInput">
        <button
          type="submit"
          style={{ background: loader ? "#ccc" : "#F4E12F" }}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
