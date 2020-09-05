import { Home, Airplay, Box, FolderPlus, Command, Cloud, FileText, Server, BarChart, Users, Layers } from 'react-feather'
export const MENUITEMS = [
    {
        title: 'Dashboard', icon: Home, type: 'sub', active: false, children: [
            // { path: `${process.env.PUBLIC_URL}/dashboard/default`, title: 'Default', type: 'link' },
            // { path: `${process.env.PUBLIC_URL}/dashboard/ecommerce`, title: 'Ecommerce', type: 'link' },
        ]
    },
    // {
    //     title: 'Widgets', icon: Airplay, type: 'sub', active: false, children: [
    //         { path: `${process.env.PUBLIC_URL}/widgets/general`, title: 'General', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/widgets/chart`, title: 'Chart', type: 'link' },
    //     ]
    // },
    // {
    //     title: 'Ui-Kits', icon: Box, path: `${process.env.PUBLIC_URL}/ui-kits/statecolor`, type: 'sub', active: false, bookmark: true, children: [
    //         { path: `${process.env.PUBLIC_URL}/ui-kits/statecolor`, title: 'State-color', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/ui-kits/typography`, title: 'Typography', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/ui-kits/avatar`, title: 'Avatars', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/ui-kits/helperclass`, title: 'Helper-Classes  ', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/ui-kits/grid`, title: 'Grid', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/ui-kits/tagsandpills`, title: 'Tag & Pills', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/ui-kits/progress-bar`, title: 'Progress', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/ui-kits/modal`, title: 'Modal', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/ui-kits/alert`, title: 'Alert', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/ui-kits/popover`, title: 'Popover', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/ui-kits/tooltips`, title: 'Tooltip', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/ui-kits/spinner`, title: 'Spinners', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/ui-kits/dropdown`, title: 'Dropdown ', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/ui-kits/accordion`, title: 'Accordion', type: 'link' },
    //         {
    //             title: 'Tabs', type: 'sub', children: [
    //                 { title: 'Bootstrap Tabs', type: 'link', path: `${process.env.PUBLIC_URL}/ui-kits/tab-bootstrap` },
    //                 { title: 'Line Tabs', type: 'link', path: `${process.env.PUBLIC_URL}/ui-kits/tab-line` },
    //             ]
    //         },
    //         { path: `${process.env.PUBLIC_URL}/ui-kits/navs`, title: 'Navs ', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/ui-kits/shadow`, title: 'Shadow', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/ui-kits/list`, title: 'List', type: 'link' },
    //     ]
    // },
    // {
    //     title: 'Bonus Ui', icon: FolderPlus, path: `${process.env.PUBLIC_URL}/bonus-ui/scrollable`, type: 'sub', badge1: true, active: false, bookmark: true, children: [
    //         { path: `${process.env.PUBLIC_URL}/bonus-ui/scrollable`, title: 'Scrollable ', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/bonus-ui/bootstrap-notify`, title: 'Bootstrap Notify ', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/bonus-ui/rating`, title: 'Rating', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/bonus-ui/dropzone`, title: 'Dropzone', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/bonus-ui/tourComponent`, title: 'Tour ', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/bonus-ui/sweetAlert`, title: 'SweetAlert ', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/bonus-ui/carousel`, title: 'Owl Carousel', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/bonus-ui/ribbons`, title: 'Ribbons', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/bonus-ui/pagination`, title: 'Pagination', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/bonus-ui/steps`, title: 'Steps ', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/bonus-ui/breadcrumb`, title: 'Breadcrumb ', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/bonus-ui/rangeSlider`, title: 'Range Slider ', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/bonus-ui/imageCropper`, title: 'Image Cropper ', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/bonus-ui/stickyNotes`, title: 'Sticky ', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/bonus-ui/dragNDropComp`, title: 'Drag and Drop ', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/bonus-ui/image-upload`, title: 'Upload', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/bonus-ui/card/basicCards`, title: 'Basic Card ', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/bonus-ui/card/creativeCards`, title: 'Creative Card ', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/bonus-ui/card/tabCard`, title: 'Tabbed Card ', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/bonus-ui/card/draggingCards`, title: 'Draggable Card', type: 'link' },
    //         {
    //             title: 'Timeline', type: 'sub', children: [
    //                 { path: `${process.env.PUBLIC_URL}/bonus-ui/timelines/timeline1`, title: 'Timeline 1', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/bonus-ui/timelines/timeline2`, title: 'Timeline 2', type: 'link' },
    //             ]
    //         },
    //     ]
    // },
    // {
    //     title: 'Icons', icon: Command, path: `${process.env.PUBLIC_URL}/icons/flagIcons`, type: 'sub', active: false, bookmark: true, children: [
    //         { path: `${process.env.PUBLIC_URL}/icons/flagIcons`, title: 'Flag Icon', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/icons/fontAwsomeIcon`, title: 'Fontawesome Icon ', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/icons/icoIcons`, title: 'Ico Icon ', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/icons/themifyIcons`, title: 'Themify Icon ', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/icons/featherIcons`, title: 'Feather Icon ', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/icons/weatherIcons`, title: 'Whether Icon ', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/icons/simplelineIcon`, title: 'Simple Line Icon ', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/icons/material-design-icon`, title: 'Material Design Icon ', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/icons/pe7-icon`, title: 'Pe7 Icon', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/icons/typicons-icon`, title: 'Typicons Icon ', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/icons/ionic-icon`, title: 'Ionic Icon ', type: 'link' },
    //     ]
    // },
    // {
    //     title: 'Buttons', icon: Cloud, type: 'sub', active: false, children: [
    //         { path: `${process.env.PUBLIC_URL}/buttons/default-btn`, title: 'Default Style ', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/buttons/flatBtn`, title: 'Flat Style', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/buttons/edgeBtn`, title: 'Edge Style', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/buttons/raisedBtn`, title: 'Raised Style', type: 'link' },
    //         { path: `${process.env.PUBLIC_URL}/buttons/groupBtn`, title: 'Button Group', type: 'link' },
    //     ]
    // },
    // {
    //     title: 'Forms', icon: FileText, type: 'sub', active: false, children: [
    //         {
    //             title: ' Form Controls ', type: 'sub', children: [
    //                 { title: 'Form Validation', type: 'link', path: `${process.env.PUBLIC_URL}/forms/form-validation` },
    //                 { title: 'Basic Input', type: 'link', path: `${process.env.PUBLIC_URL}/forms/baseInput` },
    //                 { title: 'Checkbox & Radio', type: 'link', path: `${process.env.PUBLIC_URL}/forms/radio-checkbox` },
    //                 { title: 'Input Groups', type: 'link', path: `${process.env.PUBLIC_URL}/forms/inputGroup` },
    //                 { title: 'Mega Option', type: 'link', path: `${process.env.PUBLIC_URL}/forms/megaOptions` },

    //             ]
    //         },
    //         {
    //             title: 'Form Widgets', type: 'sub', children: [
    //                 { title: 'Datepicker', type: 'link', path: `${process.env.PUBLIC_URL}/form-widget/datepicker` },
    //                 { title: 'Timepicker', type: 'link', path: `${process.env.PUBLIC_URL}/form-widget/timepicker` },
    //                 { title: 'Typeahead', type: 'link', path: `${process.env.PUBLIC_URL}/form-widget/typeahead` },
    //             ]
    //         },
    //         {
    //             title: 'Form Layout', type: 'sub', children: [
    //                 { path: `${process.env.PUBLIC_URL}/form-layout/formDefault`, title: 'Form Default', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/form-layout/formWizard`, title: 'Form Wizard', type: 'link' },
    //             ]
    //         },
    //     ]
    // },
    // {
    //     title: 'Tables', icon: Server, type: 'sub', children: [
    //         {
    //             title: ' Reactstrap Table ', type: 'sub', children: [
    //                 { title: 'Basic Table', type: 'link', path: `${process.env.PUBLIC_URL}/table/basic` },
    //                 { title: 'Sizing Table', type: 'link', path: `${process.env.PUBLIC_URL}/table/sizing` },
    //                 { title: 'Border Table', type: 'link', path: `${process.env.PUBLIC_URL}/table/border` },
    //                 { title: 'Styling Table', type: 'link', path: `${process.env.PUBLIC_URL}/table/styling` },
    //             ]
    //         },
    //         {
    //             title: 'Data Tables', path: `${process.env.PUBLIC_URL}/table/datatable`, type: 'link'
    //         }
    //     ]
    // },
    // {
    //     title: 'Charts', icon: BarChart, type: 'sub', active: false, children: [
    //         { path: `${process.env.PUBLIC_URL}/charts/apexCharts`, type: 'link', title: 'Apex Chart' },
    //         { path: `${process.env.PUBLIC_URL}/charts/googleChart`, type: 'link', title: 'Google Chart' },
    //         { path: `${process.env.PUBLIC_URL}/charts/knobChart`, type: 'link', title: 'Knob Chart' },
    //         { path: `${process.env.PUBLIC_URL}/charts/chartJs`, type: 'link', title: 'Chartjs' },
    //         { path: `${process.env.PUBLIC_URL}/charts/chartistComponent`, type: 'link', title: 'Chartist' },
    //     ]
    // },
    // {
    //     title: 'Apps', icon: Users, type: 'sub', active: false, children: [
    //         {
    //             title: 'Ecommerce', type: 'sub', children: [
    //                 { path: `${process.env.PUBLIC_URL}/app/ecommerce/product`, title: 'Product', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/app/ecommerce/product-page/1`, title: 'Product Page', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/app/ecommerce/product-list`, title: 'Product List', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/app/ecommerce/payment-details`, title: 'Payment Detail', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/app/ecommerce/orderhistory`, title: 'Order History', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/app/ecommerce/pricing`, title: 'Pricing', type: 'link' },
    //             ]
    //         },
    //         {path: `${process.env.PUBLIC_URL}/app/email-app`, title: 'Email-app', type: 'link' },
    //         {
    //             title: 'Gallery', type: 'sub', children: [
    //                 { path: `${process.env.PUBLIC_URL}/app/gallery/imageGallery`, title: 'Gallery Grid ', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/app/gallery/imageWithDesc`, title: 'Gallery Grid  Desc ', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/app/gallery/mesonryGallery`, title: 'Masonry Gallery', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/app/gallery/mesonryDesc`, title: 'Masonry With Desc', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/app/gallery/imageHover`, title: 'Hover Effect', type: 'link' }
    //             ]
    //         },
    //         {
    //             title: 'Blog', type: 'sub', children: [
    //                 { path: `${process.env.PUBLIC_URL}/app/blog/blogDetail`, title: 'Blog Details', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/app/blog/blogSingle`, title: 'Blog Single', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/app/blog/blogPost`, title: 'Add Post', type: 'link' },
    //             ]
    //         },
    //         {
    //             title: 'Job Search', type: 'sub', children: [
    //                 { path: `${process.env.PUBLIC_URL}/app/jobSearch/cardView`, title: 'Cards View', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/app/jobSearch/job-list`, title: 'List View', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/app/jobSearch/job-detail`, title: 'Job Details', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/app/jobSearch/job-apply`, title: 'Apply', type: 'link' }
    //             ]
    //         },
    //         {
    //             title: 'Learning', type: 'sub', children: [
    //                 { path: `${process.env.PUBLIC_URL}/app/learning/learning-list`, title: 'Learning List', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/app/learning/learning-detail`, title: 'Detail Course', type: 'link' },
    //             ]
    //         },
    //         { path: `${process.env.PUBLIC_URL}/app/chat-app`, title: 'Chat-app', type: 'link' },
    //         {
    //             title: 'Calender', type: 'sub', children: [
    //                 { path: `${process.env.PUBLIC_URL}/app/calendar/basic-calendar`, type: 'link', title: 'Calender', },
    //                 { path: `${process.env.PUBLIC_URL}/app/calendar/draggable-calendar`, type: 'link', title: 'Draggable' },
    //             ]
    //         },
    //         {
    //             title: 'Users', type: 'sub', children: [
    //                 { path: `${process.env.PUBLIC_URL}/app/users/userProfile`, type: 'link', title: 'Users Profile ' },
    //                 { path: `${process.env.PUBLIC_URL}/app/users/userEdit`, type: 'link', title: 'Users Edit' },
    //                 { path: `${process.env.PUBLIC_URL}/app/users/userCards`, type: 'link', title: 'Users Cards' },
    //             ]
    //         },
    //         {
    //             title: 'Maps', type: 'sub', children: [
    //                 { path: `${process.env.PUBLIC_URL}/app/map/googleMap`, type: 'link', title: 'Google Maps ' },
    //                 { path: `${process.env.PUBLIC_URL}/app/map/leafletMap`, type: 'link', title: 'Leaflet Maps ' },
    //             ]
    //         },
    //         {
    //             title: 'Editor', type: 'sub', children: [
    //                 { path: `${process.env.PUBLIC_URL}/app/editor/ckEditor`, type: 'link', title: 'CK  Editor' },
    //                 { path: `${process.env.PUBLIC_URL}/app/editor/mdeEditor`, type: 'link', title: 'MDE Editor' },
    //                 { path: `${process.env.PUBLIC_URL}/app/editor/acecodeEditor`, type: 'link', title: 'ACE Code Editor' },
    //             ]
    //         },
    //         { path: `${process.env.PUBLIC_URL}/app/bookmark`, type: 'link', title: 'Bookmark' },
    //         { path: `${process.env.PUBLIC_URL}/app/task`, type: 'link', title: 'Task'},
    //         { path: `${process.env.PUBLIC_URL}/app/social-app`, type: 'link', title: 'Social App' },
    //         { path: `${process.env.PUBLIC_URL}/app/contact`, type: 'link', title: 'Contacts' },
    //         { path: `${process.env.PUBLIC_URL}/app/todo-app/todo`, type: 'link', title: 'To-Do' },
    //         { path: `${process.env.PUBLIC_URL}/app/todo-app/todo-firebase`, type: 'link', title: 'To-Do-Firebase' },
    //         { path: `${process.env.PUBLIC_URL}/app/faq`, type: 'link', title: 'FAQ' },
    //         { path: `${process.env.PUBLIC_URL}/app/knowledgebase`, type: 'link', title: 'Knowledgebase' },
    //         { path: `${process.env.PUBLIC_URL}/app/support-ticket`, type: 'link', title: 'Support Ticket' },
    //     ]
    // },
    // {
    //     title: 'Pages', icon: Layers, type: 'sub', badge2: true, active: false, children: [
    //         { path: `${process.env.PUBLIC_URL}/pages/samplepage`, title: 'Sample Page', type: 'link' },  
    //         { path: `${process.env.PUBLIC_URL}/pages/searchpage`, title: 'Search Pages', type: 'link' },
    //         {
    //             title: 'Error Pages', type: 'sub', children: [
    //                 { path: `${process.env.PUBLIC_URL}/pages/errors/error400`, title: 'Error 400', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/pages/errors/error401`, title: 'Error 401', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/pages/errors/error403`, title: 'Error 403', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/pages/errors/error404`, title: 'Error 404', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/pages/errors/error500`, title: 'Error 500', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/pages/errors/error503`, title: 'Error 503', type: 'link' },
    //             ]
    //         },
    //         {
    //             title: 'Coming Soon', type: 'sub', children: [
    //                 { path: `${process.env.PUBLIC_URL}/pages/comingsoon/comingsoon`, title: 'Coming Simple', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/pages/comingsoon/comingsoonImg`, title: 'Coming With Bg Img', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}/pages/comingsoon/comingsoonVideo`, title: 'Coming With Bg Video', type: 'link' },
    //             ]
    //         },
    //         {
    //             title: 'Authentication', type: 'sub', children: [
    //                 { path: `${process.env.PUBLIC_URL}/pages/auth/login`, type: 'link', title: 'Login Simple' },
    //                 { path: `${process.env.PUBLIC_URL}/pages/auth/loginWithBgImg`, type: 'link', title: 'Login with Bg Img' },
    //                 { path: `${process.env.PUBLIC_URL}/pages/auth/loginWithVideo`, type: 'link', title: 'Login With Bg Video' },
    //                 { path: `${process.env.PUBLIC_URL}/pages/auth/signup`, type: 'link', title: 'Register Simple' },
    //                 { path: `${process.env.PUBLIC_URL}/pages/auth/signupWithImg`, type: 'link', title: 'Register With Bg Image' },
    //                 { path: `${process.env.PUBLIC_URL}/pages/auth/signupWithVideo`, type: 'link', title: 'Register With Bg Video' },
    //                 { path: `${process.env.PUBLIC_URL}/pages/auth/unlockUser`, type: 'link', title: 'Unlock User' },
    //                 { path: `${process.env.PUBLIC_URL}/pages/auth/forgetPwd`, type: 'link', title: 'Forget Password' },
    //                 { path: `${process.env.PUBLIC_URL}/pages/auth/resetPwd`, type: 'link', title: 'Reset Password' },
    //                 { path: `${process.env.PUBLIC_URL}/pages/maintenance`, type: 'link', title: 'Maintenance' }
    //             ]
    //         },
    //     ]
    // },

]