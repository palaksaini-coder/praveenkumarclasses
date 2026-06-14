import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';

const PraveenKumarClasses = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProgram, setSelectedProgram] = useState('all');
  const [showPassword, setShowPassword] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupName, setSignupName] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [transactions, setTransactions] = useState([]);

  // All subjects data
  const subjectsData = {
    'B.Com': [
      { id: 'bcom1', name: 'Business Organisation', desc: 'Studies the formation and structure of business enterprises. Explains ownership forms, management functions, and business operations.' },
      { id: 'bcom2', name: 'Business Statistics', desc: 'Introduces statistical techniques used in business decision-making. Covers data collection, analysis, interpretation, and forecasting.' },
      { id: 'bcom3', name: 'Business Communication', desc: 'Develops effective written and verbal communication skills. Focuses on professional correspondence and workplace interactions.' },
      { id: 'bcom4', name: 'Introduction to Computer Application', desc: 'Provides basic knowledge of computer systems and software. Covers applications commonly used in business environments.' },
      { id: 'bcom5', name: 'Business Management', desc: 'Examines principles and functions of management. Focuses on planning, organizing, staffing, directing, and controlling.' },
      { id: 'bcom6', name: 'Financial Accounting', desc: 'Records and reports financial transactions of businesses. Helps prepare financial statements and analyze performance.' },
      { id: 'bcom7', name: 'Computerised Accounting', desc: 'Introduces accounting software and digital bookkeeping methods. Focuses on maintaining financial records electronically.' },
      { id: 'bcom8', name: 'Essentials of E-Commerce', desc: 'Explains online business models and electronic transactions. Covers digital payments, online marketing, and e-business operations.' },
      { id: 'bcom9', name: 'Business Economics', desc: 'Applies economic principles to business decisions. Examines demand, supply, pricing, and market behavior.' },
      { id: 'bcom10', name: 'Company Law', desc: 'Regulates the formation and management of companies. Covers corporate governance, shareholder rights, and legal compliance.' },
      { id: 'bcom11', name: 'Cost Accounting', desc: 'Analyzes costs associated with business operations. Helps in budgeting, cost control, and decision-making.' },
      { id: 'bcom12', name: 'Business Regulatory Framework', desc: 'Studies laws governing business activities. Explains legal obligations and compliance requirements.' },
      { id: 'bcom13', name: 'Inventory Management', desc: 'Focuses on efficient management of stock and materials. Helps minimize costs while maintaining adequate supply levels.' },
      { id: 'bcom14', name: 'Income Tax Law and Accounts', desc: 'Examines tax laws applicable to individuals and businesses. Covers tax computation, filing, and compliance procedures.' },
      { id: 'bcom15', name: 'Fundamentals of Marketing', desc: 'Introduces core marketing concepts and strategies. Focuses on consumer needs, products, pricing, and promotion.' },
      { id: 'bcom16', name: 'Digital Marketing', desc: 'Explores online marketing techniques and tools. Covers social media, search engines, and content marketing.' },
      { id: 'bcom17', name: 'Fundamentals of Entrepreneurship', desc: 'Develops knowledge of starting and managing businesses. Encourages innovation, leadership, and entrepreneurial thinking.' },
      { id: 'bcom18', name: 'Tourism and Travel Management', desc: 'Studies the tourism industry\'s operations and services. Focuses on travel planning, hospitality, and customer satisfaction.' },
      { id: 'bcom19', name: 'Corporate Accounting', desc: 'Deals with accounting practices of companies. Covers share capital, debentures, and corporate financial reporting.' },
      { id: 'bcom20', name: 'Goods and Services Tax (GST)', desc: 'Explains India\'s indirect taxation system. Covers GST registration, returns, compliance, and calculations.' },
      { id: 'bcom21', name: 'Business Finance', desc: 'Studies financial management and funding decisions. Focuses on investment, capital structure, and risk management.' },
      { id: 'bcom22', name: 'Principles and Practices of Insurance', desc: 'Examines insurance concepts and industry operations. Covers risk coverage, policy types, and claim procedures.' },
      { id: 'bcom23', name: 'Monetary Theory and Banking in India', desc: 'Studies money, banking systems, and monetary policy. Explains the role of financial institutions in the economy.' },
      { id: 'bcom24', name: 'Accounting for Managers', desc: 'Uses accounting information for managerial decision-making. Helps managers evaluate performance and plan strategies.' },
      { id: 'bcom25', name: 'Auditing', desc: 'Examines financial records for accuracy and compliance. Ensures transparency and reliability in financial reporting.' },
      { id: 'bcom26', name: 'Comprehensive Viva', desc: 'Assesses overall understanding of commerce subjects. Evaluates analytical, communication, and professional skills.' },
      { id: 'bcom27', name: 'Financial Institutions and Market', desc: 'Studies financial intermediaries and capital markets. Explains investment channels and market operations.' },
      { id: 'bcom28', name: 'Human Resource Management', desc: 'Focuses on managing employees effectively. Covers recruitment, training, performance, and employee relations.' },
      { id: 'bcom29', name: 'Business Ethics and Corporate Governance', desc: 'Promotes ethical conduct in business operations. Examines accountability, transparency, and responsible management.' }
    ],
    'M.Com': [
      { id: 'mcom1', name: 'Management Concepts and Organisational Behaviour', desc: 'Studies fundamental principles of management and leadership. Examines individual and group behaviour within organizations.' },
      { id: 'mcom2', name: 'Direct Taxes', desc: 'Focuses on taxes imposed directly on income and wealth. Covers income tax laws, assessment, and tax planning.' },
      { id: 'mcom3', name: 'Statistical Analysis', desc: 'Applies statistical methods to business and research problems. Helps interpret data and support decision-making.' },
      { id: 'mcom4', name: 'Research Methodology', desc: 'Introduces scientific methods used in academic and business research. Covers research design, data collection, and report writing.' },
      { id: 'mcom5', name: 'Research Methodology and Statistical Analysis', desc: 'Combines research techniques with statistical tools. Develops skills for conducting and analyzing research studies.' },
      { id: 'mcom6', name: 'Industrial Training / Research Project', desc: 'Provides practical exposure to real-world business environments. Enhances professional skills through field-based learning.' },
      { id: 'mcom7', name: 'Indirect Taxes and GST', desc: 'Examines taxation on goods and services. Covers GST laws, compliance procedures, and tax administration.' },
      { id: 'mcom8', name: 'Corporate Laws and Governance', desc: 'Studies legal regulations governing companies. Focuses on corporate responsibility, compliance, and governance practices.' },
      { id: 'mcom9', name: 'Corporate Financial Accounting', desc: 'Deals with accounting practices followed by companies. Covers preparation and analysis of corporate financial statements.' },
      { id: 'mcom10', name: 'Strategic Management & Business Policy', desc: 'Focuses on long-term organizational planning and decision-making. Helps develop strategies for achieving business objectives.' },
      { id: 'mcom11', name: 'Strategic Marketing', desc: 'Examines advanced marketing strategies and market positioning. Focuses on competitive advantage and customer value creation.' },
      { id: 'mcom12', name: 'Financial Management', desc: 'Studies planning and management of financial resources. Covers investment, financing, and dividend decisions.' },
      { id: 'mcom13', name: 'Marketing Management', desc: 'Explores techniques for identifying and satisfying customer needs. Focuses on product, pricing, promotion, and distribution strategies.' },
      { id: 'mcom14', name: 'Human Resource Management', desc: 'Deals with recruitment, development, and retention of employees. Promotes effective workforce management and organizational growth.' },
      { id: 'mcom15', name: 'Human Resource Management (SWAYAM)', desc: 'Provides digital learning on employee management practices. Focuses on workforce planning, training, and performance evaluation.' },
      { id: 'mcom16', name: 'Operations Research', desc: 'Uses mathematical techniques to solve business problems. Supports efficient decision-making and resource allocation.' },
      { id: 'mcom17', name: 'Managerial Economics', desc: 'Applies economic theories to managerial decisions. Helps analyze markets, costs, and business strategies.' },
      { id: 'mcom18', name: 'Security Analysis and Portfolio Management', desc: 'Studies investment opportunities and risk assessment. Focuses on building and managing investment portfolios.' },
      { id: 'mcom19', name: 'Financial System & Capital Market', desc: 'Examines the structure of financial institutions and markets. Explains capital formation and investment mechanisms.' },
      { id: 'mcom20', name: 'Banking and Insurance', desc: 'Studies banking operations and insurance services. Covers financial products, regulations, and risk management.' },
      { id: 'mcom21', name: 'Regulators for Financial System in India', desc: 'Examines institutions that supervise India\'s financial sector. Focuses on regulatory policies and financial stability.' },
      { id: 'mcom22', name: 'International Marketing', desc: 'Studies marketing activities across global markets. Explains export strategies and international consumer behaviour.' },
      { id: 'mcom23', name: 'Consumer Behaviour', desc: 'Analyzes factors influencing purchasing decisions. Helps businesses understand customer preferences and motivations.' },
      { id: 'mcom24', name: 'Services Marketing', desc: 'Focuses on marketing of intangible services. Covers customer satisfaction, service quality, and relationship management.' },
      { id: 'mcom25', name: 'Advertising and Sales Promotion', desc: 'Studies promotional tools used to influence consumers. Focuses on advertising campaigns and sales enhancement techniques.' },
      { id: 'mcom26', name: 'Industrial Relations & Labour Laws', desc: 'Examines relationships between employers and employees. Covers labour welfare, dispute resolution, and employment laws.' },
      { id: 'mcom27', name: 'Corporate Social Responsibility', desc: 'Explores the social and ethical responsibilities of businesses. Encourages sustainable and responsible business practices.' },
      { id: 'mcom28', name: 'Recruitment, Training & Development', desc: 'Focuses on acquiring and developing human resources. Enhances employee skills and organizational effectiveness.' },
      { id: 'mcom29', name: 'Talent Management & Employee Retention', desc: 'Studies strategies for attracting and retaining skilled employees. Promotes workforce stability and long-term organizational success.' }
    ],
    'BBA': [
      { id: 'bba1', name: 'Business Communication – I', desc: 'Develops professional communication and presentation skills. Focuses on business correspondence, reports, and interpersonal communication.' },
      { id: 'bba2', name: 'Financial Accounting', desc: 'Introduces recording and reporting of financial transactions. Helps prepare and interpret financial statements.' },
      { id: 'bba3', name: 'Business Statistics and Logic', desc: 'Applies statistical and logical methods to business problems. Supports decision-making through data analysis and reasoning.' },
      { id: 'bba4', name: 'General English', desc: 'Improves language proficiency and communication abilities. Enhances reading, writing, speaking, and comprehension skills.' },
      { id: 'bba5', name: 'Indian Knowledge System', desc: 'Introduces India\'s traditional knowledge and intellectual heritage. Explores contributions in philosophy, science, and culture.' },
      { id: 'bba6', name: 'Environmental Science and Sustainability', desc: 'Studies environmental issues and sustainable development practices. Promotes awareness of conservation and ecological responsibility.' },
      { id: 'bba7', name: 'Human Behaviour and Organization', desc: 'Examines individual and group behaviour in workplaces. Focuses on motivation, leadership, and organizational culture.' },
      { id: 'bba8', name: 'Marketing Management', desc: 'Studies strategies for identifying and satisfying customer needs. Covers product development, promotion, and market planning.' },
      { id: 'bba9', name: 'Business Economics', desc: 'Applies economic principles to business decisions. Analyzes demand, supply, pricing, and market structures.' },
      { id: 'bba10', name: 'Emerging Technologies and Application', desc: 'Introduces modern technologies impacting businesses. Covers AI, cloud computing, automation, and digital transformation.' },
      { id: 'bba11', name: 'Media Literacy and Critical Thinking', desc: 'Develops skills for evaluating information critically. Encourages informed decision-making and analytical thinking.' },
      { id: 'bba12', name: 'Indian Constitution', desc: 'Provides knowledge of India\'s constitutional framework. Explains fundamental rights, duties, and governance structures.' },
      { id: 'bba13', name: 'Business Communication – II', desc: 'Builds advanced communication and presentation abilities. Focuses on negotiation, public speaking, and professional writing.' },
      { id: 'bba14', name: 'Management Accounting', desc: 'Uses accounting information for managerial decisions. Supports planning, budgeting, and performance evaluation.' },
      { id: 'bba15', name: 'Legal and Ethical Issues in Business', desc: 'Examines laws and ethical standards governing business activities. Promotes responsible and compliant business practices.' },
      { id: 'bba16', name: 'Human Resource Management', desc: 'Focuses on recruitment, training, and employee development. Helps manage workforce performance and relations.' },
      { id: 'bba17', name: 'Indian Systems of Health and Wellness', desc: 'Introduces traditional Indian approaches to health and well-being. Covers holistic practices and preventive healthcare concepts.' },
      { id: 'bba18', name: 'Management Information System (MIS)', desc: 'Studies information systems used in business operations. Supports decision-making through technology and data management.' },
      { id: 'bba19', name: 'Yoga / Sports / NCC / NSS / Disaster Management', desc: 'Promotes physical fitness, discipline, and social responsibility. Encourages leadership, teamwork, and community service.' },
      { id: 'bba20', name: 'Entrepreneurship and Startup Ecosystem', desc: 'Develops entrepreneurial mindset and innovation skills. Explains startup creation, funding, and business growth.' },
      { id: 'bba21', name: 'Operations Management', desc: 'Focuses on efficient production and service delivery. Covers process improvement, quality control, and resource management.' },
      { id: 'bba22', name: 'Financial Management', desc: 'Studies planning and management of financial resources. Covers investment decisions, financing, and risk management.' },
      { id: 'bba23', name: 'Business Research Methodology', desc: 'Introduces techniques for conducting business research. Focuses on data collection, analysis, and report preparation.' },
      { id: 'bba24', name: 'Business Environment and Public Policy', desc: 'Examines external factors affecting business operations. Studies government policies and their economic impact.' },
      { id: 'bba25', name: 'International Business', desc: 'Explores business activities conducted across national borders. Covers global trade, foreign markets, and international strategies.' },
      { id: 'bba26', name: 'Geo-Politics and Impact on Business', desc: 'Studies how political developments affect businesses globally. Examines international relations, trade policies, and risks.' },
      { id: 'bba27', name: 'Public Health and Management', desc: 'Focuses on management principles in healthcare systems. Explores health policies, administration, and service delivery.' },
      { id: 'bba28', name: 'Enterprise System and Platforms', desc: 'Studies integrated software solutions used by organizations. Covers ERP systems and digital business platforms.' },
      { id: 'bba29', name: 'Strategic Management', desc: 'Focuses on long-term planning and competitive advantage. Helps organizations achieve sustainable growth and success.' },
      { id: 'bba30', name: 'Logistics and Supply Chain Management', desc: 'Examines movement of goods from producers to consumers. Focuses on procurement, transportation, and inventory management.' },
      { id: 'bba31', name: 'Internship / Capstone Project', desc: 'Provides practical exposure to real business situations. Enhances professional and problem-solving skills.' },
      { id: 'bba32', name: 'Major Project', desc: 'Allows in-depth study of a business-related topic. Develops research, analytical, and presentation abilities.' },
      { id: 'bba33', name: 'Project Management', desc: 'Studies planning, execution, and control of projects. Focuses on achieving objectives within time and budget constraints.' },
      { id: 'bba34', name: 'Business Taxation', desc: 'Examines tax laws affecting businesses and organizations. Covers tax planning, compliance, and regulatory requirements.' },
      { id: 'bba35', name: 'Corporate Governance', desc: 'Promotes accountability, transparency, and ethical management. Focuses on stakeholder interests and responsible leadership.' }
    ],
    'Law': [
      { id: 'law1', name: 'Contract Law', desc: 'Studies legally enforceable agreements between parties. Covers contract formation, performance, breach, and legal remedies.' },
      { id: 'law2', name: 'Constitutional Law', desc: 'Examines the Constitution and framework of government. Explains fundamental rights, duties, and constitutional principles.' },
      { id: 'law3', name: 'Law of Torts', desc: 'Deals with civil wrongs that cause harm to individuals. Provides remedies through compensation and damages.' },
      { id: 'law4', name: 'Hindu Law', desc: 'Studies legal principles governing Hindus in personal matters. Covers marriage, adoption, succession, and family relations.' },
      { id: 'law5', name: 'Muslim Law', desc: 'Examines Islamic legal principles applicable to Muslims. Covers marriage, divorce, inheritance, and maintenance.' },
      { id: 'law6', name: 'Indian Penal Code', desc: 'Defines criminal offences and punishments under Indian law. Explains crimes against persons, property, and the State.' },
      { id: 'law7', name: 'Company Law', desc: 'Regulates the formation and management of companies. Covers corporate governance, directors, and shareholder rights.' },
      { id: 'law8', name: 'Property Law', desc: 'Governs ownership, transfer, and possession of property. Explains rights and liabilities related to movable and immovable property.' },
      { id: 'law9', name: 'Administrative Law', desc: 'Controls the functioning of government authorities and agencies. Ensures legality, fairness, and accountability in administration.' },
      { id: 'law10', name: 'Environmental Law', desc: 'Protects the environment through legal regulations. Addresses pollution control, conservation, and sustainable development.' },
      { id: 'law11', name: 'Labour Law', desc: 'Regulates relations between employers and employees. Covers wages, working conditions, and workers\' rights.' },
      { id: 'law12', name: 'Criminal Procedure Code', desc: 'Provides procedures for criminal investigations and trials. Explains arrest, bail, evidence collection, and court proceedings.' },
      { id: 'law13', name: 'Jurisprudence', desc: 'Studies the philosophy and theory of law. Examines legal concepts, principles, and schools of thought.' },
      { id: 'law14', name: 'Public International Law', desc: 'Regulates relations between sovereign states and international bodies. Covers treaties, international organizations, and global legal norms.' },
      { id: 'law15', name: 'Human Rights Law', desc: 'Protects the fundamental rights and freedoms of individuals. Focuses on equality, dignity, justice, and legal protections.' },
      { id: 'law16', name: 'Right to Information (RTI)', desc: 'Promotes transparency and accountability in public administration. Allows citizens to access information held by public authorities.' },
      { id: 'law17', name: 'Banking Law', desc: 'Regulates banking institutions and financial transactions. Covers lending, deposits, negotiable instruments, and banking regulations.' },
      { id: 'law18', name: 'Insurance Law', desc: 'Governs insurance contracts and risk management practices. Explains rights and obligations of insurers and policyholders.' },
      { id: 'law19', name: 'Intellectual Property Rights (IPR)', desc: 'Protects creations of the mind through legal rights. Covers copyrights, patents, trademarks, and industrial designs.' },
      { id: 'law20', name: 'Penology and Victimology', desc: 'Studies punishment systems and treatment of offenders. Examines victims\' rights, rehabilitation, and criminal justice policies.' },
      { id: 'law21', name: 'Competition Law', desc: 'Promotes fair competition in the marketplace. Prevents monopolies, anti-competitive agreements, and abuse of dominance.' },
      { id: 'law22', name: 'Law of Evidence', desc: 'Governs the admissibility and evaluation of evidence in courts. Explains facts, witnesses, documents, and burden of proof.' },
      { id: 'law23', name: 'Taxation Law', desc: 'Deals with laws governing the collection of taxes. Covers direct taxes, indirect taxes, and tax compliance requirements.' },
      { id: 'law24', name: 'White Collar Crimes', desc: 'Examines non-violent crimes committed for financial gain. Includes fraud, corruption, embezzlement, and corporate offences.' },
      { id: 'law25', name: 'Women and Criminal Law', desc: 'Protects the rights of women and children under law. Covers offences, welfare measures, and legal safeguards.' },
      { id: 'law26', name: 'Law Relating to International Trade', desc: 'Regulates legal aspects of trade between nations. Covers import-export laws, trade agreements, and dispute resolution.' },
      { id: 'law27', name: 'Alternative Dispute Resolution (ADR)', desc: 'Provides methods of resolving disputes outside traditional courts. Includes arbitration, mediation, conciliation, and negotiation.' },
      { id: 'law28', name: 'Civil Procedure Code', desc: 'Governs procedures for civil litigation in courts. Explains filing suits, execution of decrees, and limitation periods.' },
      { id: 'law29', name: 'Professional Ethics', desc: 'Focuses on ethical responsibilities of legal professionals. Promotes integrity, professional conduct, and accountability.' },
      { id: 'law30', name: 'Interpretation of Statutes', desc: 'Studies methods used to interpret laws and statutes. Explains legislative intent and rules of statutory construction.' },
      { id: 'law31', name: 'Juvenile Justice Act', desc: 'Provides legal protection and rehabilitation for juveniles. Promotes reformative measures instead of punitive approaches.' },
      { id: 'law32', name: 'Indian Succession Act', desc: 'Regulates inheritance and succession of property. Explains wills, probate, and distribution of estates after death.' },
      { id: 'law33', name: 'Bharatiya Nyaya Sanhita', desc: 'India\'s principal criminal law statute. Defines criminal offences, punishments, and principles of criminal liability.' },
      { id: 'law34', name: 'Bharatiya Nagarik Suraksha Sanhita', desc: 'Criminal procedure statute. Provides procedures for investigation, arrest, trial, and criminal justice administration.' },
      { id: 'law35', name: 'Bharatiya Sakshya Adhiniyam', desc: 'Evidence law statute. Governs admissibility, relevance, and evaluation of evidence in legal proceedings.' }
    ]
  };

  // Create subject mapping
  const createSubjectMapping = () => {
    const subjectMap = new Map();
    const allSubjects = [];
    
    Object.entries(subjectsData).forEach(([program, subs]) => {
      subs.forEach(sub => {
        if (!subjectMap.has(sub.name)) {
          subjectMap.set(sub.name, []);
        }
        subjectMap.get(sub.name).push(program);
        allSubjects.push({
          ...sub,
          program,
          price: 499,
          paid: false,
          rating: 0,
          review: ''
        });
      });
    });
    
    return { allSubjects, subjectMap };
  };

  const { allSubjects, subjectMap } = createSubjectMapping();
  const [subjects, setSubjects] = useState(allSubjects);
  const [users, setUsers] = useState([
    { id: 'admin', email: 'admin@praveenclasses.com', password: 'admin123', name: 'Admin', isAdmin: true, transactions: [] }
  ]);

  // Handlers
  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(u => u.email === loginEmail && u.password === loginPassword);
    if (user) {
      setCurrentUser(user);
      setIsAdmin(user.isAdmin);
      setCurrentPage('home');
      setLoginEmail('');
      setLoginPassword('');
    } else {
      alert('Invalid credentials');
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (users.find(u => u.email === signupEmail)) {
      alert('Email already registered');
      return;
    }
    const newUser = { id: Date.now(), email: signupEmail, password: signupPassword, name: signupName, isAdmin: false, transactions: [] };
    setUsers([...users, newUser]);
    setCurrentUser(newUser);
    setCurrentPage('home');
    setSignupEmail('');
    setSignupPassword('');
    setSignupName('');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsAdmin(false);
    setCurrentPage('home');
  };

  const handlePurchase = (subjectId) => {
    if (!currentUser) {
      setCurrentPage('login');
      return;
    }
    const subject = subjects.find(s => s.id === subjectId);
    const transaction = {
      id: `TXN${Date.now()}`,
      userId: currentUser.id,
      subjectId: subjectId,
      subjectName: subject.name,
      amount: 499,
      date: new Date().toLocaleDateString(),
      status: 'completed'
    };
    setTransactions([...transactions, transaction]);
    
    const programsWithSubject = subjectMap.get(subject.name) || [];
    setSubjects(subjects.map(s => {
      if (s.name === subject.name && programsWithSubject.includes(s.program)) {
        return { ...s, paid: true };
      }
      return s;
    }));
    
    setCurrentUser({ ...currentUser, transactions: [...currentUser.transactions, transaction] });
    alert(`✅ Payment successful!\n\n"${subject.name}" unlocked in:\n${programsWithSubject.join(', ')}\n\nBuy once, access everywhere!`);
  };

  const toggleFavorite = (subjectId) => {
    if (!currentUser) {
      setCurrentPage('login');
      return;
    }
    if (favorites.includes(subjectId)) {
      setFavorites(favorites.filter(id => id !== subjectId));
    } else {
      setFavorites([...favorites, subjectId]);
    }
  };

  const filteredSubjects = subjects.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) || s.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesProgram = selectedProgram === 'all' || s.program === selectedProgram;
    return matchesSearch && matchesProgram;
  });

  // Render functions
  const renderHome = () => (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Praveen Kumar Classes</h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)' }}>Professional study notes for B.Com, M.Com, BBA, and Law</p>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
        {['all', 'B.Com', 'M.Com', 'BBA', 'Law'].map(prog => (
          <button key={prog} onClick={() => setSelectedProgram(prog)} style={{
            padding: '1rem',
            borderRadius: 'var(--border-radius-lg)',
            border: selectedProgram === prog ? '2px solid var(--color-text-primary)' : '2px solid var(--color-border-tertiary)',
            background: selectedProgram === prog ? 'var(--color-background-secondary)' : 'transparent',
            cursor: 'pointer',
            fontWeight: '500'
          }}>
            {prog === 'all' ? 'All Programs' : prog}
          </button>
        ))}
      </div>

      <div style={{ marginBottom: '2rem', position: 'relative' }}>
        <input type="text" placeholder="🔍 Search subjects..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} style={{
          width: '100%',
          padding: '0.75rem 1rem',
          borderRadius: 'var(--border-radius-lg)',
          border: '1px solid var(--color-border-tertiary)',
          background: 'var(--color-background-secondary)',
          color: 'var(--color-text-primary)',
          fontSize: '1rem',
          boxSizing: 'border-box'
        }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {filteredSubjects.map(subject => (
          <div key={subject.id} style={{
            borderRadius: 'var(--border-radius-lg)',
            border: '1px solid var(--color-border-tertiary)',
            padding: '1.5rem',
            background: 'var(--color-background-secondary)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600' }}>{subject.name}</h3>
              <button onClick={() => toggleFavorite(subject.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.5rem' }}>
                {favorites.includes(subject.id) ? '❤️' : '🤍'}
              </button>
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', marginBottom: '1rem', lineHeight: '1.5' }}>{subject.desc}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
              <span style={{ background: 'var(--color-background-primary)', padding: '0.25rem 0.75rem', borderRadius: '4px', fontSize: '0.85rem' }}>{subject.program}</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>₹{subject.price}</span>
            </div>
            {subject.paid ? (
              <button onClick={() => setCurrentPage('subject/' + subject.id)} style={{
                width: '100%', padding: '0.75rem', background: 'var(--color-text-primary)', color: 'var(--color-background-primary)',
                border: 'none', borderRadius: 'var(--border-radius-md)', cursor: 'pointer', fontWeight: '500'
              }}>View & Download</button>
            ) : (
              <button onClick={() => handlePurchase(subject.id)} style={{
                width: '100%', padding: '0.75rem', background: 'var(--color-text-primary)', color: 'var(--color-background-primary)',
                border: 'none', borderRadius: 'var(--border-radius-md)', cursor: 'pointer', fontWeight: '500'
              }}>Buy Now - ₹{subject.price}</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderSubjectDetail = (subjectId) => {
    const subject = subjects.find(s => s.id === subjectId);
    if (!subject) return <div style={{ padding: '2rem' }}>Subject not found</div>;
    
    return (
      <div style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
        <button onClick={() => setCurrentPage('home')} style={{ marginBottom: '2rem', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-primary)', fontSize: '1rem' }}>← Back</button>
        
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{subject.name}</h1>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>{subject.program}</p>

        {!subject.paid && (
          <div style={{ background: 'var(--color-background-secondary)', padding: '1.5rem', borderRadius: 'var(--border-radius-lg)', marginBottom: '2rem', border: '1px solid var(--color-border-tertiary)' }}>
            <h3 style={{ marginBottom: '1rem' }}>Free Preview (15%)</h3>
            <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-secondary)' }}>This is a sample of the content. Purchase to unlock the full material.</p>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>[PDF Preview - Sample section]</p>
            <button onClick={() => handlePurchase(subject.id)} style={{
              padding: '0.75rem 2rem', background: 'var(--color-text-primary)', color: 'var(--color-background-primary)',
              border: 'none', borderRadius: 'var(--border-radius-md)', cursor: 'pointer', fontWeight: '500', fontSize: '1rem'
            }}>Purchase Full Access - ₹{subject.price}</button>
          </div>
        )}

        {subject.paid && (
          <div style={{ background: 'var(--color-background-secondary)', padding: '1.5rem', borderRadius: 'var(--border-radius-lg)', border: '1px solid var(--color-border-tertiary)' }}>
            <h3 style={{ marginBottom: '1.5rem' }}>Your Content</h3>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', background: 'var(--color-text-primary)', color: 'var(--color-background-primary)', border: 'none', borderRadius: 'var(--border-radius-md)', cursor: 'pointer' }}>
                ⬇️ Download PDF
              </button>
              <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', background: 'var(--color-text-primary)', color: 'var(--color-background-primary)', border: 'none', borderRadius: 'var(--border-radius-md)', cursor: 'pointer' }}>
                🖨️ Print
              </button>
            </div>
            <div style={{ background: 'var(--color-background-primary)', padding: '2rem', borderRadius: 'var(--border-radius-lg)', minHeight: '400px', border: '2px solid var(--color-border-tertiary)', textAlign: 'center' }}>
              <p style={{ color: 'var(--color-text-secondary)' }}>[Complete PDF Content - Watermarked]</p>
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderLogin = () => (
    <div style={{ padding: '2rem', maxWidth: '400px', margin: '4rem auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Login</h2>
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Email</label>
          <input type="email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} placeholder="your@email.com" style={{
            width: '100%', padding: '0.75rem', borderRadius: 'var(--border-radius-md)', border: '1px solid var(--color-border-tertiary)',
            background: 'var(--color-background-secondary)', color: 'var(--color-text-primary)', boxSizing: 'border-box'
          }} required />
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Password</label>
          <div style={{ position: 'relative' }}>
            <input type={showPassword ? 'text' : 'password'} value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} placeholder="••••••••" style={{
              width: '100%', padding: '0.75rem', borderRadius: 'var(--border-radius-md)', border: '1px solid var(--color-border-tertiary)',
              background: 'var(--color-background-secondary)', color: 'var(--color-text-primary)', boxSizing: 'border-box', paddingRight: '2.5rem'
            }} required />
            <button type="button" onClick={() => setShowPassword(!showPassword)} style={{ position: 'absolute', right: '0.75rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem' }}>
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>
        </div>
        <button type="submit" style={{
          width: '100%', padding: '0.75rem', background: 'var(--color-text-primary)', color: 'var(--color-background-primary)',
          border: 'none', borderRadius: 'var(--border-radius-md)', cursor: 'pointer', fontWeight: '500', marginBottom: '1rem'
        }}>Login</button>
      </form>
      <p style={{ textAlign: 'center', color: 'var(--color-text-secondary)' }}>No account? <button onClick={() => setCurrentPage('signup')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-primary)', fontWeight: '500' }}>Sign up</button></p>
      <p style={{ textAlign: 'center', marginTop: '1rem', color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>Demo: admin@praveenclasses.com / admin123</p>
    </div>
  );

  const renderSignup = () => (
    <div style={{ padding: '2rem', maxWidth: '400px', margin: '4rem auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Name</label>
          <input type="text" value={signupName} onChange={(e) => setSignupName(e.target.value)} placeholder="Your name" style={{
            width: '100%', padding: '0.75rem', borderRadius: 'var(--border-radius-md)', border: '1px solid var(--color-border-tertiary)',
            background: 'var(--color-background-secondary)', color: 'var(--color-text-primary)', boxSizing: 'border-box'
          }} required />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Email</label>
          <input type="email" value={signupEmail} onChange={(e) => setSignupEmail(e.target.value)} placeholder="your@email.com" style={{
            width: '100%', padding: '0.75rem', borderRadius: 'var(--border-radius-md)', border: '1px solid var(--color-border-tertiary)',
            background: 'var(--color-background-secondary)', color: 'var(--color-text-primary)', boxSizing: 'border-box'
          }} required />
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Password</label>
          <input type="password" value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)} placeholder="••••••••" style={{
            width: '100%', padding: '0.75rem', borderRadius: 'var(--border-radius-md)', border: '1px solid var(--color-border-tertiary)',
            background: 'var(--color-background-secondary)', color: 'var(--color-text-primary)', boxSizing: 'border-box'
          }} required />
        </div>
        <button type="submit" style={{
          width: '100%', padding: '0.75rem', background: 'var(--color-text-primary)', color: 'var(--color-background-primary)',
          border: 'none', borderRadius: 'var(--border-radius-md)', cursor: 'pointer', fontWeight: '500', marginBottom: '1rem'
        }}>Sign Up</button>
      </form>
      <p style={{ textAlign: 'center', color: 'var(--color-text-secondary)' }}>Have an account? <button onClick={() => setCurrentPage('login')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-primary)', fontWeight: '500' }}>Login</button></p>
    </div>
  );

  const renderProfile = () => (
    <div style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '2rem' }}>My Profile</h1>
      <div style={{ background: 'var(--color-background-secondary)', padding: '1.5rem', borderRadius: 'var(--border-radius-lg)', marginBottom: '2rem', border: '1px solid var(--color-border-tertiary)' }}>
        <h3 style={{ marginBottom: '1rem' }}>Account Information</h3>
        <p><strong>Name:</strong> {currentUser.name}</p>
        <p><strong>Email:</strong> {currentUser.email}</p>
      </div>

      <div style={{ background: 'var(--color-background-secondary)', padding: '1.5rem', borderRadius: 'var(--border-radius-lg)', border: '1px solid var(--color-border-tertiary)' }}>
        <h3 style={{ marginBottom: '1rem' }}>Transaction History</h3>
        {currentUser.transactions && currentUser.transactions.length > 0 ? (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--color-border-tertiary)' }}>
                  <th style={{ textAlign: 'left', padding: '0.75rem', fontWeight: '600' }}>Transaction ID</th>
                  <th style={{ textAlign: 'left', padding: '0.75rem', fontWeight: '600' }}>Subject</th>
                  <th style={{ textAlign: 'left', padding: '0.75rem', fontWeight: '600' }}>Amount</th>
                  <th style={{ textAlign: 'left', padding: '0.75rem', fontWeight: '600' }}>Date</th>
                  <th style={{ textAlign: 'left', padding: '0.75rem', fontWeight: '600' }}>Receipt</th>
                </tr>
              </thead>
              <tbody>
                {currentUser.transactions.map(txn => (
                  <tr key={txn.id} style={{ borderBottom: '1px solid var(--color-border-tertiary)' }}>
                    <td style={{ padding: '0.75rem', fontFamily: 'monospace', fontSize: '0.9rem' }}>{txn.id}</td>
                    <td style={{ padding: '0.75rem' }}>{txn.subjectName}</td>
                    <td style={{ padding: '0.75rem' }}>₹{txn.amount}</td>
                    <td style={{ padding: '0.75rem' }}>{txn.date}</td>
                    <td style={{ padding: '0.75rem' }}>
                      <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'var(--color-text-primary)', color: 'var(--color-background-primary)', border: 'none', borderRadius: 'var(--border-radius-md)', cursor: 'pointer', fontSize: '0.9rem' }}>
                        ⬇️ PDF
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p style={{ color: 'var(--color-text-secondary)' }}>No transactions yet.</p>
        )}
      </div>
    </div>
  );

  const renderAdmin = () => (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '2rem' }}>Admin Dashboard</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
        <div style={{ background: 'var(--color-background-secondary)', padding: '1.5rem', borderRadius: 'var(--border-radius-lg)', border: '1px solid var(--color-border-tertiary)', textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{transactions.length}</div>
          <div style={{ color: 'var(--color-text-secondary)' }}>Total Sales</div>
        </div>
        <div style={{ background: 'var(--color-background-secondary)', padding: '1.5rem', borderRadius: 'var(--border-radius-lg)', border: '1px solid var(--color-border-tertiary)', textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>₹{transactions.length * 499}</div>
          <div style={{ color: 'var(--color-text-secondary)' }}>Revenue</div>
        </div>
        <div style={{ background: 'var(--color-background-secondary)', padding: '1.5rem', borderRadius: 'var(--border-radius-lg)', border: '1px solid var(--color-border-tertiary)', textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{users.length - 1}</div>
          <div style={{ color: 'var(--color-text-secondary)' }}>Active Users</div>
        </div>
        <div style={{ background: 'var(--color-background-secondary)', padding: '1.5rem', borderRadius: 'var(--border-radius-lg)', border: '1px solid var(--color-border-tertiary)', textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{subjects.length}</div>
          <div style={{ color: 'var(--color-text-secondary)' }}>Total Subjects</div>
        </div>
      </div>
      <p style={{ color: 'var(--color-text-secondary)', textAlign: 'center' }}>📝 Subject management features available in production</p>
    </div>
  );

  const renderAbout = () => (
    <div style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '2rem' }}>About Us</h1>
      <div style={{ background: 'var(--color-background-secondary)', padding: '2rem', borderRadius: 'var(--border-radius-lg)', border: '1px solid var(--color-border-tertiary)' }}>
        <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>Praveen Kumar Classes provides comprehensive, professionally prepared study notes for students pursuing B.Com, M.Com, BBA, and Law programs.</p>
        <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>Our mission is to help students succeed with clear, well-organized study materials covering all important topics.</p>
        <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>With 128 subjects across four programs, we ensure students have the resources they need for academic success.</p>
      </div>
    </div>
  );

  const renderContact = () => (
    <div style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '2rem' }}>Contact Us</h1>
      <div style={{ background: 'var(--color-background-secondary)', padding: '2rem', borderRadius: 'var(--border-radius-lg)', border: '1px solid var(--color-border-tertiary)' }}>
        <p style={{ marginBottom: '1rem' }}>📧 Email: praveenclasses355@gmail.com</p>
        <p style={{ marginBottom: '1rem' }}>📱 Phone: 9971908578</p>
        <p>We're here to help! Contact us for any questions or support.</p>
      </div>
    </div>
  );

  // Main render
  const renderContent = () => {
    if (currentPage === 'home') return renderHome();
    if (currentPage.startsWith('subject/')) return renderSubjectDetail(currentPage.split('/')[1]);
    if (currentPage === 'login') return renderLogin();
    if (currentPage === 'signup') return renderSignup();
    if (currentPage === 'profile' && currentUser) return renderProfile();
    if (currentPage === 'admin' && isAdmin) return renderAdmin();
    if (currentPage === 'about') return renderAbout();
    if (currentPage === 'contact') return renderContact();
    return renderHome();
  };

  return (
    <div style={{ background: darkMode ? '#1a1a1a' : '#ffffff', color: darkMode ? '#e0e0e0' : '#000000', minHeight: '100vh' }}>
      {/* Header */}
      <header style={{ background: 'var(--color-background-secondary)', borderBottom: '1px solid var(--color-border-tertiary)', padding: '1rem 2rem', position: 'sticky', top: 0, zIndex: 1000 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <button onClick={() => setCurrentPage('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.3rem', fontWeight: 'bold', color: 'var(--color-text-primary)' }}>
            📚 PK Classes
          </button>

          <nav style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => setCurrentPage('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-primary)', fontSize: '0.95rem' }}>Home</button>
            <button onClick={() => setCurrentPage('about')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-primary)', fontSize: '0.95rem' }}>About</button>
            <button onClick={() => setCurrentPage('contact')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-primary)', fontSize: '0.95rem' }}>Contact</button>

            <button onClick={() => setDarkMode(!darkMode)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem' }}>
              {darkMode ? '☀️' : '🌙'}
            </button>

            {!currentUser ? (
              <>
                <button onClick={() => setCurrentPage('login')} style={{ padding: '0.5rem 1rem', background: 'var(--color-text-primary)', color: 'var(--color-background-primary)', border: 'none', borderRadius: 'var(--border-radius-md)', cursor: 'pointer', fontSize: '0.9rem' }}>
                  Login
                </button>
                <button onClick={() => setCurrentPage('signup')} style={{ padding: '0.5rem 1rem', border: '1px solid var(--color-text-primary)', color: 'var(--color-text-primary)', background: 'transparent', borderRadius: 'var(--border-radius-md)', cursor: 'pointer', fontSize: '0.9rem' }}>
                  Sign Up
                </button>
              </>
            ) : (
              <>
                <button onClick={() => setCurrentPage('profile')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-primary)', fontSize: '0.95rem' }}>
                  👤 {currentUser.name}
                </button>
                {isAdmin && (
                  <button onClick={() => setCurrentPage('admin')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-primary)', fontSize: '0.95rem' }}>
                    ⚙️ Admin
                  </button>
                )}
                <button onClick={handleLogout} style={{ padding: '0.5rem 1rem', background: '#e74c3c', color: 'white', border: 'none', borderRadius: 'var(--border-radius-md)', cursor: 'pointer', fontSize: '0.9rem' }}>
                  Logout
                </button>
              </>
            )}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {renderContent()}
      </main>

      {/* Footer */}
      <footer style={{ background: 'var(--color-background-secondary)', borderTop: '1px solid var(--color-border-tertiary)', padding: '3rem 2rem', marginTop: '3rem', textAlign: 'center' }}>
        <p style={{ color: 'var(--color-text-secondary)' }}>📚 Praveen Kumar Classes | Email: praveenclasses355@gmail.com | Phone: 9971908578</p>
        <p style={{ color: 'var(--color-text-secondary)', marginTop: '1rem', fontSize: '0.9rem' }}>&copy; 2026 All rights reserved.</p>
      </footer>
      <Analytics />
    </div>
  );
};

export default PraveenKumarClasses;
