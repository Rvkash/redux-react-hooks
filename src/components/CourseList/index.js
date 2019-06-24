import React from "react";
import { useSelector, useDispatch } from "react-redux";

function AddCourseAction(title) {
    return { type: 'ADD_COURSE', title: 'redux'}
}

export default function CourseList() {
    const qty = 2;


  const courses = useSelector(
      state => state.data.slice(0, qty),
      [qty]  
  );    
      
  const dispatch = useDispatch();

  function addCourse() {
      dispatch(AddCourseAction('Redux'))
  }

  return (
      <>
    <ul>
      {courses.map(course => (
        <li key={courses}>{course}</li>
      ))}
    </ul>
    <button type="button" onClick={addCourse}>
        Adicionar Curso
    </button>
    </>
  );
}
