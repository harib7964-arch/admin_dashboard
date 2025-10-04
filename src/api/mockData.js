// Mock data for e-learning platform

export const mockCourses = [
  {
    id: 1,
    name: 'Complete Web Development Bootcamp',
    instructor: 'Dr. Angela Yu',
    instructorId: 101,
    students: 1247,
    enrolled: 1380,
    progress: 78,
    status: 'Active',
    rating: 4.8,
    category: 'Web Development',
    duration: '45 hours',
    description: 'Learn HTML, CSS, JavaScript, React and more',
    price: 89.99,
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    createdAt: '2023-01-15',
    updatedAt: '2024-01-10'
  },
  {
    id: 2,
    name: 'Data Science & Machine Learning',
    instructor: 'Jose Portilla',
    instructorId: 102,
    students: 892,
    enrolled: 1050,
    progress: 65,
    status: 'Active',
    rating: 4.9,
    category: 'Data Science',
    duration: '60 hours',
    description: 'Master Python for data science and machine learning',
    price: 99.99,
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    createdAt: '2023-02-20',
    updatedAt: '2024-01-08'
  },
  {
    id: 3,
    name: 'UI/UX Design Masterclass',
    instructor: 'Vako Shvili',
    instructorId: 103,
    students: 654,
    enrolled: 780,
    progress: 82,
    status: 'Active',
    rating: 4.7,
    category: 'Design',
    duration: '35 hours',
    description: 'Learn Figma, user research, and design principles',
    price: 79.99,
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5',
    createdAt: '2023-03-10',
    updatedAt: '2024-01-05'
  },
  {
    id: 4,
    name: 'Python for Data Analysis',
    instructor: 'Colt Steele',
    instructorId: 104,
    students: 1089,
    enrolled: 1200,
    progress: 91,
    status: 'Active',
    rating: 4.6,
    category: 'Programming',
    duration: '50 hours',
    description: 'Pandas, NumPy, Matplotlib and data visualization',
    price: 84.99,
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    createdAt: '2023-04-05',
    updatedAt: '2024-01-03'
  },
  {
    id: 5,
    name: 'React Native Mobile Development',
    instructor: 'Maximilian Schwarzmüller',
    instructorId: 105,
    students: 543,
    enrolled: 650,
    progress: 45,
    status: 'In Progress',
    rating: 4.8,
    category: 'Mobile Development',
    duration: '55 hours',
    description: 'Build iOS and Android apps with React Native',
    price: 94.99,
    thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c',
    createdAt: '2023-11-20',
    updatedAt: '2024-01-12'
  }
]

export const mockStudents = [
  {
    id: 1,
    name: 'Emma Wilson',
    email: 'emma.wilson@email.com',
    avatar: 'Emma',
    enrolledCourses: [1, 3],
    completedCourses: [2],
    progress: 85,
    currentCourse: 'Web Development',
    joinedDate: '2023-09-15',
    lastActive: '2024-01-12',
    totalHoursLearned: 234,
    certificatesEarned: 3
  },
  {
    id: 2,
    name: 'James Chen',
    email: 'james.chen@email.com',
    avatar: 'James',
    enrolledCourses: [2, 4],
    completedCourses: [],
    progress: 72,
    currentCourse: 'Data Science',
    joinedDate: '2023-10-20',
    lastActive: '2024-01-11',
    totalHoursLearned: 156,
    certificatesEarned: 1
  },
  {
    id: 3,
    name: 'Sofia Martinez',
    email: 'sofia.martinez@email.com',
    avatar: 'Sofia',
    enrolledCourses: [3],
    completedCourses: [1, 2],
    progress: 94,
    currentCourse: 'UI/UX Design',
    joinedDate: '2023-08-05',
    lastActive: '2024-01-12',
    totalHoursLearned: 312,
    certificatesEarned: 5
  },
  {
    id: 4,
    name: 'Lucas Anderson',
    email: 'lucas.anderson@email.com',
    avatar: 'Lucas',
    enrolledCourses: [5],
    completedCourses: [1],
    progress: 68,
    currentCourse: 'Mobile Development',
    joinedDate: '2023-11-30',
    lastActive: '2024-01-10',
    totalHoursLearned: 98,
    certificatesEarned: 2
  },
  {
    id: 5,
    name: 'Olivia Taylor',
    email: 'olivia.taylor@email.com',
    avatar: 'Olivia',
    enrolledCourses: [2, 4],
    completedCourses: [1, 3],
    progress: 91,
    currentCourse: 'Machine Learning',
    joinedDate: '2023-07-12',
    lastActive: '2024-01-12',
    totalHoursLearned: 401,
    certificatesEarned: 6
  }
]

