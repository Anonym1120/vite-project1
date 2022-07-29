import elementPlus from 'element-plus'
import localeZH from 'element-plus/lib/locale/lang/zh-tw'
import 'element-plus/theme-chalk/index.css'

export default (app) => {
    app.use(elementPlus, {locale: localeZH})
}