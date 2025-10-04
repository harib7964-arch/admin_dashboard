// API Base URL from environment variable
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

// Helper function to make API calls
const apiCall = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });
    
    if (!response.ok) {
      const error = await response.json();
      return error;
    }
    
    return await response.json();
  } catch (error) {
    console.error('API call failed:', error);
    return {
      success: false,
      error: error.message || 'Network error'
    };
  }
}

// ============ COURSES API ============

export const coursesAPI = {
  getAll: async (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return await apiCall(`/api/courses${queryString ? `?${queryString}` : ''}`);
  },
  
  getById: async (id) => {
    return await apiCall(`/api/courses/${id}`);
  },
  
  create: async (courseData) => {
    return await apiCall('/api/courses', {
      method: 'POST',
      body: JSON.stringify(courseData)
    });
  },
  
  update: async (id, courseData) => {
    return await apiCall(`/api/courses/${id}`, {
      method: 'PUT',
      body: JSON.stringify(courseData)
    });
  },
  
  delete: async (id) => {
    return await apiCall(`/api/courses/${id}`, {
      method: 'DELETE'
    });
  }
}

// ============ STUDENTS API ============

export const studentsAPI = {
  getAll: async (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return await apiCall(`/api/students${queryString ? `?${queryString}` : ''}`);
  },
  
  getById: async (id) => {
    return await apiCall(`/api/students/${id}`);
  },
  
  getRecent: async (limit = 5) => {
    return await apiCall(`/api/students/recent?limit=${limit}`);
  },
  
  enroll: async (studentId, courseId) => {
    return await apiCall(`/api/students/${studentId}/enroll`, {
      method: 'POST',
      body: JSON.stringify({ courseId })
    });
  }
}

// ============ INSTRUCTORS API ============

export const instructorsAPI = {
  getAll: async () => {
    return await apiCall('/api/instructors');
  },
  
  getById: async (id) => {
    return await apiCall(`/api/instructors/${id}`);
  }
}

// ============ ANALYTICS API ============

export const analyticsAPI = {
  getStats: async () => {
    return await apiCall('/api/analytics/stats');
  },
  
  getActivity: async (timeRange = '7months') => {
    return await apiCall('/api/analytics/activity');
  },
  
  getTopCourses: async (limit = 3) => {
    return await apiCall(`/api/analytics/top-courses?limit=${limit}`);
  }
}

// ============ ASSIGNMENTS API ============

export const assignmentsAPI = {
  getAll: async (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return await apiCall(`/api/assignments${queryString ? `?${queryString}` : ''}`);
  },
  
  getById: async (id) => {
    return await apiCall(`/api/assignments/${id}`);
  },
  
  create: async (assignmentData) => {
    return await apiCall('/api/assignments', {
      method: 'POST',
      body: JSON.stringify(assignmentData)
    });
  }
}

// ============ CERTIFICATES API ============

export const certificatesAPI = {
  getAll: async (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return await apiCall(`/api/certificates${queryString ? `?${queryString}` : ''}`);
  },
  
  issue: async (certificateData) => {
    return await apiCall('/api/certificates', {
      method: 'POST',
      body: JSON.stringify(certificateData)
    });
  }
}

// Export all APIs
export default {
  courses: coursesAPI,
  students: studentsAPI,
  instructors: instructorsAPI,
  analytics: analyticsAPI,
  assignments: assignmentsAPI,
  certificates: certificatesAPI
}
