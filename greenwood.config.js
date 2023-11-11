import { greenwoodThemeStarterPresentation } from 'greenwood-starter-presentation';

export default {
  
  plugins: [
    greenwoodThemeStarterPresentation()
  ],

  markdown: {
    plugins: [
      '@mapbox/rehype-prism'
    ]
  }
};