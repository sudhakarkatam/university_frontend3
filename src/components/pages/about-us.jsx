import React from 'react';

const AboutUs = () => (
  <section className="aboutus-section px-4 py-8 max-w-4xl mx-auto">
    <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-blue-900">About Malla Reddy University (MRU)</h1>
    <img src="/ABOUT-MRU (2).png" alt="MRU Building" className="w-full h-auto rounded-lg mb-8" style={{maxHeight: '500px', objectFit: 'contain'}} />
    <div className="prose max-w-none text-lg text-gray-800">
      <p><strong>Malla Reddy University, Hyderabad (MRUH)</strong> is the only Private University under green field category established in the year 2020 as per Telangana State Private Universities Act No.13 of 2020 and G.O.Ms.No.14, Higher Education (UE) Department dt. 15.6.2020, approved by the Government of Telangana State. Our focus is to address the emerging needs of Industry and Society. Malla Reddy University is sponsored by Malla Reddy Educational Society (MRES), one of the units of Malla Reddy Group of Institutions.</p>
      <p>MRUH has a perspective plan to grow into a Center of Excellence through new initiatives by creating world class infrastructure, expanding international collaborations, developing innovative programs, establishing industrial tie-ups, recruiting well qualified and trained faculty, promoting talent, nurturing research and innovation, and fostering outreach activities with sustainable fund flow.</p>
      <p>The campus is spread over 100 acres of land with built-up space covering academic, administrative, and amenities blocks with state-of-the-art infrastructural facilities. It has a cosmopolitan atmosphere to attract a large number of students from all corners of the globe. The environment provides access to experienced teaching faculty who are well qualified with international exposure to nurture students' creative abilities for new innovations through knowledge partnerships. Our programs include new age technologies and innovative curriculum to educate our students to deal with the current developing world.</p>
      <p>The global standards are set in the field of research and publications, motivating us for relentless pursuit of academic excellence. The MOUs with various international universities are in vogue to provide for an exchange of students and faculty through academic and research immersion programs, encouraging international collaborations for the mutual benefit of the university and the aspirants. We expose our students to various national and international companies for the best in campus placements through internship programs.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-800">How MRUH is Different from Other Universities?</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>A New Age University with global engagement and strategic industry partnerships that offers unconventional courses to influence lifestyles, business, and governance.</li>
        <li>Adopts integrated learning as the order of the day by using digital education platforms for customized teaching pedagogies based on the ability of new age learners.</li>
        <li>Provision of access to global information, Open Education Resources (OERs), and Learning Management Systems (LMS) through digital initiatives.</li>
        <li>Prepares students for new career choices that resonate with the learner’s personality and interest based on peer influence, parent’s mindset, and explored facts and figures.</li>
        <li>Models novel academic programs in tune with the New Education Policy for Liberal Arts Education and Emerging Areas of Technical Education. MRUH conceived an Interdisciplinary School of Honor’s Program and Finishing Studies to enhance the employability of graduating students based on their learning abilities.</li>
        <li>Develops a sustainable eco-campus by adopting a management framework for conservation measures in terms of energy, environment, and water that creates an impact on national culture/policy.</li>
        <li>Encourages students to participate in innovation drive hackathons and fosters social responsibility through Unnat Bharat Abhiyan.</li>
      </ul>
      <p className="mt-6">For more information, visit the <a href="https://www.mallareddyuniversity.ac.in/university" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">official MRU University page</a>.</p>
      <div className="flex justify-center mt-8">
        <img src="/mru_logo.png" alt="MRU Logo" className="h-20 w-auto object-contain" />
      </div>
      <div className="mt-8 text-center text-gray-600 text-sm">
        <p>Maisammaguda, Dulapally, Hyderabad, Telangana 500100</p>
        <p>Phone: 94971-94971, 91778-78365</p>
        <p>Email: <a href="mailto:info@mallareddyuniversity.ac.in" className="text-blue-700 underline">info@mallareddyuniversity.ac.in</a>, <a href="mailto:admissions@mallareddyuniversity.ac.in" className="text-blue-700 underline">admissions@mallareddyuniversity.ac.in</a></p>
      </div>
    </div>
  </section>
);

export default AboutUs;
