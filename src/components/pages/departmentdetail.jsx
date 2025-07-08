import { useParams } from 'react-router-dom';
import { departments } from './departments';
import { useState } from 'react';

const DepartmentDetail = () => {
  const { id } = useParams();
  const department = departments.find(d => d.id === id);
  const [activeTab, setActiveTab] = useState(0);

  if (!department) return <h2>Department not found</h2>;

  return (
    <div className="dept-page">
      <h1>{department.name}</h1>
      <p>{department.about}</p>
      <h3>Vision</h3>
      <p>{department.vision}</p>
      <h3>Mission</h3>
      <p>{department.mission}</p>

      <div className="tab-buttons">
        {department.tabs.map((tab, index) => (
          <button
            key={index}
            className={activeTab === index ? 'active-tab' : ''}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="tab-content">
        <h4>{department.tabs[activeTab].title}</h4>
        <p>{department.tabs[activeTab].content}</p>
      </div>
    </div>
  );
};

export default DepartmentDetail;
