import React from "react";
import PropTypes from "prop-types";

function CourseList(props) {
  return (
    <div>
      <table className="table">
        <thead>
          <th>Title</th>
          <th>Author ID</th>
          <th>Category</th>
        </thead>
        <tbody>
          {props.courses.map(x => {
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

CourseList.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      authorId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired
    })
  ).isRequired
};

export default CourseList;
