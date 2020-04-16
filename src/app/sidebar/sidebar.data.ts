import { SidebarItem } from './sidebar-item';

export const sidebarItems: SidebarItem[] = [
    {
        icon: 'fa fa-home',
        text: 'Tableau de bord',
        link: '/dashboard'
    },
    // {
    //     icon: 'feather-youtube',
    //     text: 'Cours',
    //     link: '/courses'
    // },
    {
        icon: 'fa fa-chart-bar',
        text: 'Statistiques',
        link: '/statistics'
    },
    {
        icon: 'fa fa-file-invoice-dollar',
        text: 'Facturation et Paiements',
        link: '/billing'
    },
    {
        icon: 'fa fa-cash-register',
        text: 'Dépenses',
        link: '/expenses'
    },
    {
        icon: 'fa fa-address-book',
        text: 'Clients et Contrats',
        link: '/customers'
    },
    {
        icon: 'fa fa-building',
        text: 'Patrimoine',
        link: '/building'
    }

];

// <a routerLink="/dashboard" routerLinkActive="active" class="nav-link">
// <div class="nav-icon">
//     <i class="feather-home fa-lg"></i>
// </div>
// Tableau de bord
// </a>
// <a routerLink="/courses" routerLinkActive="active" class="nav-link">
// <div class="nav-icon">
//     <i class="feather-youtube fa-lg"></i>
// </div>
// Cours
// </a>
// <a routerLink="/statistics" routerLinkActive="active" class="nav-link">
// <div class="nav-icon">
//     <i class="fa fa-chart-bar fa-lg"></i>
// </div>
// Statistiques
// </a>
// <a routerLink="/billing" routerLinkActive="active" class="nav-link">
// <div class="nav-icon">
//     <i class="fa fa-chart-bar fa-lg"></i>
// </div>
// Facturation et Paiements
// </a>
// <a routerLink="/expenses" routerLinkActive="active" class="nav-link">
// <div class="nav-icon">
//     <i class="fa fa-file-invoice-dollar fa-lg"></i>
// </div>
// Dépenses
// </a>
// <a routerLink="/customers" routerLinkActive="active" class="nav-link">
// <div class="nav-icon">
//     <i class="fa fa-address-book fa-lg"></i>
// </div>
// Clients et Contrats
// </a>
// <a routerLink="/building" routerLinkActive="active" class="nav-link">
// <div class="nav-icon">
//     <i class="fa fa-building fa-lg"></i>
// </div>
// Patrimoine
// </a>

// export const sideNavItems: SideNavItems = {
//     dashboard: {
//         icon: 'tachometer-alt',
//         text: 'Dashboard',
//         link: '/dashboard',
//     },
//     layouts: {
//         icon: 'columns',
//         text: 'Layouts',
//         submenu: [
//             {
//                 text: 'Static Navigation',
//                 link: '/dashboard/static',
//             },
//             {
//                 text: 'Light Sidenav',
//                 link: '/dashboard/light',
//             },
//         ],
//     },
//     pages: {
//         icon: 'book-open',
//         text: 'Pages',
//         submenu: [
//             {
//                 text: 'Authentication',
//                 submenu: [
//                     {
//                         text: 'Login',
//                         link: '/auth/login',
//                     },
//                     {
//                         text: 'Register',
//                         link: '/auth/register',
//                     },
//                     {
//                         text: 'Forgot Password',
//                         link: '/auth/forgot-password',
//                     },
//                 ],
//             },
//             {
//                 text: 'Error',
//                 submenu: [
//                     {
//                         text: '401 Page',
//                         link: '/error/401',
//                     },
//                     {
//                         text: '404 Page',
//                         link: '/error/404',
//                     },
//                     {
//                         text: '500 Page',
//                         link: '/error/500',
//                     },
//                 ],
//             },
//         ],
//     },
//     charts: {
//         icon: 'chart-area',
//         text: 'Charts',
//         link: '/charts',
//     },
//     tables: {
//         icon: 'table',
//         text: 'Tables',
//         link: '/tables',
//     },
// };
