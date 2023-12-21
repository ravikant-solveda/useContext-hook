import React from "react";

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <table style={{border: '1px solid black'}}>
        <tr>
          <th>Name</th>
          <th>Contact Details</th>
        </tr>
        <tr>
          <th>Mobile No.</th>
          <td>+91 99387000</td>
        </tr>
        <th>Office</th>
        <td>
          <ul>
            <li>Noida</li>
            <li>Near Metro station 59</li>
            <li>234890</li>
          </ul>
        </td>
        <tr>
          <th>parmanent Add.</th>
          <td>
            <ul>
              <li>Vill- abc</li>
              <li>Post - cmd</li>
              <li>District - azm</li>
              <li>state - UP</li>
              <li>Pin Code - 273822</li>
            </ul>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Contact;
