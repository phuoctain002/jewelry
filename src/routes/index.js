import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Admin from '~/admin/pages';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/admin/', component: Admin },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
