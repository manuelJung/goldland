// import './setup'
import CMS from 'netlify-cms-app'
// import HomeRoute from './preview/HomeRoute'
import String from './widgets/String'

// CMS.registerPreviewTemplate('homepage-de', HomeRoute)
// CMS.registerPreviewTemplate('homepage-en', HomeRoute)
// CMS.registerPreviewTemplate('homepage-mk', HomeRoute)
// CMS.registerPreviewTemplate('homepage-al', HomeRoute)

CMS.registerWidget('String', String)