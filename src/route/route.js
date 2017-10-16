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
        path: '/cart',
        name: "cart",
        component: () => {
            return import('@/pages/Cart/cart');
        }
    },
    {
        path: '/',
        name: 'root',
        component: () => {
            return import('@/layout/default');
        },
        children: [
            {
                path: '/menOuterWear',
                name: 'menOuterWear',
                component: () => import('@/pages/MenOuterwear/menOuterWear')
            },
            {
                path: '/ladiesOuterWear',
                name: 'ladiesOuterWear',
                component: () => {
                    return import('@/pages/LadiesOuterwear/ladiesOuterWear');
                }
            },
            {
                path: '/menOuterWear/details/:itemId',
                name: "menOuterWear.details",
                component: () => {
                    return import('@/pages/ItemDetails/itemDetails');
                },
                props: (route) => {
                    return {
                        itemId: route.params.itemId
                    }
                }
            }
        ]
    }, {
        path: '/*',
        redirect: '/home',
    }
];

