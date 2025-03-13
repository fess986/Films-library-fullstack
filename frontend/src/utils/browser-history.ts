import { createBrowserHistory } from 'history'
import type { BrowserHistory } from 'history'

const browserHistory: BrowserHistory = createBrowserHistory() // этот нестандартный объект истории нам нужен для того, чтобы мы могли в MW (типа редиректа ) и чанках использовать объект истории, так как navigate работает только внутри компонентов

export default browserHistory
