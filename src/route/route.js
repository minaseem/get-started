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
    // #/mens_outerwear/details/Anvil+L+S+Crew+Neck+-+Grey
    {
        path: '/mens_outerwear',
        name: 'men_s_outerwear.index',
        component: () => {
            return import('@/pages/MenOuterwear/menOuterWear');
        }
    },
    {
        path: '/mens_outerwear/details/:itemId',
        name: "men_s_outerwear.details",
        component: () => {
            return import('@/pages/ItemDetails/itemDetails');
        },
        props: (route) => {
            return {
                itemId: route.params.itemId
            }
        }
    },
    {
        path: '/*',
        redirect: '/home',
    },
];

