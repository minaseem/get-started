/**
 * Created by imamudinnaseem on 9/27/17.
 */
/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */

export default [
    // Home
    {
        path: '/home',
        name: 'home.index',
        component: () => {
            return import('@/pages/Home/Index');
        },
    },
    {
        path: '/mens_outerwear',
        name: 'men_s_outerwear.index',
        component: () => {
            return import('@/pages/MenOuterwear/menOuterWear');
        },
    },
    {
        path: '/*',
        redirect: '/home',
    },
];

