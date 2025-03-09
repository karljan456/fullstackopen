// Course element
const Course = ({ courses }) => {
  return (
    <div>
      <Header course={"Web Development Curriculum"} />
      <Content courses={courses} />
    </div>
  );
};

// Header component 
const Header = (props) => <h1>{props.course}</h1>;

// Content component to generate course name and its parts
const Content = ({ courses }) => (
  <div>
    {courses.map((course) => (
      <div key={course.id}>
        <h2> {course.name} </h2>
        <Part parts={course.parts} />
      </div>
    ))}
  </div>
);

// Part component to generate each part and Total amount of exercises
const Part = ({ parts }) => (
  <div>
    {parts.map((part) => (
      <p key={part.id}>
        {part.name} {part.exercises}
      </p>
    ))}
    <Total parts={parts} />
  </div>
);

// Total component to calcualte the sum of each parts exercises
const Total = ({ parts }) => (
  <p>
    <b>
      Number of exercises{" "}
      {parts.reduce(
        (previousvalue, currentValue) => previousvalue + currentValue.exercises,
        0
      )}
    </b>
  </p>
);
export default Course;
