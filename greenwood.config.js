import { greenwoodPluginImportCss } from '@greenwood/plugin-import-css';
import { greenwoodThemeStarterPresentation } from 'greenwood-starter-presentation';

export default {
  
  plugins: [
    ...greenwoodPluginImportCss(),
    ...greenwoodThemeStarterPresentation()
  ]

};