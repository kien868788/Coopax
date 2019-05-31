/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
  {
    path: '/dashboard',
    // Relative to /src/views
    view: 'Dashboard'
  },
  {
    path: '/user-profile',
    name: 'User Profile',
    view: 'UserProfile'
  }
  ,
  {
    path: '/report',
    name: 'Report',
    view: 'Report'
  },
  {
    path: '/Day',
    name: 'Day',
    view:'Day'
  },
  {
    path: '/Datatable',
    name: 'Datatable',
    view:'Datatable'
  }
  ,
  {
    path: '/Day',
    name: 'Day',
    view:'Day'
  },
  {
    path: '/ManagerUser',
    name: 'ManageUser',
    view:'ManagerUser'
  }
  ,
  {
    path: '/Project',
    name: 'Project',
    view:'Project'
  }
  ,
  {
    path: '/DetailProject',
    name: 'DetailProject',
    view:'DetailProject'
  }
]