export const mockInstructors = [
  {
    id: 101,
    name: 'Dr. Angela Yu',
    email: 'angela.yu@eduadmin.com',
    bio: 'Lead instructor with 10+ years of experience in web development',
    coursesTeaching: [1],
    totalStudents: 1247,
    rating: 4.8,
    joinedDate: '2022-01-10'
  },
  {
    id: 102,
    name: 'Jose Portilla',
    email: 'jose.portilla@eduadmin.com',
    bio: 'Data science expert and researcher',
    coursesTeaching: [2],
    totalStudents: 892,
    rating: 4.9,
    joinedDate: '2022-02-15'
  },
  {
    id: 103,
    name: 'Vako Shvili',
    email: 'vako.shvili@eduadmin.com',
    bio: 'Senior UI/UX designer from Silicon Valley',
    coursesTeaching: [3],
    totalStudents: 654,
    rating: 4.7,
    joinedDate: '2022-03-01'
  },
  {
    id: 104,
    name: 'Colt Steele',
    email: 'colt.steele@eduadmin.com',
    bio: 'Full-stack developer and educator',
    coursesTeaching: [4],
    totalStudents: 1089,
    rating: 4.6,
    joinedDate: '2022-04-12'
  },
  {
    id: 105,
    name: 'Maximilian Schwarzmüller',
    email: 'max.schwarzmuller@eduadmin.com',
    bio: 'Mobile development specialist',
    coursesTeaching: [5],
    totalStudents: 543,
    rating: 4.8,
    joinedDate: '2023-11-01'
  }
]

export const mockAnalytics = {
  platformActivity: [
    { month: 'Jan', students: 1200, courses: 45, revenue: 125000 },
    { month: 'Feb', students: 1450, courses: 52, revenue: 148000 },
    { month: 'Mar', students: 1680, courses: 58, revenue: 167000 },
    { month: 'Apr', students: 1890, courses: 65, revenue: 189000 },
    { month: 'May', students: 2150, courses: 78, revenue: 215000 },
    { month: 'Jun', students: 2420, courses: 89, revenue: 242000 },
    { month: 'Jul', students: 2847, courses: 124, revenue: 298000 }
  ],
  stats: {
    totalStudents: 2847,
    activeStudents: 2456,
    totalCourses: 124,
    activeCourses: 118,
    completionRate: 87.4,
    certificatesIssued: 1234,
    totalRevenue: 1384000,
    averageRating: 4.76
  },
  topCourses: [
    { courseId: 2, enrollments: 892, completionRate: 78 },
    { courseId: 1, enrollments: 1247, completionRate: 82 },
    { courseId: 4, enrollments: 1089, completionRate: 91 }
  ]
}

export const mockAssignments = [
  {
    id: 1,
    title: 'Build a Responsive Website',
    courseId: 1,
    courseName: 'Complete Web Development Bootcamp',
    dueDate: '2024-01-20',
    submissions: 856,
    totalStudents: 1247,
    status: 'Active'
  },
  {
    id: 2,
    title: 'Data Cleaning Project',
    courseId: 2,
    courseName: 'Data Science & Machine Learning',
    dueDate: '2024-01-18',
    submissions: 623,
    totalStudents: 892,
    status: 'Active'
  },
  {
    id: 3,
    title: 'Design a Mobile App Interface',
    courseId: 3,
    courseName: 'UI/UX Design Masterclass',
    dueDate: '2024-01-25',
    submissions: 412,
    totalStudents: 654,
    status: 'Active'
  }
]

export const mockCertificates = [
  {
    id: 1,
    studentId: 3,
    studentName: 'Sofia Martinez',
    courseId: 1,
    courseName: 'Complete Web Development Bootcamp',
    issuedDate: '2024-01-10',
    certificateNumber: 'CERT-2024-001',
    status: 'Issued'
  },
  {
    id: 2,
    studentId: 5,
    studentName: 'Olivia Taylor',
    courseId: 2,
    courseName: 'Data Science & Machine Learning',
    issuedDate: '2024-01-08',
    certificateNumber: 'CERT-2024-002',
    status: 'Issued'
  },
  {
    id: 3,
    studentId: 3,
    studentName: 'Sofia Martinez',
    courseId: 2,
    courseName: 'Data Science & Machine Learning',
    issuedDate: '2024-01-05',
    certificateNumber: 'CERT-2024-003',
    status: 'Issued'
  }
]
