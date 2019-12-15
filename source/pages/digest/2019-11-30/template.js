const layout = require('../../../partials/layout/template');
const article = require('../../../partials/article/template');

const renderArticleContent = () => `
<p class="paragraph paragraph--lead">Важные новости и материалы второй половины ноября 2019</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://statecharts.github.io">Welcome to&nbsp;the world of&nbsp;Statecharts</a></h3>
<p class="paragraph">Лаконичное и&nbsp;доступное введение в&nbsp;диаграммы состояний: чем они полезны программисту, почему вы&nbsp;уже используете их&nbsp;неявно, зачем и&nbsp;как использовать их&nbsp;явно.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/xanf_ua/status/1194852796035731456">Один лайк&nbsp;&mdash; один факт о&nbsp;жизни фронтенд-разработчика в&nbsp;GitLab</a></h3>
<p class="paragraph">Большой тред в&nbsp;твитере Ильи Климова о&nbsp;работе фронтенд-разработчиком в&nbsp;GitLab.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://youtu.be/fHQ1WSx41CA">Building (And Re-Building) the Airbnb Design System</a></h3>
<p class="paragraph">Рассказ инженеров Airbnb о&nbsp;том, как они сделали, а&nbsp;затем переделали собственную дизайн-систему, почему так вышло и&nbsp;какие уроки они попутно вынесли.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://css-live.ru/css/css4-ne-budet-potomu-chto-on-davno-proshel-vstrechajte-css8.html">CSS4 не&nbsp;будет&hellip; потому что он&nbsp;давно прошел. Встречайте CSS8!</a></h3>
<p class="paragraph">Илья Стрельцын разбирается в&nbsp;истории развития и&nbsp;текущем состоянии спецификаций&nbsp;CSS.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://habr.com/ru/post/476972/">Deno: время Node.js уходит?</a></h3>
<p class="paragraph">Евгений Бондаренко разбирается, в&nbsp;чём преимущества нового проекта Райана Дала и&nbsp;стоит&nbsp;ли отказываться от&nbsp;Node.js в&nbsp;его пользу</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://pomb.us/build-your-own-react/">Build your own React</a></h3>
<p class="paragraph">Пошаговое руководство Родриго Помбо, основанное на&nbsp;реальной архитектуре React.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://redux-toolkit.js.org">Redux Toolkit</a></h3>
<p class="paragraph">Официальный набор инструментов и&nbsp;практик для эффективной разработки приложений на&nbsp;Redux</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://medium.com/@nodejs/announcing-core-node-js-support-for-ecmascript-modules-c5d6dc29b663">Announcing core Node.js support for ECMAScript modules</a></h3>
<p class="paragraph">В&nbsp;Node.js 13.2.0 по&nbsp;умолчанию включена поддержка ES-модулей.</p>

<h3 class="heading heading--2"><a target="_blank" rel="noopener noreferrer" href="https://github.com/mweststrate/relative-deps">relative-deps</a></h3>
<p class="paragraph">Утилита для связывания локальных пакетов, решающая проблемы npm/yarn link.</p>
`;

module.exports = (context) =>
  layout(context, article(context, renderArticleContent()));