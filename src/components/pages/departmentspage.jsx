import { departments } from './departments';
import { Link } from 'react-router-dom';

const DepartmentsPage = () => {
  return (
    <div className="departments-page">
      <h2>Our Departments</h2>
      <ul>
        {departments.map(dept => (
          <li key={dept.id}>
            <Link to={`/departments/${dept.id}`}>{dept.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DepartmentsPage;
