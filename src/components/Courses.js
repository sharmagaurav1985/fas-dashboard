import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then(_courses => setCourses(_courses));
  }, []);

  return (
    <div>
      <table className="table">
        <thead>
          <th>Title</th>
          <th>Author ID</th>
          <th>Category</th>
        </thead>
        <tbody>
          {courses.map(x => {
            return (
              <tr>
                <td>{x.title}</td>
                <td>{x.authorId}</td>
                <td>{x.category}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Courses;
