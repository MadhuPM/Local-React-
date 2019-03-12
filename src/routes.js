import React from 'react';

const Home = React.lazy(() => import('./views/pages/Home'));
const TeamDetails = React.lazy(() => import('./views/pages/TeamDetails'));
const RosterDetails = React.lazy(() => import('./views/pages/RosterDetails'));


const routes = [
    { path: '/', exact: true, name: 'Home', component: Home },
    { path: '/team/view/:id', exact: true, name: 'Team Details', component: TeamDetails },
    { path: '/roster/views/:id', name: 'Roster Details', component: RosterDetails }
];

export default routes;
